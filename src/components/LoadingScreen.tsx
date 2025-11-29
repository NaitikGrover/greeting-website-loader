import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const greetings = [
  { text: "Hello", duration: 1000 },
  { text: "Hallo", duration: 600 },
  { text: "Bonjour", duration: 600 },
  { text: "Hola", duration: 600 },
  { text: "こんにちは", duration: 600 },
  { text: "안녕하세요", duration: 600 },
  { text: "Ciao", duration: 600 },
  { text: "Olá", duration: 600 },
  { text: "Привет", duration: 600 },
  { text: "你好", duration: 600 },
  { text: "नमस्ते", duration: 800 },
];

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        if (currentIndex === greetings.length - 1) {
          // Last greeting - wait for duration then complete
          setTimeout(() => {
            setIsComplete(true);
            onComplete?.();
          }, greetings[currentIndex].duration);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }, greetings[currentIndex].duration);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            {greetings[currentIndex].text}
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
