import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import news from "../../data/news";

export default function News() {
    return (
        <div className="py-16">
            <h2 className="text-3xl font-semibold mb-6">News</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* news list */}
                {news.map((news, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
                            <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                                <img src={news.image} alt="" className="w-full w-200 h-300 overflow-hidden flex justify-center bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 size-50" />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">{news.title}</h3>
                                <p className="text-gray-600 mb-5">{news.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}