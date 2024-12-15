"use client";

import React, { useEffect, useState } from "react";
import ImageCanvas from "@/app/components/ImageCanvas/ImageCanvas";

const LongImagePage = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedImageUrls = localStorage.getItem("imageUrls");
      if (storedImageUrls) {
        setImageUrls(JSON.parse(storedImageUrls));
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        长图查看
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        在这里查看所有的长图。长按图片可以下载到您的设备。
      </p>
      <div className="">
        <ImageCanvas imageUrls={imageUrls} />
      </div>
    </div>
  );
};

export default LongImagePage;
