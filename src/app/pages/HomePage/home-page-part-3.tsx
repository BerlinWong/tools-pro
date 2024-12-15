import React from "react";

export const HomePageThirdPart = () => {
  return (
    <section className="overflow-hidden bg-gray-200 dark:bg-gray-800 dark:text-white sm:grid sm:grid-cols-2 sm:items-center h-screen">
      <img
        alt="描述图片"
        src="https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-full w-full object-cover sm:h-[calc(100%_-_4rem)] sm:self-end sm:rounded-tr-[30px] md:h-[calc(100%_-_8rem)] md:rounded-tr-[60px]"
      />
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            小红书解析助手
          </h2>

          <p className="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
            帮助你快速解析小红书中的图片，去除水印的同时，可以选择性的将多图拼接为长图，方便你进行分享与存储。
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-emerald-600 dark:bg-emerald-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 dark:hover:bg-emerald-800"
            >
              试试看
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageThirdPart;
