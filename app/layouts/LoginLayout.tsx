import Logo from '@/app/components/Logo/Logo';

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="absolute top-[20px] left-[20px] w-[250px]">
        <Logo />
      </header>
      {children}
    </>
  );
};
