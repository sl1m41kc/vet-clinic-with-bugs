import Link from "next/link";
import LogoSVG from "../../public/Svg/logo_vetlekar_horizontal.svg";

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="absolute top-[20px] left-[20px] w-[250px]">
        <Link href="/">
          <LogoSVG className="w-full" />
        </Link>
      </header>
      {children}
    </>
  );
};
