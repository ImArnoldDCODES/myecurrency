import React from "react";
import Image from "next/image";
import { companyLi, contactLi } from "../utils/data";
import Link from "next/link";

export default function Footer() {
  return (
    <main className="bg-blend-multiply relative flex-col w-full min-h-[30rem] py-10 bg-[#12305B] bg-[url('/eclipse-footer.svg')]">
      <div className={"h-[20%] flex m-auto justify-center"}>
        <Image
          src={"/logo-footer.svg"}
          alt="footer_logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center h-[80%] text-white pr-5 pl-10 pt-8 gap-x-20 gap-y-10 lg:gap-y-0">
        <ul>
          <h1 className="text-[1.2rem] uppercase font-semibold">Company</h1>
          <div className="mt-8">
            {companyLi.map(({ title, link }, index) => (
              <li className="text-[#ABABAB] mt-5 cursor-pointer" key={index}>
              <Link href={link && link}>
                {title}
              </Link>
              </li>
            ))}
          </div>
        </ul>

        <ul>
          <h1 className="text-[1.2rem] uppercase font-semibold">Contact</h1>
          <div className="mt-8">
            {contactLi.map(({ title, link }, index) => (
              <li
                className="text-[#ABABAB] even:text-[#fff] even:font-semibold  mt-5"
                key={index}
              >
                {title}
              </li>
            ))}
          </div>
        </ul>

        <div>
          <h1 className="text-[1.2rem] uppercase font-semibold">
            CONSUMER ADVISORY
          </h1>

          <p className="max-w-[28rem] mt-5 text-[1rem] text-medium leading-5 font-light">
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. This product should be used only as
            directed on the label. <br /> All trademarks and copyrights are
            property of their respective owners and not affiliated with nor do
            they endorse this product. Results may vary. <br />
            <br />
            <br />
            By using our website or product, you agree to follow our{" "}
            <span className="text-[#8FE2FF]"> terms of service.</span>
          </p>
        </div>
        <span className="border-[1px] border-[#5D6544] rotate-180 lg:h-[12rem]" />
        <div className="flex flex-col gap-5">
          <h1 className="text-[1.2rem] uppercase font-semibold">
            GET IN TOUCH
          </h1>
          <p className="text-[#ABABAB]">
            Feel free to get in touch with us <br /> via email
          </p>
          <a className="text-[1.7rem] font-semibold" href="mailto:hello@sleepstiq.com">hello@sleepstiq.com</a>
          <div className="flex gap-4">
            <Image
              src={"/linkedin.svg"}
              alt=""
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
            />
            <Image
              src={"/google.svg"}
              alt=""
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
            />
            <Image
              src={"/x.svg"}
              alt=""
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
            />
            <Image
              src={"/facebook.svg"}
              alt=""
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
            />
          </div>
          <p className="text-[#ABABAB] mt-5">
            © 2020@sleepstiq. All Rights Reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
