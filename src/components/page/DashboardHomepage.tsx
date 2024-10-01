import { Outlet } from "react-router-dom";
import { SidebarLinks, TopNavbar } from "../fragments";
import { DashboardLayout } from "../layout";

const DashboardHomepage = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full">
        <SidebarLinks />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <div className="container mx-auto p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHomepage;
