import * as motion from "motion/react-client";
import Image from "next/image";

import digitalScannerBg from "@/public/images/digital/digital-scanner-bg.png";

export default function DigitalScanner() {
  return (
    <section className="relative w-full my-8 md:my-12 lg:my-24">
      <div className="mx-auto max-w-[69.375rem]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[2.6875rem]"
        >
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 md:gap-8 lg:gap-12 w-full px-4 md:px-0"
          >
            <h2 className="text-xl md:text-2xl lg:text-[2.0738rem] font-bold text-dark-primary text-center">
              디지털 구강스캐너
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-14 md:text-base lg:text-xl text-dark-primary text-center px-4 leading-[1.6]"
          >
            치아의 상태를 정확하게 파악하기 위해 3D 디지털 구강스캐너를{" "}
            <br className="md:hidden" /> 사용하여
            <br className="hidden md:block" />
            <span className="text-teal-secondary">정밀하게 스캔</span>
            하고{" "}
            <span className="text-teal-secondary">
              디지털 치아 제작 시스템과 연동
            </span>
            하여 <br className="md:hidden" /> 더욱더
            <span className="text-teal-secondary"> 편안하고 정확한 치료</span>를
            받을 수 있습니다.
          </motion.p>

          {/* Scanner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[57.6875rem] h-[15rem] md:h-[20rem] lg:h-[37.1875rem] rounded-lg overflow-hidden mx-4 md:mx-0"
          >
            <Image
              src={digitalScannerBg}
              alt="디지털 구강스캐너"
              fill
              className="object-contain"
              quality={100}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
