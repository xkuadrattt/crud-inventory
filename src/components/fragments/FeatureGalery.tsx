import homepageImg from "../../assets/img/homepage.png";
import homepageResponsive from "../../assets/img/featurehomepage.gif";
import productImg from "../../assets/img/products.png";
import productResponsive from "../../assets/img/lv_0_20241002163651.gif";

const FeatureGalery = () => {
  return (
    <div className="custom-grid grid gap-2 sm:grid-cols-[1fr_auto] min-h-screen">
      <img
        src={homepageImg}
        alt={homepageImg}
        className="w-full border border-cyan-700"
      />
      <img
        src={homepageResponsive}
        alt={homepageResponsive}
        className="w-full max-w-[200px] lg:max-w-[250px] border border-cyan-700"
      />
      <img
        src={productImg}
        alt={productImg}
        className="w-full border border-cyan-700"
      />
      <img
        src={productResponsive}
        alt={productResponsive}
        className="w-full max-w-[200px] lg:max-w-[250px] border border-cyan-700"
      />
    </div>
  );
};

export default FeatureGalery;
