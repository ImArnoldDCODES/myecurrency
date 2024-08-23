"use client";
import React, { useState } from "react";
import Image from "next/image";
import { questions } from "./../utils/data";
import { motion, AnimatePresence } from "framer-motion";

const FAQS: React.FC = ({}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <main>
      <section className="bg-[#FBF9F2] w-full h-screen flex">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[#12305B] flex flex-col justify-center lg:ml-20 ml-8 gap-3"
        >
          <span className="text-[#12305B]">We{"'"}re here to help you</span>
          <h1 className="font-bold md:text-[3.5rem] text-[1.5rem]">
            How can we assit?
          </h1>

          <div className="bg-white flex md:w-[40rem] md:h-[4rem] w-[95%] h-[3rem] pl-5">
            <Image
              src={"/search_icon.svg"}
              alt="search_icon"
              width={25}
              height={25}
            />
            <input
              type="text"
              placeholder="Search FAQs here"
              className="placeholder:text-[#12305B] text-[1.3rem] ml-3 outline-none w-full"
            />
          </div>
        </motion.div>
      </section>
      <section className="my-14 lg:ml-20 lg:mr-60 mr-10 ml-5 h-full flex lg:flex-row flex-col">
        <div className="flex lg:w-[20%] mb-10">
          <ul className="flex flex-col gap-5">
            <li className="font-bold text-[#12305B] text-[1.3rem]">
              Sleepstiq <span className="bg-[#FFD7231A] py-3">Product</span>
            </li>
            <li className="font-medium text-[1.3rem]">Order</li>
            <li className="font-medium text-[1.3rem]">Melantonin</li>
          </ul>
        </div>
        <div className="lg:w-[80%] lg:ml-20 flex flex-col gap-5">
          {questions.map((data, index) => (
            <div key={index}>
              <hr className="bg-[#BDBDBD] h-[2px]" />
              <h1
                className="text-[#12305B] text-[1.3rem] my-2 cursor-pointer"
                onClick={() => handleQuestionClick(index)}
              >
                {data.question}
              </h1>
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-[#12305B]">{data?.answer}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <hr className="bg-[#BDBDBD] h-[2px]" />
        </div>
      </section>
    </main>
  );
};

export default FAQS;
