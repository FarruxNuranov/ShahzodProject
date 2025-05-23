// src/pages/LandingPage/LandingPage.jsx
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./LandingPage.module.scss";
import Lottie from "lottie-react";
import robotAnimation from "@/assets/robot.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const partnerIcons = [
  "/src/assets/log.png",
  "/src/assets/log.png",
  "/src/assets/log.png",
  "/src/assets/log.png",
  "/src/assets/log.png",
];

const videos = [
  {
    id: "cwDAuqYk-Us",
    title: "LEFT WINGER POINT OF VIEW FOOTBALL I POV FOOTBALL",
  },
  {
    id: "sTMfO9Wz8bw",
    title: "High Level match with Korean Pro football players",
  },
  {
    id: "sfhWbLmvJFE",
    title: "Unbelievable POV! I Played the Dream game in World Cup Stadium",
  },
  {
    id: "0GkbksW6zzY",
    title: "football game with Gopro eye view 6vs6 in romania",
  },
  {
    id: "cwDAuqYk-Us",
    title: "LEFT WINGER POINT OF VIEW FOOTBALL I POV FOOTBALL",
  },
  {
    id: "sTMfO9Wz8bw",
    title: "High Level match with Korean Pro football players",
  },
  {
    id: "sfhWbLmvJFE",
    title: "Unbelievable POV! I Played the Dream game in World Cup Stadium",
  },
  {
    id: "0GkbksW6zzY",
    title: "football game with Gopro eye view 6vs6 in romania",
  },
  {
    id: "cwDAuqYk-Us",
    title: "LEFT WINGER POINT OF VIEW FOOTBALL I POV FOOTBALL",
  },
  {
    id: "sTMfO9Wz8bw",
    title: "High Level match with Korean Pro football players",
  },
  {
    id: "sfhWbLmvJFE",
    title: "Unbelievable POV! I Played the Dream game in World Cup Stadium",
  },
  {
    id: "0GkbksW6zzY",
    title: "football game with Gopro eye view 6vs6 in romania",
  },
];

const cards = [
  {
    img: '/src/assets/123.jpg',
    heading: 'Heading One',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    img: '/src/assets/123.jpg',
    heading: 'Heading Two',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    img: '/src/assets/123.jpg',
    heading: 'Heading Three',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  }
]


export default function LandingPage() {
  const initialIndex = Math.floor(Math.random() * videos.length);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

 

  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <Navbar />
        </div>

        <div className={styles.heroContent}>
          <div className="container">
            <div className={styles.heroBox}>
              <div className={styles.content}>
                <div className={styles.badge}>Over 200+ logomarks created</div>

                <h1 className={styles.title}>
                  Your customer’s first impression is your logo,&nbsp;
                  <span className={styles.highlight}>make it count.</span>
                </h1>

                <p className={styles.subtitle}>
                  A placeholder isn't good enough. Let's create you a brand that
                  helps you thrive today!
                </p>

                <div className={styles.buttons}>
                  <button className={styles.primary}>Let's Get Started</button>
                  <button className={styles.secondary}>Book Quick Chat</button>
                </div>
              </div>

              <div className={styles.animation}>
                <Lottie
                  animationData={robotAnimation}
                  loop
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <div className="container">
          <div className={styles.iconsRow}>
            {partnerIcons.map((src, i) => (
              <div key={i} className={styles.iconBox}>
                <img src={src} alt={`partner-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className="container">
       <div className={styles.video_box}>
           <div className={styles.playerWrapper}>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videos[currentIndex].id}`}
              title={videos[currentIndex].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={3}
            initialSlide={initialIndex}
            onSwiper={setSwiperInstance}
            onSlideChange={({ activeIndex }) => {
              setCurrentIndex(activeIndex);
            }}
            className={styles.videoSwiper}
          >
            {videos.map((video, idx) => (
              <SwiperSlide key={video.id}>
                <div
                  className={styles.thumbBox}
                  onClick={() => {
                    setCurrentIndex(idx);
                    swiperInstance && swiperInstance.slideTo(idx);
                  }}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                  />
                  <p className={styles.thumbTitle}>{video.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
       </div>
        </div>
      </section>
      {/* ——— Cards Section ——— */}
      <section className={styles.cardsSection}>
        <div className="container">
        <div className={styles.card_box}>
              {cards.map((card, idx) => (
            <div key={idx} className={styles.cardItem}>
              <div className={styles.cardImage}>
                <img src={card.img} alt={card.heading} />
              </div>
              <div className={styles.cardContent}>
                <h3>{card.heading}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
