"use client";
import React, { useState } from "react";
import Image from "next/image";
import { testimonials } from "../utils/data";
import { motion } from "framer-motion";

interface QuantitySelectorProps {
  initialQuantity?: number;
}

const About: React.FC<QuantitySelectorProps> = ({ initialQuantity = 1 }) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const pricePerUnit = 50;
  const totalPrice = quantity * pricePerUnit;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <main>
      <motion.section className="bg-[url('/about_bg.svg')] bg-cover bg-origin-border lg:bg-right bg-top bg-no-repeat w-full h-screen flex">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .5 }}
          className="text-[#12305B] flex flex-col justify-center lg:ml-20 ml-10 gap-3"
        >
          <span className="text-[#12305B]">We{"'"}re here to help you</span>
          <h1 className="font-bold text-[3.5rem]">Relax & Rest</h1>
        </motion.div>
      </motion.section>

      <section className="w-full h-screen flex lg:flex-row flex-col lg:my-20 mt-10 lg:mt-10">
        <Image
          src="/about_product.svg"
          alt="About Product"
          width={100}
          height={100}
          className="lg:w-[70%] lg:h-[70%] w-[50%] h-[50%] flex m-auto"
        />
        <div className="flex flex-col gap-4 lg:w-1/2 ml-10 lg:ml-0 mt-[5%]">
          <h1 className="text-[#12305B] text-[2rem] font-bold">
            About Product
          </h1>
          <p className="text-[#21384299] max-w-[70%]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <ul className="flex flex-col">
            <li>😊 Promotes calm and relaxation.</li>
            <li>💤 Inhalation allows for a rapid effect.</li>
            <li>✅ 100% drug-free, plant-based ingredients.</li>
            <li> ‍⚕️ 3rd-party lab tested.</li>
          </ul>
          <div className="flex gap-10">
            <div>
              <h4 className="font-medium">Price</h4>
              <h4 className="font-semibold">USD {totalPrice}</h4>
            </div>
            <div>
              <h4 className="font-medium">Unit</h4>
              <input
                type="number"
                name="increment_decrement"
                id="increment_decrement"
                value={quantity}
                min="0"
                onChange={handleChange}
                className="border-2 border-[#12305B] outline-none h-[1.5rem] w-[2.5rem] rounded"
              />
            </div>
          </div>
          <button className="text-white bg-[#FC5959] hover:bg-[#12305B] w-[10rem] h-[3rem] rounded mt-2">
            Buy
          </button>
        </div>
      </section>

      <section className="scrollbar mb-10 lg:ml-80 ml-10 mt-20 lg:mt-20 flex overflow-x-auto space-x-10 outline-none">
        {testimonials.map((data, index) => (
          <div
            key={index}
            className="hover:scale-[1.1] cursor-pointer bg-[#FBF9F2] w-[18rem] min-x-h-[12rem] py-8 px-8 rounded flex flex-col flex-shrink-0"
          >
            <h4 className="max-w-[95%] italic">{data.msg}</h4>

            <div className="flex flex-col mt-auto">
              <h5 className="text-[#4D533C] font-bold">{data.name}</h5>
              <Image src="/rating.svg" alt="stars" width={100} height={100} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default About;
