import { useState } from "react";
import Envelope from "../Component/Contact/Envelope";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSpace, setShowSpace] = useState(false);

  const handleSetOpen = (value) => {
    if (value) {
      setIsOpen(true);
      setShowSpace(true);
    } else {
      setIsOpen(false);

      setTimeout(() => {
        setShowSpace(false);
      }, 400);
    }
  };

  return (
    <div
      className={`transition-all duration-500 ${
        showSpace
          ? "pb-[60vh] sm:pb-[45vh] md:pb-[30vh] lg:pb-[20vh]"
          : "pb-0"
      }`}
    >
      <Envelope isOpen={isOpen} setIsOpen={handleSetOpen} />
    </div>
  );
}