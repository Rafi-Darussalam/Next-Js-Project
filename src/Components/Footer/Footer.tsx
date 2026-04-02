import FooterLink from "./FooterLink";
import { IoMdShare } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-bg-primary">
      <div className="absolute w-full h-full bg-teritary opacity-30" />
      <div className="border-y border-nav-bg">
        <div className="relative py-9 px-12">
          <div className="flex flex-col gap-5 justify-between md:flex-row">
            <div className="flex flex-col gap-2 text-white">
              <p className="text-[1.2rem] font-bold">LAMBORGHINI</p>
              <div className="flex gap-2 text-2xl opacity-55">
                <IoMdShare />
                <BiWorld />
                <FaYoutube />
              </div>
            </div>
            <FooterLink className="text-white" />
          </div>

        </div>
      </div>
      <div className="px-9 py-6">
        <p className="text-white opacity-50 text-[0.8rem]">
          &copy; {new Date().getFullYear()} AUTOMOBILI LAMBORGHINI S.P.A ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}