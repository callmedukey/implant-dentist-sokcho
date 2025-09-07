import * as motion from "motion/react-client";
import Image from "next/image";

import { TextGenerateEffect } from "@/app/components/text-generate-effect";
import { cn } from "@/lib/utils";
import heroImage from "@/public/hero-image.png";
import titleLogo from "@/public/images/title-logo.svg";

const AccentBanner = async () => {
  return (
    <section
      className={cn(
        "flex justify-center items-center bg-white h-[calc(100vh-4rem-4rem)] sm:h-[calc(100vh-6.25rem-4rem)] md:h-[calc(100vh-6.25rem-3.75rem)] lg:h-[calc(100vh-6.25rem-3.75rem)] px-4 md:px-6 lg:px-8 **:break-keep relative"
      )}
    >
      <Image
        src={heroImage}
        alt="조은이플란트치과 전문의"
        fill
        priority
        className="object-cover object-top grayscale lg:object-top"
        quality={100}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gray-900/50 z-10" />
      <div className="flex flex-col items-center gap-4 sm:gap-8 w-full z-20">
        <motion.div
          className="max-w-[15rem] md:max-w-[18rem] lg:max-w-[30rem] h-[9rem] md:h-[11rem] lg:h-[15.576rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* <Image
            src={whiteLogoImage}
            alt="조은이플란트치과 로고"
            unoptimized
            className="w-full h-full z-10 hidden md:block"
          /> */}
        </motion.div>
        <div
          className={cn(
            "flex flex-col gap-4 absolute bottom-28 lg:bottom-4 right-2 lg:right-4"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={titleLogo}
              alt="조은이플란트치과 로고"
              unoptimized
              className="w-full h-full z-10 ml-auto mr-0"
            />
          </motion.div>
          <motion.h1
            className="flex items-center justify-center gap-0 md:gap-4 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <TextGenerateEffect
              words={`언제 어디서나, 같은 마음으로 진료합니다`}
              className="text-white font-pretendard font-bold text-base md:text-xl lg:text-3xl leading-[160%] text-right mr-2 ml-auto md:mx-0"
              filter={true}
              duration={0.8}
              delay={0.4}
            />
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default AccentBanner;
