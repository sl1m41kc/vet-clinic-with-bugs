"use client";
import { AdminPanelActions } from "@/app/components/AdminPanelActions/AdminPanelActions";
import { AdminListPrice } from "@/app/components/AdminListPrice/AdminListPrice";
import { useRef } from "react";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <>
      <AdminPanelActions
        title="Цены"
        addBtn={{
          text: "Добавить раздел",
          link: "price/form",
        }}
        saveBtn={{
          func: handleSubmit,
        }}
      />
      <AdminListPrice formRef={formRef} />
    </>
  );
}
