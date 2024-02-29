import React, { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { CgScreen } from "react-icons/cg";
import { IoIosList } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import GridImages from "./GridImages";
import ListImages from "./ListImages";
import FullImages from "./FullImages";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImagesHeader = () => {
  const data = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1180494132/photo/dandelion.webp?b=1&s=170667a&w=0&k=20&c=wnTaVyEHQkh_hpKz_9K-XSuFbE0XmnAgJlYpHWdp4nI=",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1826408215/photo/butterfly-alone.jpg?s=612x612&w=0&k=20&c=2WUKhYcR3G5zC60OXsRCwJC__ydMFemJhigMiiOpC3U=",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1161394969/photo/autumn-background.jpg?s=612x612&w=0&k=20&c=jiv_NhMUpOHkQoCPc-1WYGbc-9YuFHN8BZaP8nxtYZ4=",
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/1450966042/photo/full-frame-of-green-leaves-pattern-background.jpg?s=612x612&w=0&k=20&c=hg9ZRWeomB_CSBlfpMroRI4MiOohxuBMmn-5cUr6O_s=",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/christmas-lantern-with-fir-branch-decoration-snowy-table-defocused-background-generative-ai_1258-150854.jpg?w=996&t=st=1709171520~exp=1709172120~hmac=bc3ecfcd6945d606b15d06975ebcfb718c168b90b6866e52091e5e3e82d11b94",
    },
    {
      id: 6,
      img: "https://media.istockphoto.com/id/184342766/photo/morning-in-the-field.jpg?s=612x612&w=0&k=20&c=W6GawpPDvodt5Bbn5Kghyn6K6op4-k7Fu3O3eiubRAQ=",
    },
    {
      id: 7,
      img: "https://media.istockphoto.com/id/626772576/photo/margaret-flowers.jpg?s=612x612&w=0&k=20&c=FQ0FoeIb0LmgquGXYSK5luz0p9KWC5PtgsJceW2Y0FQ=",
    },
    {
      id: 8,
      img: "https://media.istockphoto.com/id/1154831464/photo/bright-neon-tropical-palm-background-leaves-pink-and-dark-jungle-texture.jpg?s=612x612&w=0&k=20&c=-_SrKtsOch164KFWz0fPP8yn9hEMOwu7NqBo-O6Uh6A=",
    },
    {
      id: 9,
      img: "https://media.istockphoto.com/id/1125637203/photo/summer-meadow.jpg?s=612x612&w=0&k=20&c=8_UowhvPu7wAeRnRQqO3fmaoIAZgalzVRhJo7AaHbmM=",
    },
  ];
  const [view, setView] = useState("grid");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="bg-black/70 text-white flex items-center justify-between px-5 py-3 rounded-t-md">
        <h5>Images</h5>
        <div className="flex items-center">
          <button
            className="active:bg-gray-600 active:rounded p-1  duration-100"
            onClick={() => setView("grid")}
          >
            <IoGridOutline />
          </button>
          <RxDividerVertical size={20} />
          <button
            className="active:bg-gray-600 active:rounded p-1  duration-100"
            onClick={() => setView("list")}
          >
            <IoIosList size={20} />
          </button>
          <RxDividerVertical size={20} />
          <button
            className="active:bg-gray-600 active:rounded p-1  duration-100"
            onClick={() => setView("full")}
          >
            <CgScreen size={16} />
          </button>
        </div>
      </div>
      <div
        className={`bg-black/90 py-5 rounded-b-md h-[534px]
        ${view === "grid" && "grid px-5 grid-cols-3 gap-4 "}
        ${view === "list" && "flex flex-col gap-y-2 overflow-y-auto"}
        ${view === "full" && "px-5"}`}
      >
        {view === "grid" &&
          data.map(({ id, img }) => <GridImages key={id} img={img} />)}
        {view === "list" &&
          data.map(({ id, img }) => <ListImages key={id} img={img} />)}
        {view === "full" && (
          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              // loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 mb-5"
            >
              {data.map(({ id, img }) => (
                <SwiperSlide
                  className="rounded-md bg-black/90 h-[410px]"
                  key={id}
                >
                  <FullImages img={img} />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={8}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {data.map(({ id, img }) => (
                <SwiperSlide className="rounded-lg bg-black" key={id}>
                  <FullImages img={img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </>
  );
};

export default ImagesHeader;
