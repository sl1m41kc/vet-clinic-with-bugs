import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/header";

export const FrontLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
