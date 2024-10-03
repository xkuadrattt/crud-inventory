import { Link } from "react-router-dom";

const CtaHero = () => {
  return (
    <div className="flex gap-4">
      <button className="px-2 py-1 rounded-md bg-cyan-700 hover:bg-cyan-600 text-white ">
        Coba Sekarang
      </button>
      <Link to="#service">
        <button className="px-2 py-1 rounded-md border border-purple-500 hover:bg-purple-200 ">
          Selengkapnya
        </button>
      </Link>
    </div>
  );
};

export default CtaHero;
