// src/pages/LandingPage/LandingPage.jsx
import React, { useState } from "react";
import Navbar from '../../components/navbar/Navbar.jsx'
import styles from "./LandingPage.module.scss";
import Lottie from "lottie-react";
import robotAnimation from "../../assets/robot.json";
import { Swiper, SwiperSlide } from "swiper/react";
import portrait from '../../assets/portrait.png' // ваш портрет
import Footer from "../../components/footer/Footer.jsx";
import { Navigation, Pagination } from 'swiper/modules'
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { item1, item2, logo } from "../../utils/getImg.js";


const partnerIcons = [
  logo,
  logo,
  logo,
  logo,

 
 
 
];

const videos = [
  {
    id: "cwDAuqYk-Us",
    title: "",
  },
  {
    id: "sTMfO9Wz8bw",
    title: "",
  },
  {
    id: "sfhWbLmvJFE",
    title: "",
  },
  {
    id: "0GkbksW6zzY",
    title: "",
  },
  {
    id: "cwDAuqYk-Us",
    title: "",
  },
  {
    id: "sTMfO9Wz8bw",
    title: "",
  },
  {
    id: "sfhWbLmvJFE",
    title: "",
  },
  {
    id: "0GkbksW6zzY",
    title: "",
  },
  {
    id: "cwDAuqYk-Us",
    title: "",
  },
  {
    id: "sTMfO9Wz8bw",
    title: "",
  },
  {
    id: "sfhWbLmvJFE",
    title: "",
  },
  {
    id: "0GkbksW6zzY",
    title: "",
  },
];

const cards = [
  {
    img: item1,
    heading: 'Player Detection from Video',
    text: 'The first step is detecting the players on the football field using video input. This involves using computer vision techniques such as object detection (e.g., YOLO, OpenPose, or MediaPipe) to accurately identify and track each player throughout the match. This stage is essential for gathering data about player movements, positions, and actions.'
  },
  {
    img: item2,
    heading: 'Event Detection in the Game',
    text: 'The second step is recognizing key events during the game. This includes detecting passes, goals, fouls, offsides, and other significant moments. Using machine learning models trained on labeled football footage, the system can classify actions based on video patterns and context. This step helps structure the match into understandable segments for further analysis.'
  },
  {
    img: item1,
    heading: 'Integration with AI for Commentary',
    text: 'The final step is connecting the detected data to an AI system that generates real-time commentary. Using natural language generation (NLG) models like GPT, the AI can produce human-like commentary based on the detected players and events. For example, if a player scores a goal, the AI can instantly describe the event with contextual flair—just like a real sports commentator.'
  }
]


export default function LandingPage() {
  const initialIndex = Math.floor(Math.random() * videos.length);
  const [swiper, setSwiper] = useState(null)

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
        <h2 className={styles.sectionTitle}>AI football commentator</h2>

        {/* ——— Большой плеер ——— */}
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

        {/* ——— Ряд миниатюр ——— */}
        <Swiper
          modules={[Navigation]}
         
          allowTouchMove={true}              
          onSwiper={setSwiper}
          initialSlide={initialIndex}
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={({ activeIndex }) => {
            setCurrentIndex(activeIndex)      /* теперь стрелки меняют индекс */
          }}
          className={styles.videoSwiper}
        >
          {videos.map((video, idx) => (
            <SwiperSlide key={video.id}>
              <div
                className={`${styles.thumbBox} ${
                  idx === currentIndex ? styles.activeThumb : ''
                }`}
                onClick={() => {
                  setCurrentIndex(idx)           /* клик меняет индекс */
                  swiper.slideTo(idx)            /* и прокручивает слайдер */
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

        {/* ——— Свои стрелки и точки под слайдером ——— */}
        <div className={styles.videoControls}>
          <button
            className={styles.arrowBtn}
            onClick={() => swiper.slidePrev()}
            disabled={currentIndex === 0}
          >
            ‹
          </button>

          <div className={styles.bullets}>
            {videos.map((_, idx) => (
              <span
                key={idx}
                className={
                  idx === currentIndex
                    ? styles.bulletActive
                    : styles.bullet
                }
                onClick={() => {
                  setCurrentIndex(idx)
                  swiper.slideTo(idx)
                }}
              />
            ))}
          </div>

          <button
            className={styles.arrowBtn}
            onClick={() => swiper.slideNext()}
            disabled={currentIndex === videos.length - 1}
          >
            ›
          </button>
        </div>
      </div>
    </section>
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Текстовая часть */}
          <div className={styles.aboutText}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.paragraph}>
              Step into the world of Frank, where creativity knows no bounds. As the mastermind behind every stroke of design, I blend artistry with strategy to create immersive digital experiences that resonate with audiences.
            </p>
            <p className={styles.paragraph}>
              My journey in design is one of continuous exploration and growth, where each project serves as a canvas for pushing boundaries and exceeding expectations.
            </p>
            <p className={styles.paragraph}>
              Beyond technical proficiency, my approach is defined by empathy and collaboration. By deeply understanding the needs and aspirations of clients, I forge partnerships that transcend mere transactions, fostering an environment where creativity flourishes and visions become reality.
            </p>
            <p className={styles.paragraph}>
              Join me on this transformative journey, where every pixel tells a story and every project is an opportunity to inspire. Together, let's embark on a quest to redefine possibility and shape the future of design.
            </p>
          </div>

          {/* Блочный контейнер с изображением */}
          <div className={styles.aboutImageContainer}>
            <img
              src={portrait}
              alt="Portrait"
              className={styles.portrait}
            />
          </div>
        </div>
      </div>
    </section>
      {/* ——— Cards Section ——— */}
      <section id="services" className={styles.cardsSection}>
      <h2 className={styles.cardTitle}>"How does this work?"</h2>

     <div className="container">
     <div className={styles.cardbox}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.cardItem}>
            {/* В зависимости от индекса меняем порядок */}
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
     <section id="contact" className={styles.contactSection}>
      <div className="container">
        <h2 className={styles.title}>Get in Touch</h2>
        <div className={styles.inner}>
          {/* Левый блок с контактами */}
          <div className={styles.info}>
            <div className={styles.card}>
              <h3>Our Office</h3>
              <p>1234 Elm Street<br/>Springfield, USA</p>
            </div>
            <div className={styles.card}>
              <h3>Email Us</h3>
              <p><a href="mailto:info@company.com">info@company.com</a></p>
            </div>
            <div className={styles.card}>
              <h3>Call Us</h3>
              <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </div>
           
          </div>

          {/* Правый блок с формой */}
          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="you@example.com" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can we help?" required/>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
     <Footer />
    </>
  );
}
