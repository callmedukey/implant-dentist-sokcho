import * as motion from "motion/react-client";
import Image from "next/image";

import dataSectionBg from "@/public/images/digital/data-section-bg.png";
import scannerIcon from "@/public/images/digital/scanner-icon.webp";

export default function RealDataSection() {
  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12 lg:py-16 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col lg:grid grid-cols-5 items-center gap-6 md:gap-8 lg:gap-0 mx-auto max-w-7xl"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center gap-4 md:gap-5 lg:gap-6 px-4 lg:pl-[calc((100vw-69.375rem)/8)] lg:pr-10 flex-1 w-full col-span-2"
        >
          <Image
            src={scannerIcon}
            alt="스캐너 아이콘"
            quality={100}
            className="size-18 mx-auto lg:mx-0"
          />

          <h2 className="text-xl md:text-2xl lg:text-[2.0738rem] font-bold text-dark-primary leading-[1.6] text-center lg:text-left">
            조은이플란트치과는
            <br />
            <span className="text-teal-secondary">정확한 데이터</span>
            를 기반으로
            <br />
            <span className="text-teal-secondary">정밀하게 진단</span>합니다.
          </h2>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col w-full col-span-3"
        >
          <p className="text-14 md:text-lg lg:text-[1.7281rem] font-bold text-teal-secondary opacity-35 text-center lg:text-right mb-0 px-4 lg:px-0">
            CHOONEEPLANT DENTAL CLINIC
          </p>

          <div className="relative w-full h-[15rem] md:h-[18rem] lg:h-[24rem] rounded-lg overflow-hidden">
            <Image
              src={dataSectionBg}
              alt="디지털 시스템 배경"
              fill
              className="object-cover object-right"
              quality={100}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
