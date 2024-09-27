import { SidebarLinks, TopNavbar } from "../fragments";
import { DashboardLayout } from "../layout";
import { StockLow } from "../template";
import CardsStaff from "../template/CardsData/CardsStaff";
import { HeadingLvOne } from "../ui";

const DashboardHomepage = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full">
        <SidebarLinks />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-4">
                <HeadingLvOne style="mb-2">Staff Details</HeadingLvOne>
                <CardsStaff />
              </div>

              <div className="bg-white rounded-lg shadow-md p-4">
                <StockLow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHomepage;
