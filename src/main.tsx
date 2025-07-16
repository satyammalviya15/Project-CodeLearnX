// src/main.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // no need for .js if using ts/tsx
import './index.css';    // Tailwind styles and global CSS

// Apply dark theme if needed BEFORE React renders
if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("light");
} else {
  document.documentElement.classList.remove("dark");
}

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
