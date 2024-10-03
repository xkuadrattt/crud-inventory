import iconStorage from "../assets/img/database.webp";
import iconExport from "../assets/img/arrow.webp";
import iconDevices from "../assets/img/responsive.webp";

type Services = {
  img: string;
  desc: string;
};

export const services: Services[] = [
  {
    img: iconStorage,
    desc: "Aplikasi terisolasi menjamin data Anda aman dari pencurian. Kata sandi adalah kuasa Anda",
  },
  {
    img: iconExport,
    desc: "Kemudahan dalam export data membantu ketika sistem barang utama Anda sudah pulih",
  },
  {
    img: iconDevices,
    desc: "Antarmuka responsif untuk setiap ukuran layar. Sehingga Stockiesss bisa diakses kapan pun dimana pun",
  },
];
