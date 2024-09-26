import { twMerge } from "tailwind-merge";
import { DashboardLayoutType } from "../../model/type";

const DashboardLayout = ({
  style,
  children,
  ...props
}: DashboardLayoutType) => {
  return (
    <div className={twMerge(`flex w-full max-w-[1600px]`, style)} {...props}>
      {children}
    </div>
  );
};

export default DashboardLayout;
