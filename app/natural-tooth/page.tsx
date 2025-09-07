import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

// Import images from apicectomy page
import gumStage1 from "@/public/images/natural-tooth/gum-stage-1.webp";
import gumStage2 from "@/public/images/natural-tooth/gum-stage-2.webp";
import gumStage3 from "@/public/images/natural-tooth/gum-stage-3.webp";
import gumStage4 from "@/public/images/natural-tooth/gum-stage-4.webp";
import mtaBg from "@/public/images/natural-tooth/mta-treatment-bg.webp";
import toothBanner from "@/public/images/natural-tooth/tooth-banner.webp";

export const metadata: Metadata = {
  title: "자연치아 살리기 | 조은이플란트치과",
  description:
    "MTA 신경치료, 잇몸치료 등 자연치아를 최대한 보존하는 치료. 치아를 살리는 마지막 선택지로 전문적인 보존 치료를 제공합니다.",
  keywords:
    "자연치아 살리기, MTA 신경치료, 잇몸치료, 치아보존, 보존치료, 조은이플란트치과",
  openGraph: {
    title: "자연치아 살리기 | 조은이플란트치과",
    description: "자연치아를 최대한 보존하는 전문적인 치료",
    type: "website",
  },
};

export default function NaturalToothPage() {
  return (
    <main className="**:break-keep">
      {/* MTA 신경치료 Section - EXACT COPY FROM mta/page.tsx */}
      <section
        id="mta"
        className="min-h-screen bg-white **:break-keep scroll-mt-[5.75rem] lg:scroll-mt-[6.25rem] mt-16 md:mt-0"
      >
        {/* Hero Section */}
        <section className="pt-8 pb-4 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-[69.375rem] px-4">
            <div className="flex flex-col gap-4 md:gap-12">
              {/* Title and Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2 md:space-y-4 text-center md:text-left"
              >
                <div className="space-y-2">
                  <p className="text-14 md:text-lg text-dark-primary/50">
                    CHOONEEPLANT DENTAL CLINIC
                  </p>
                  <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-dark-primary">
                    MTA 신경치료란?
                  </h1>
                </div>
                <p className="text-14 md:text-xl lg:text-2xl text-dark-primary">
                  신경을 제거하고 생체 친화적 재료인 MTA로 채워넣는 술식을 MTA
                  신경치료라고 합니다.
                </p>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full h-[25rem] md:h-[30rem] lg:h-[39.4375rem] rounded-lg overflow-hidden"
              >
                <Image
                  src={mtaBg}
                  alt="MTA 신경치료"
                  fill
                  quality={100}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* MTA Information Section */}
        <section className="py-4 md:py-12 bg-[#97B6BB]">
          <div className="mx-auto max-w-[90rem] px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-2"
            >
              <p className="text-base md:text-3xl lg:text-[2.074rem] font-bold text-white">
                조은이플란트치과는 신경치료 및 치근단 수술 시
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="inline-block bg-white text-[#97B6BB] font-bold text-base md:text-3xl lg:text-[2.074rem] px-4 py-1 rounded">
                  MTA(Mineral Trioxide Aggregate)
                </span>
                <span className="text-base md:text-3xl lg:text-[2.074rem] font-bold text-white">
                  를 적용합니다.
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-6 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-14 md:text-xl lg:text-2xl font-bold text-dark-primary text-center px-4 md:px-12"
            >
              <span className="text-teal-secondary font-bold">
                우수한 밀폐력과 조직 재생 능력
              </span>{" "}
              을 갖춘 MTA는 치아 보존률을 높이고 예후를 개선하는{" "}
              <span className="text-teal-secondary font-bold">
                최신 치료 방식
              </span>
              입니다.
            </motion.p>
          </div>
        </section>
      </section>

      {/* 잇몸치료 Section - EXACT COPY FROM gum-treatment/page.tsx */}
      <section id="gum-treatment" className="scroll-mt-[6rem]">
        <div className="flex flex-col items-center py-4 md:py-12 lg:py-16 mt-8 md:mt-0">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4 md:gap-12 px-4 md:px-8 max-w-[70.375rem] mx-auto w-full"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-14 md:text-lg lg:text-[1.2rem] text-dark-primary uppercase leading-[1.6]"
              >
                CHOONEEPLANT DENTAL CLINIC
              </motion.p>

              <div className="flex flex-col items-center gap-2">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-xl md:text-4xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6]"
                >
                  잇몸치료의 중요성과 진행 방법
                </motion.h1>
              </div>
            </div>
          </motion.section>

          {/* Periodontal Treatment Banner Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full mt-8 md:mt-12 lg:mt-16 overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={toothBanner}
              alt="치아 배너 이미지"
              quality={100}
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-30 lg:hidden" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col gap-2 py-6 md:py-12 justify-center items-start max-w-6xl mx-auto w-full px-4 md:text-left"
            >
              <p className="text-14 md:text-lg lg:text-[1.2rem] text-white leading-[1.6]">
                Periodontal Treatment
              </p>
              <h2 className="text-lg md:text-3xl lg:text-[2.489rem] font-bold text-white leading-[1.6]">
                잇몸치료란?
              </h2>
              <p className="text-14 md:text-xl text-white leading-[1.6] max-w-2xl break-keep">
                치주질환은 성인에서 매우 흔한 구강 질환입니다.{" "}
                <br className="" /> 초기에는 통증이 거의 없어 방치되기 쉬우며,
                만성적으로 진행되면 치아를 지탱하는 조직이 파괴되어 치아 상실로
                이어질 수 있습니다. 그렇지만 가벼운 잇몸질환은 잇몸 치료만으로도
                충분히 관리와 개선이 가능합니다.
              </p>
            </motion.div>
          </motion.section>

          {/* Periodontal Disease Stages Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4 md:gap-12 lg:gap-16 mt-16 px-4 max-w-6xl mx-auto w-full"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-dark-primary pb-1 mb-2 md:mb-10 w-full"
            >
              <h2 className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold text-dark-primary text-center md:text-left">
                잇몸질환 진행단계 및 치료방법
              </h2>
            </motion.div>

            {/* Stages Grid */}
            <div className="flex flex-wrap justify-center md:gap-6 lg:gap-8">
              {/* Stage 1 - 치은염 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full max-w-[20rem] sm:w-[16rem] min-h-[15rem] md:h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[10rem] md:h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={gumStage1}
                      alt="치은염"
                      fill
                      quality={100}
                      className="object-contain object-bottom sm:object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-14 md:text-base">
                    치은염
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-2 py-2 md:py-3 px-2 flex-1">
                  <p className="text-14 md:text-base text-dark-primary text-center">
                    치주낭 길이 3mm 이하
                  </p>
                  <p className="text-base md:text-xl font-bold text-teal-secondary text-center">
                    스케일링 치료
                  </p>
                </div>
              </motion.div>

              {/* Stage 2 - 초기 치주염 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full max-w-[20rem] sm:w-[16rem] min-h-[15rem] md:h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[10rem] md:h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={gumStage2}
                      alt="초기 치주염"
                      fill
                      quality={100}
                      className="object-contain object-bottom sm:object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-14 md:text-base">
                    초기 치주염
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-2 py-2 md:py-3 px-2 flex-1">
                  <p className="text-14 md:text-base text-dark-primary text-center">
                    치주낭 길이 3~5mm 이하
                  </p>
                  <p className="text-base md:text-xl font-bold text-teal-secondary text-center">
                    치근활택술 치료
                  </p>
                </div>
              </motion.div>

              {/* Stage 3 - 중기 치주염 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full max-w-[20rem] sm:w-[16rem] min-h-[15rem] md:h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[10rem] md:h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={gumStage3}
                      alt="중기 치주염"
                      fill
                      quality={100}
                      className="object-contain object-bottom sm:object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-14 md:text-base">
                    중기 치주염
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-2 py-2 md:py-3 px-2 flex-1">
                  <p className="text-14 md:text-base text-dark-primary text-center">
                    치주낭 길이 5~7mm 이하
                  </p>
                  <p className="text-base md:text-xl font-bold text-teal-secondary text-center">
                    치주소파술 치료
                  </p>
                </div>
              </motion.div>

              {/* Stage 4 - 말기 치주염 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full max-w-[20rem] sm:w-[16rem] min-h-[15rem] md:h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[10rem] md:h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={gumStage4}
                      alt="말기 치주염"
                      fill
                      quality={100}
                      className="object-contain object-bottom sm:object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-14 md:text-base">
                    말기 치주염
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-2 py-2 md:py-3 px-2 flex-1">
                  <p className="text-14 md:text-base text-dark-primary text-center">
                    치주낭 길이 7mm 이상
                  </p>
                  <p className="text-base md:text-xl font-bold text-teal-secondary text-center">
                    치주수술
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
