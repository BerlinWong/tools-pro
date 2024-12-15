"use client";
// import ImageCanvas from "@/app/components/ImageCanvas/ImageCanvas";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import ImageCanvas from "@/app/components/ImageCanvas/ImageCanvas";
import Image from "next/image";
import { gsap } from "gsap"; // 导入GSAP

const XiaoHongShuPage = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [articleTitle, setArticleTitle] = useState("");
  const [articleDesc, setArticleDesc] = useState("");
  const [toastVisible, setToastVisible] = useState(false); // 添加状态管理 Toast 可见性

  const router = useRouter();

  const handleParse = () => {
    let xhsUrl = "";
    if (inputUrl.startsWith("https://www.xiaohongshu.com/explore/")) {
      console.log("1");
      xhsUrl = encodeURIComponent(inputUrl);
    } else if (inputUrl.includes("http://xhslink.com")) {
      console.log("2");
      const regex = /http:\/\/xhslink\.com\/a\/(\w+)/;
      const match = inputUrl.match(regex);
      console.log(match);
      if (match) {
        xhsUrl = encodeURIComponent(`${match[0]}`);
      }
    } else {
      if (!toastVisible) {
        setToastVisible(true);
        gsap.fromTo(
          ".toast",
          { opacity: 0, x: -200 },
          { opacity: 1, x: 0, duration: 1.5 }
        ); // 添加GSAP动画
        setTimeout(() => {
          gsap.to(".toast", {
            opacity: 0,
            x: 200,
            duration: 0.5,
            onComplete: () => setToastVisible(false),
          }); // 动画结束后隐藏Toast
        }, 3000);
      }
    }
    console.log(xhsUrl);
    if (xhsUrl) {
      fetch(`/api/XiaoHongShuPage?xhs_url=${xhsUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const json_data = data.data;
          const noteDetailMap = json_data.note.noteDetailMap;

          const noteKey = Object.keys(noteDetailMap)[0];
          const note = noteDetailMap[noteKey];
          const articleTitle = note.note.title;
          const articleDesc = note.note.desc;
          setArticleTitle(articleTitle);
          setArticleDesc(articleDesc);
          console.log(articleTitle);
          console.log(articleDesc);

          const imageUrls = note.note.imageList.map(
            (image: { urlDefault: string }) => image.urlDefault
          );
          setImageUrls(imageUrls);
          localStorage.setItem("imageUrls", JSON.stringify(imageUrls));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const handleClear = () => {
    setInputUrl("");
    setImageUrls([]);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="h-1/2 min-h-96 w-full max-w-2xl flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          小红书解析
        </h1>
        <label
          htmlFor="url"
          className="relative block overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 my-4"
        >
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="输入小红书URL"
            id="url"
            className="peer h-8 w-full sm:w-96 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700 dark:text-white"
          />
          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            输入小红书URL
          </span>
        </label>
        <div className="flex space-x-4">
          <a
            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            onClick={handleParse}
          >
            <span className="absolute inset-0 border border-emerald-600 group-active:border-emerald-500"></span>
            <span className="block border border-emerald-600 bg-emerald-600 px-12 py-3 transition-transform active:border-emerald-500 active:bg-emerald-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              解析
            </span>
          </a>
          <a
            className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
            href="#"
            onClick={handleClear}
          >
            <span className="absolute inset-0 border border-current"></span>
            <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              清除
            </span>
          </a>
        </div>
      </div>
      {toastVisible && (
        <div className="toast fixed top-[100px] right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-red-600 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <p className="text-gray-700 dark:text-gray-300">
            请输入有效的小红书 URL
          </p>
        </div>
      )}

      <div className="w-full max-w-2xl mt-4 p-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {articleTitle}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {articleDesc.split("\n").map((line, index) => (
            <span
              key={index}
              className={line.match(/#.*?\[.*?\]#/) ? "text-blue-500" : ""}
            >
              {line.replace(/#(.*?)\[.*?\]#/g, "#$1")}
              <br />
            </span>
          ))}
        </p>
      </div>
      {/* 渲染 Canvas */}
      {imageUrls.length > 0 && (
        <div className="mb-12">
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
              router.push(`/pages/LongImagePage`);
            }}
          >
            查看长图
          </button>

          {/* <ImageCanvas imageUrls={imageUrls} /> */}
        </div>
      )}
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-4">
        {imageUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
            width={500}
            height={300}
            onClick={() => {
              const modal = document.createElement("div");
              modal.style.position = "fixed";
              modal.style.top = "0";
              modal.style.left = "0";
              modal.style.width = "100%";
              modal.style.height = "100%";
              modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
              modal.style.display = "flex";
              modal.style.alignItems = "center";
              modal.style.justifyContent = "center";
              modal.style.zIndex = "1000";

              const imgContainer = document.createElement("div");
              imgContainer.style.maxWidth = "80%";
              imgContainer.style.maxHeight = "80%";
              imgContainer.style.objectFit = "contain";

              const imgElement = document.createElement("img");
              imgElement.src = url;
              imgElement.alt = `Image ${index + 1}`;
              imgElement.style.maxWidth = "100%";
              imgElement.style.maxHeight = "100%";
              imgElement.style.objectFit = "contain";

              imgContainer.appendChild(imgElement);
              modal.appendChild(imgContainer);
              modal.onclick = () => {
                document.body.removeChild(modal);
              };

              document.body.appendChild(modal);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default XiaoHongShuPage;
