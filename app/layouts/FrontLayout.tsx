import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

export const FrontLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
