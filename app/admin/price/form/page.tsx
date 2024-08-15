import { AdminPanelActions } from "@/app/components/AdminPanelActions/AdminPanelActions";
import { PriceAdminForm } from "@/app/components/PriceAdminForm/PriceAdminForm";

interface IProps {
  searchParams: {
    idPrice?: number;
  };
}

export default function Home({ searchParams: { idPrice } }: IProps) {
  return (
    <>
      <AdminPanelActions
        title="Цены"
        saveBtn={{}}
      />
      <PriceAdminForm idPrice={idPrice} />
    </>
  );
}
