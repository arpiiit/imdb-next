"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted]=useState(false)
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(()=>setMounted(true),[]);
  return (
    <div>
      <div>
        {mounted && (currentTheme === "dark" ? (
          <MdLightMode onClick={()=>setTheme('light')} className="text-xl cursor-pointer hover:text-gray-400"/>
        ) : (
          <MdDarkMode onClick={()=>setTheme('dark')} className="text-xl cursor-pointer hover:text-gray-400" />
        ))}
      </div>
    </div>
  );
}