import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";

export const FrontLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
