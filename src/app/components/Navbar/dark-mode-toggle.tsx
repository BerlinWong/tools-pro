"use client";

import React from "react";
import { useTheme } from "@/app/context/theme-context";
export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <label
      htmlFor="darkModeToggle"
      className="relative inline-block h-6 w-10 cursor-pointer rounded-full bg-gray-300 bg-opacity-70 backdrop-blur-md transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-700"
    >
      <input
        type="checkbox"
        id="darkModeToggle"
        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />

      <span
        className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-4 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-4 peer-checked:text-green-600"
      >
        <svg
          data-unchecked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="size-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2" />
          <path d="M12 21v2" />
          <path d="M4.22 4.22l1.42 1.42" />
          <path d="M18.36 18.36l1.42 1.42" />
          <path d="M1 12h2" />
          <path d="M21 12h2" />
          <path d="M4.22 19.78l1.42-1.42" />
          <path d="M18.36 5.64l1.42-1.42" />
        </svg>

        <svg
          data-checked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="hidden size-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.9 4.9 1.4 1.4" />
          <path d="m17.7 17.7 1.4 1.4" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.3 17.7-1.4 1.4" />
          <path d="m19.1 4.9-1.4 1.4" />
        </svg>
      </span>
    </label>
  );
};

export default DarkModeToggle;
