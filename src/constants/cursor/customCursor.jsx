import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const customCursor = () => {
  useGSAP(() => {
    window.addEventListener("mousemove", (e) => {
      gsap.to("#cursor", {
        x: e.x,
        y: e.y,
        duration: 0.5,
      });
    });
  });

  return (
    <div>
      <div
        id="cursor"
        style={{
          position: "fixed",
          top:"0",
          left:"0",
          height: "60px",
          width: "60px",
          zIndex: "9",
          borderRadius: "50%",
          background: "linear-gradient(to right, #ec4899, #3b82f6)", 
          filter: "blur(1.2rem)",
          opacity: 0.9
        }}
      ></div>
    </div>
  );
};

export default customCursor;
