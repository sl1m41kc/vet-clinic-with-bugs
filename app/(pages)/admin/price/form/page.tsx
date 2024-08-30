'use client'
import { PanelActions } from "@/app/components/Admin/PanelActions/PanelActions";
import { PriceForm } from "@/app/components/Admin/PriceForm/PriceForm";
import { useRef } from "react";

interface IProps {
  searchParams: {
    idPrice?: string;
  };
}

export default function Home({ searchParams: { idPrice } }: IProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <>
      <PanelActions
        title="Цены"
        saveBtn={{
          func: handleSubmit,
        }}
      />
      <PriceForm formRef={formRef} idPrice={idPrice} />
      {/* Блок фиксит баг сброса сбитого курсора при dragging (пропадал скролл из-за этого смещался курсор) */}
      <div className="h-[500px]" />
    </>
  );
}
