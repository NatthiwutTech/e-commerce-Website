import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { Pagination, Autoplay, Navigation } from "swiper/modules";



const ContentCarousel = () => {

  const [data, setData] = useState([
    // { id: 1, download_url: "https://placehold.co/600x400/cccccc/999999" },
    // { id: 2, download_url: "https://placehold.co/600x400/cccccc/999999" },
    // { id: 3, download_url: "https://placehold.co/600x400/cccccc/999999" },
    // { id: 4, download_url: "https://placehold.co/600x400/cccccc/999999" },
  ]);
  useEffect(() => {
    hdlGetImage();
  }, []);

  const hdlGetImage = () => {
    // code
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=20")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper h-80 object-cover 
        rounded-md mb-4"
      >
        {data?.map((item, i) => (
          <SwiperSlide>
            <img src={item.download_url} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper object-cover rounded-md"
      >
        {data?.map((item, i) => (
          <SwiperSlide>
            <img
              className="rounded-md"
              src={item.download_url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentCarousel;
