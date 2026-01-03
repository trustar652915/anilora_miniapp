import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <iframe
      src="https://bra.in/9pWxwY"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
      allow="fullscreen"
    />
  );
}

