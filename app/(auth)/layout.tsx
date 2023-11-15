const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full items-center flex justify-center">{children}</main>
  );
};

export default AuthLayout;
