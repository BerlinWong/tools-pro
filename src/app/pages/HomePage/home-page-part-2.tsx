import React from "react";
export const HomePageSecondPart = () => {
  return (
    <section className="overflow-hidden bg-gray-50 dark:bg-gray-900 dark:text-white sm:grid sm:grid-cols-2 sm:items-center h-screen">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Prompt Manager Pro
          </h2>

          <p className="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
            一款强大的Prompt管理工具，帮助你快速管理你的Prompt，并生成高质量的Prompt。
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

      <img
        alt="描述图片"
        src="https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-full w-full object-cover sm:h-[calc(100%_-_4rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_8rem)] md:rounded-tl-[60px]"
      />
    </section>
  );
};

export default HomePageSecondPart;
