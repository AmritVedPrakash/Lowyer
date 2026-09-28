import React from "react";

import whatsappIcon from "../assets/whatsapp.png";
import callIcon from "../assets/call.png";

const phoneNumber = "+919999999999";

function FloatingContactButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber.slice(1)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="WhatsApp"
        className="fixed bottom-6 left-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] p-2.5 shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] animate-[floating_3s_ease-in-out_infinite]"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="h-full w-full object-contain"
        />
      </a>

      {/* Call Button */}
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call us"
        title="Call us"
        className="fixed bottom-24 left-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#a67c45] p-2.5 shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a67c45] animate-[floating_3s_ease-in-out_infinite]"
      >
        <img
          src={callIcon}
          alt="Call us"
          className="h-full w-full object-contain"
        />
      </a>

      {/* Floating Animation */}
      <style>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </>
  );
}

export default FloatingContactButtons;
