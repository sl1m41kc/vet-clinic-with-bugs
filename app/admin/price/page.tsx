import { AdminHeader } from "@/app/components/AdminHeader/AdminHeader";
import { AdminPanelActions } from "@/app/components/AdminPanelActions/AdminPanelActions";
import { AdminListPrice } from "@/app/components/AdminListPrice/AdminListPrice";

export default function Home() {
  return (
    <>
      <AdminPanelActions
        title="Цены"
        addBtn={{
          text: "Добавить раздел",
          link: "price/form",
        }}
        saveBtn={{}}
      />
      <AdminListPrice />
    </>
  );
}
