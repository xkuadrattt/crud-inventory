import { SidebarLinks, TopNavbar } from "../fragments";
import { DashboardLayout } from "../layout";
import { TableStaff } from "../template";

const DashboardHomepage = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full">
        <SidebarLinks />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <div className="w-full p-6">
            <TableStaff />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHomepage;
