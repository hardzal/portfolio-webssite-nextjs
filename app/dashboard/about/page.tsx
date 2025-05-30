/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SpinnerButton from "@/components/content/auth/components/Spinner";
import AboutForm from "@/components/content/dashboard/components/about/about-form";
import useEditAbout from "@/components/content/dashboard/hooks/about/useEditAbout";
import useGetAbout from "@/components/content/dashboard/hooks/about/useGetAbout";
import React, { useEffect } from "react";

interface aboutProps {
  form: any;
  isPendingAbout: boolean;
  isSuccess: boolean;
  onSubmitAbout: any;
  handlePreview: any;
  previewURL: string | null;
  setPreviewURL: any;
}

export default function AboutPage() {
  const { isLoadingAbout, dataAbout } = useGetAbout();

  const {
    form,
    isPendingAbout,
    isSuccess,
    onSubmitAbout,
    handlePreview,
    previewURL,
    setPreviewURL,
  } = useEditAbout({ id: dataAbout?.id });

  useEffect(() => {
    if (dataAbout) {
      form.reset({
        email: dataAbout?.email || "",
        status: dataAbout?.is_available || false,
        title: dataAbout?.title || "",
        profession: dataAbout?.profession || "",
        location: dataAbout?.location || "",
        handphone: dataAbout?.handphone || "",
        resume: dataAbout?.resume || "",
        description: dataAbout?.description || "",
        image: undefined, // file field, kosongkan
      });
      setPreviewURL(dataAbout.image);
    }
  }, [dataAbout, form, setPreviewURL]);

  const qAbout: aboutProps = {
    form,
    isPendingAbout,
    handlePreview,
    isSuccess,
    onSubmitAbout,
    previewURL,
    setPreviewURL,
  };

  if (isLoadingAbout) {
    return <SpinnerButton />;
  }

  return (
    <div className={"flex flex-col"}>
      <div className={"flex p-5"}>
        <h1 className={"text-2xl"}>About Page</h1>
      </div>

      <div className={"container w-full"}>
        <AboutForm {...qAbout} />
      </div>
    </div>
  );
}
