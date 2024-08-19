'use client'
import { AdminPanelActions } from "@/app/components/AdminPanelActions/AdminPanelActions";
import { PriceAdminForm } from "@/app/components/PriceAdminForm/PriceAdminForm";
import { useRef } from "react";

interface IProps {
  searchParams: {
    idPrice?: number;
  };
}

export default function Home({ searchParams: { idPrice } }: IProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <>
      <AdminPanelActions
        title="Цены"
        saveBtn={{
          func: handleSubmit,
        }}
      />
      <PriceAdminForm formRef={formRef} idPrice={idPrice} />
    </>
  );
}
