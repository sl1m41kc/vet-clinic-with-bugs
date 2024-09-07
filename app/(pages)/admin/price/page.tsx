'use client';
import { ListPrice } from '@/app/components/Admin/ListPrice/ListPrice';
import { PanelActions } from '@/app/components/Admin/PanelActions/PanelActions';
import { useRef } from 'react';

export default function Home() {
  // В панели есть кнопка "сохранить" которую необходимо объединить с формой в другом компоненте
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <>
      <PanelActions
        title="Цены"
        addBtn={{
          text: 'Добавить раздел',
          link: 'price/form',
        }}
        saveBtn={{
          func: handleSubmit,
        }}
      />
      <ListPrice formRef={formRef} />
    </>
  );
}
