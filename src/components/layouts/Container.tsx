type ChildrenProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ChildrenProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden ">
      {children}
      <div className="absolute z-[99]"></div>
    </div>
  );
};

export default Container;
