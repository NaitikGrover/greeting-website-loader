import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { motion } from "framer-motion";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen items-center justify-center bg-black"
      >
        <div className="text-center px-6">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-white">
            Welcome
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Experience greetings from around the world
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
