'use client';
import LogoSVG from "../../public/Svg/logo_vetlekar_horizontal.svg";

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {

  const redirectHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <header className="">
          <LogoSVG className="absolute cursor-pointer top-[20px] left-[20px] w-[250px]" onClick={redirectHome} />
      </header>
      {children}
    </>
  );
};
