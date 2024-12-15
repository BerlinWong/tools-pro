"use client"
import React, { useEffect, useRef } from "react";

interface ImageCanvasProps {
  imageUrls: string[];
}

const ImageCanvas: React.FC<ImageCanvasProps> = ({ imageUrls }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          // 清空画布
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const loadImages = async () => {
            const images = await Promise.all(
              imageUrls.map(
                (url) =>
                  new Promise<HTMLImageElement>((resolve) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = () => resolve(img);
                  })
              )
            );

            // 计算总高度和最大宽度
            const totalHeight = images.reduce((acc, img) => acc + img.height, 0);
            const maxWidth = Math.max(...images.map((img) => img.width));

            // 设置画布大小
            canvas.width = maxWidth;
            canvas.height = totalHeight;

            // 绘制图片，保持宽高比
            let currentHeight = 0;
            images.forEach((img) => {
              const aspectRatio = img.width / img.height;
              const drawWidth = maxWidth;
              const drawHeight = drawWidth / aspectRatio;
              ctx.drawImage(img, 0, currentHeight, drawWidth, drawHeight);
              currentHeight += drawHeight;
            });
          };

          loadImages();
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageUrls]);

  return (
    <div className="h-screen overflow-scroll">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ImageCanvas;
