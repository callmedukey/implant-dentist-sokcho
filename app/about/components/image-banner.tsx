import * as motion from "motion/react-client";
import Image from "next/image";

import bannerImage from "@/public/images/about/about-banner.png";

const ImageBanner = () => {
  return (
    <motion.div
      className="relative w-full h-[10rem] sm:h-[12rem] md:h-[16rem] lg:h-[21.25rem] overflow-hidden my-8 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-black/25 z-10 rounded-md overflow-hidden" />
      <Image
        src={bannerImage}
        alt="조은이플란트치과 병원 내부"
        fill
        quality={100}
        className="object-cover object-center rounded-md"
        priority
      />
    </motion.div>
  );
};

export default ImageBanner;
