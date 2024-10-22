import Link from "next/link";
import Image from "next/image";
import { footerExtraLinks, footerLinks } from "@/constants";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
const Footer = () => {
  return (
    <footer className="bg-[#f7f3ed] text-gray-700 py-[101px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="row-span-4">
            <Link className="mb-[70px] block" href="/">
              <Image
                src="/site-logo.svg"
                alt="Logo"
                className="h-10"
                width={139}
                height={25}
              />
            </Link>
            <div className="flex flex-col gap-[6px] text-[13px] leading-[18px]">
              <p>© Все права защищены</p>
              <p>Политика конфиденциальности</p>
              <p>Публичная оферта</p>
            </div>
          </div>

          <div className="col-span-3">
            <ul className="flex items-center justify-between">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    className="text-[15px] leading-5 tracking-wider"
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="row-span-4 col-start-5">
            <div className="flex flex-col gap-y-[30px] text-right">
              <div className="flex flex-col gap-y-[10px]">
                <a href="tel:+74958235412">+7 (495) 823-54-12</a>
                <a href="mailto:hello@womazing.com">hello@womazing.com</a>
              </div>
              <div className="flex items-center justify-end gap-x-3">
                <Link href="#">
                  <AiOutlineInstagram className="w-[22px] h-[22px]" />
                </Link>
                <Link href="#">
                  <AiOutlineFacebook className="w-[22px] h-[22px]" />
                </Link>
                <Link href="#">
                  <TfiTwitter className="w-[22px] h-[22px]" />
                </Link>
              </div>
              <div className="text-right">
                <Link href="#">
                  <Image
                    src="/visa-mastercard.png"
                    alt="Visa"
                    className="w-[68px] h-[22px]"
                    width={68}
                    height={22}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-3 row-span-3 col-start-2 row-start-2 pt-[40px]">
            <ul className="space-y-1">
              {footerExtraLinks.map((link) => (
                <li key={link.id}>
                  <Link className="leading-[18px] text-[13px]" href={link.url}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
