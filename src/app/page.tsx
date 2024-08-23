import Image from "next/image";
import Slider from "./utils/slider";
import { testimonials, products } from "./utils/data";

export default function Home() {
  return (
    <main className="w-full h-full border-[#000] mb-20 flex flex-col gap-y-20 lg:gap-y-0">
      <section className="bg-[url('/background.svg')] bg-cover bg-origin-border lg:bg-center bg-top bg-no-repeat w-full h-screen flex">
        <div className="text-[#12305B] flex flex-col justify-center lg:ml-20 ml-10 gap-3">
          <span className="text-[#12305B]">We{"'"}re here to help you</span>
          <h1 className="font-bold text-[3.5rem]">Relax & Rest</h1>
          <h1 className="max-w-[90%] lg:max-w-[100%]">
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can <br className="hidden lg:block" /> get quality sleep.
          </h1>
          <button className="text-white bg-[#FC5959] hover:bg-[#12305B] w-[14rem] h-[3rem] rounded mt-2">
            Visit Shop
          </button>
        </div>
        <Image
          src={"/brands.svg"}
          alt="brand_supports"
          width={100}
          height={100}
          className="w-[50rem] absolute right-0 bottom-[-7rem] lg:flex hidden"
        />
      </section>

      <section className="flex lg:flex-row flex-col h-screen items-center justify-center lg:mx-20 mx-10">
        <div className="relative">
          <h5 className="text-[#12305B] text-[1rem]">Our Amazing Story</h5>
          <h1 className="text-[#12305B] mt-7 text-[2.2rem] font-bold">
            10k+ Happy <span className="bg-[#FBF9F2] px-2">Customers</span>
          </h1>

          <p className="text-[#21384299] mt-10 mb-5">
            There’s no secret sauce, no wizard behind the curtain. What <br />{" "}
            makes Aerolab tick is an interdisciplinary team with a <br />{" "}
            framework that fosters candid collaboration.
          </p>

          <span className="text-[#12305B] underline">
            {" "}
            ▶ More know About us
          </span>
        </div>
        <Slider />
      </section>

      <section className="scrollbar lg:ml-80 ml-10 flex overflow-x-auto space-x-10 py-4 outline-none">
        {testimonials.map((data, index) => (
          <div
            key={index}
            className="bg-[#FBF9F2] w-[18rem] min-x-h-[12rem] py-8 px-8 rounded flex flex-col flex-shrink-0"
          >
            <h4 className="max-w-[95%] italic">{data.msg}</h4>

            <div className="flex flex-col mt-auto">
              <h5 className="text-[#4D533C] font-bold">{data.name}</h5>
              <Image src={"/rating.svg"} alt="stars" width={100} height={100} />
            </div>
          </div>
        ))}
      </section>

      <section className="w-full h-screen flex lg:flex-row flex-col">
        <Image
          src={"/shop.svg"}
          alt="Shop Now"
          width={100}
          height={100}
          className={"lg:w-1/2 w-full"}
        />
        <div className="flex flex-col gap-4 lg:w-1/2 ml-10 lg:ml-0 mt-[10%]">
          <h1 className="text-[#12305B] text-[2rem] font-bold">Shop Now</h1>
          <p className="text-[#21384299] max-w-[70%]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <button className="text-white bg-[#FC5959] hover:bg-[#12305B] w-[14rem] h-[3rem] rounded mt-2">
            Visit Shop
          </button>
        </div>
      </section>

      <section className="w-full h-screen flex lg:flex-row flex-col">
        <div className="flex flex-col gap-4 lg:w-1/2 mt-[10%] lg:ml-20 ml-10">
          <h1 className="text-[#12305B] text-[2rem] font-bold">Our Mission</h1>
          <p className="text-[#21384299] max-w-[75%]">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That{"'"}s why we created products that aim to -
          </p>
          <ul className="text-[#21384299]">
            <li>✓ Promote Calm </li>
            <li>✓ Support Sleep </li>
            <li>✓ Reduce Stress </li>
            <li>✓ Aid Relaxation</li>
          </ul>
        </div>
        <Image
          src={"/mission.svg"}
          alt="Our mission"
          width={100}
          height={100}
          className={"lg:w-1/2 w-full w-[85%] h-[85%] flex m-auto"}
        />
      </section>

      <section className="lg:mt-40 mt-10 lg:mx-20 flex flex-col items-center">
        <h1 className="text-[#12305B] text-[2.2rem] font-bold">
          Visit Our Shop
        </h1>
        <p className="text-[#21384299] mt-8 w-[80%] text-center">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <button className="mt-5 text-white bg-[#FC5959] hover:bg-[#12305B] w-[14rem] h-[3rem] rounded mt-2">
          Visit Shop
        </button>
      </section>

      <section className="lg:mt-40 mt-5 lg:ml-20">
        <h1 className="text-[2.2rem] font-bold lg:ml-20 ml-10">
          Product Reviews
        </h1>

        <section className="scrollbar lg:ml-20 ml-10 flex overflow-x-auto space-x-10 py-4 outline-none">
          {products.map((data, index) => (
            <div
              key={index}
              className="bg-white w-[18rem] min-x-h-[12rem] rounded flex flex-col flex-shrink-0 drop-shadow-2xl"
            >
              <Image
                src={data.img}
                alt="products"
                width={100}
                height={100}
                className={"w-full"}
              />
              <div className="px-8  py-8 flex flex-col h-full">
                <h4 className="max-w-[95%] italic">{data.msg}</h4>

                <div className="flex flex-col mt-auto">
                  <h5 className="text-[#4D533C] font-bold">{data.name}</h5>
                  <Image
                    src={"/rating.svg"}
                    alt="stars"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
