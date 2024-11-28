import React from "react";
import { ConfigProvider } from 'antd';
import { createRoot } from "react-dom/client";
import './styles/font.css';
import './styles/button.css';
import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{ 
        token: {
          fontFamily: "CustomFontName, sans-serif",
        }
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
