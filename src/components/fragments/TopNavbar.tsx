import AvatarProfile from "./AvatarProfile";

const TopNavbar = () => {
  return (
    <header className="flex">
      <div className="ml-auto">
        <AvatarProfile user="Taufik" role="Developer" />
      </div>
    </header>
  );
};

export default TopNavbar;
