import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { LoginSchemaUser, LoginUserDTO } from "../types/auth.schema";
import { axiosInstance } from "@/configs/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface LoginResponse {
  token: string;
  expires_at: string;
}

export default function useLogin() {
  const router = useRouter();

  const form = useForm<LoginUserDTO>({
    resolver: zodResolver(LoginSchemaUser),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isPending, mutateAsync: mutateLogin } = useMutation<
    LoginResponse,
    Error,
    LoginUserDTO
  >({
    mutationKey: ["login"],
    mutationFn: async (data: LoginUserDTO) => {
      const response = await axiosInstance.post<LoginResponse>(
        `auth/login`,
        data
      );
      Cookies.set("token", response.data.token, {
        expires: 1,
      });
      return response.data;
    },

    onError: (error) => {
      const errorMessage = error.message;

      toast.error("Login failed", {
        description: errorMessage,
      });
    },

    onSuccess: async () => {
      toast.success("Login success", {
        description: "success login",
      });

      router.push("/dashboard");
    },
  });

  async function onSubmit(data: LoginUserDTO) {
    mutateLogin(data);
  }

  return {
    onSubmit,
    form,
    isPending,
  };
}
