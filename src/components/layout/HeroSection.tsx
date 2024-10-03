import { HeroSectionProps } from "../../model/type";

const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <section className="min-h-screen items-center gap-8 sm:gap-0 flex justify-between flex-col-reverse mt-20 sm:mt-0 sm:flex-row">
      {children}
    </section>
  );
};

export default HeroSection;
