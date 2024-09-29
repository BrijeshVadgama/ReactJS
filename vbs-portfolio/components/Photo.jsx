"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full justify-center">
      <motion.div>
        <Image
          src="/assets/my-pic1.png"
          alt="Description of the image"
          width={400}
          height={400}
          className="rounded-full bg-white"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
