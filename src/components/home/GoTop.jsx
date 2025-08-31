import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const GoToTopButton = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonStyle = {
    position: "fixed",
    bottom: "32px",
    right: "32px",
    backgroundColor: "#ff9800",
    color: "#fff",
    padding: "16px",
    borderRadius: "50%",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    zIndex: 9999,
    animation: "bounce 1.5s infinite",
  };

  return (
    <>
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff9800")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff9800")}
          title="Go to Top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Bounce animation via inline <style> */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </>
  );
};

export default GoToTopButton;
