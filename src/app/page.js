"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent.js";
import { Hind } from "next/font/google";
import MySlider from './components/SliderCard/MySlider.js'

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <div
        id="portfolio"
        className="mt-0 pt-5 -mb-40"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #eef7fb 0 45%, white 0% 100%)",
          width: "100%",
        }}>
          <div className="container m-auto">
            <p className="text-[300px] text-[#f7fbfd] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
            style={{transform:"translate(0px, -20px)"}}>
              portfolio
              </p>
            
            <div 
            style={{transform:"translate(0px, -250px)"}}>
              <p className="text-[#48afde] md:pl-[80px] px-5 font-extrabold text-5xl">Recent Works</p>
              <p className={`max-w-2xl md:pl-[80px] px-5 text-[16px] text-[#47626d] leading-8 mt-5 ${hind.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at dictum libero. In vehicula, nisi eu tempor pulvinar, magna quam fermentum felis, et consectetur arcu eros sit amet magna. Sed nec erat ac enim mollis dignissim id vitae arcu. Morbi id lacus turpis. Etiam ut justo sapien. Aliquam bibendum magna eu magna tincidunt, eget finibus nisl pharetra. Fusce ac dictum lorem. Nulla facilisi.
              </p>

            </div>
            </div>
            <div className="">
              <MySlider/>
            </div>
        </div>
    </main>
  );
}
