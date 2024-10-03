import {
  CopyHero,
  CtaHero,
  HeadlineHero,
  NavbarLandingPage,
} from "../fragments";
import {
  FeatureSection,
  FinalCtaSection,
  FooterSection,
  HeroSection,
  ServiceSection,
} from "../layout";
import imgHero from "../../assets/img/etalaseproduk1.webp";
import imgHeroSm from "../../assets/img/etalaseproduk1300p.jpg";

const LandingPage = () => {
  return (
    <>
      <NavbarLandingPage />
      <div id="home" className="container px-4 sm:px-0">
        <HeroSection>
          <div className="flex flex-col gap-6 max-w-[748px]">
            <HeadlineHero />
            <CopyHero />
            <CtaHero />
          </div>
          <picture>
            <source srcSet={imgHero} media="(min-width: 1377px)" />
            <source srcSet={imgHeroSm} />
            <img src={imgHeroSm} alt="img hero" />
          </picture>
        </HeroSection>
        <ServiceSection />
        <FeatureSection />
        <FinalCtaSection />
        <FooterSection />
      </div>
    </>
  );
};

export default LandingPage;
