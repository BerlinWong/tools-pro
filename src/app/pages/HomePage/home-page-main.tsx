"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomePageSecondPart from "./home-page-part-2";
import HomePageThirdPart from "./home-page-part-3";
import HomePageFourthPart from "./home-page-part-4";
import HomePageFooter from "./home-page-footer";

gsap.registerPlugin(ScrollTrigger);

const HomePageMain = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const secondPartRef = useRef(null);
  const thirdPartRef = useRef(null);
  const fourthPartRef = useRef(null);
  const footerPartRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
      }
    );

    gsap.fromTo(
      secondPartRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: secondPartRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      thirdPartRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: thirdPartRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      fourthPartRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: fourthPartRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      footerPartRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerPartRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="h-full w-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 overflow-x-hidden">
      <div className="w-full flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black relative">
        <img
          src="https://images.unsplash.com/photo-1460407903781-7bb9b9cd2fb5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="背景图片"
          className="absolute inset-0 w-full h-full object-cover opacity-10 -z-3"
        />
        <h1 ref={titleRef} className="text-5xl font-bold text-white mb-4">
          欢迎来到 Tools Pro
        </h1>
        <p ref={subtitleRef} className="text-2xl text-white mb-8">
          这里有很多有趣的内容等着你探索
        </p>
        <button
          ref={buttonRef}
          className="px-6 py-3 bg-white text-purple-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition duration-300"
        >
          开始探索
        </button>
      </div>
      <div ref={secondPartRef}>
        <HomePageSecondPart />
      </div>
      <div ref={thirdPartRef}>
        <HomePageThirdPart />
      </div>
      <div ref={fourthPartRef}>
        <HomePageFourthPart />
      </div>
      <div className="w-full" ref={footerPartRef}>
        <HomePageFooter />
      </div>
    </div>
  );
};

export default HomePageMain;
