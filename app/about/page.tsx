import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Import images
import { ClinicCarousel } from "@/app/clinic-tour/components/clinic-carousel";
import DoctorsHeadingSection from "@/app/components/doctors-heading-section";
import DoctorsIntroSection from "@/app/components/doctors-intro-section";
import locationDetailMap from "@/public/images/location/location-detail-map.png";
import locationParking from "@/public/images/location/location-parking.jpeg";
import kakaoChatImage from "@/public/images/reservation/kakao-chat.webp";
import naverBookingImage from "@/public/images/reservation/naver-booking.webp";
import phoneIcon from "@/public/images/reservation/phone-icon.svg";
import staffBgImage from "@/public/images/staff/staff-bg.webp";

// Import components from about page
import AboutFinalSection from "./components/about-final-section";
import AccentSection from "./components/accent-section";
import BasicInfoSection from "./components/basic-info-section";
import ImageBanner from "./components/image-banner";
import ImageWithOverlayTextSection from "./components/image-with-overlay-text-section";
import KakaoMap from "./components/kakao-map";

// Import components from doctors page

// Import clinic carousel component

export const metadata: Metadata = {
  title: "병원소개 | 조은이플란트치과",
  description:
    "20년 전통의 조은이플란트치과 소개, 의료진 정보, 진료시간 및 오시는 길 안내",
  keywords:
    "조은이플란트치과, 속초치과, 치과소개, 의료진소개, 진료시간, 오시는길",
  openGraph: {
    title: "병원소개 | 조은이플란트치과",
    description:
      "20년 전통의 조은이플란트치과 소개, 의료진 정보, 진료시간 및 오시는 길 안내",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* 병원소개 Section */}
      <section id="about" className="scroll-mt-[4.5rem] lg:scroll-mt-[8.25rem]">
        <AccentSection />
        <ImageWithOverlayTextSection />
        <BasicInfoSection />
        <ImageBanner />
        <AboutFinalSection />
      </section>

      {/* 주치의 소개 Section */}
      <section
        id="doctors"
        className="scroll-mt-[5rem] lg:scroll-mt-[6.25rem] mt-8"
      >
        <DoctorsHeadingSection />
        <DoctorsIntroSection />
      </section>

      {/* 의료진 소개 Section - From staff/page.tsx */}
      <motion.section
        id="staff"
        className="scroll-mt-[4.25rem] lg:scroll-mt-[4.8rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center py-12 md:py-20 lg:py-24 **:break-keep">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[69.375rem] px-4">
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-14 md:text-base lg:text-lg text-dark-primary text-center uppercase"
            >
              CHOONEEPLANT DENTAL CLINIC
            </motion.p>

            <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
              <motion.h1
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center leading-relaxed"
              >
                환자와 가장 가까이에서 만나는 사람,
                <br />
                바로 <span className="text-teal-secondary">치과위생사</span>
                입니다.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-14 md:text-lg lg:text-xl text-black text-center leading-relaxed"
              >
                속초 조은이플란트치과는{" "}
                <span className="text-teal-secondary font-bold">
                  전원 치과위생사 면허 소지자
                </span>
                로 구성된
                <br className="hidden md:block" />
                의료진이 정성과 책임으로 진료를 돕고 있습니다.
              </motion.p>
            </div>
          </div>

          {/* Staff Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileInView={{
              scale: [1, 1.02, 1],
              transition: { duration: 2, ease: "easeInOut" },
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-[69.375rem] h-[300px] md:h-[400px] lg:h-[42.75rem] rounded-lg overflow-hidden my-12 md:my-16 lg:my-20 shadow-2xl relative"
          >
            <Image
              src={staffBgImage}
              alt="조은이플란트치과 의료진"
              quality={100}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Promise Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-teal-secondary py-8 md:py-12 lg:py-16 px-4 md:px-8 relative overflow-hidden mt-8 md:mt-0"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            />
            <div className="max-w-[90rem] mx-auto flex flex-col items-center gap-2 relative z-10">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-14 md:text-xl lg:text-2xl font-bold text-white text-center"
              >
                조은이플란트치과는 수준 높은 진료 시스템을{" "}
                <br className="md:hidden" /> 제공해 드릴 것을 약속드립니다.
              </motion.p>

              <motion.div className="flex lg:flex-wrap justify-center items-center gap-2 whitespace-nowrap">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-14 md:text-xl lg:text-2xl font-bold text-white"
                >
                  한분, 한분을 위한
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    scale: { type: "spring", damping: 15, stiffness: 200 },
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-white text-teal-secondary px-3 py-1 rounded font-bold text-base md:text-xl lg:text-2xl cursor-default"
                >
                  꼼꼼하고 세심한 진료
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-base md:text-xl lg:text-2xl font-bold text-white"
                >
                  를 시행합니다.
                </motion.span>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </motion.section>

      {/* 치과 둘러보기 Section - From clinic-tour/page.tsx */}
      <motion.section
        id="clinic-tour"
        className="scroll-mt-[5rem] lg:scroll-mt-[8rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center pt-8 pb-12 md:pb-16 lg:pb-20 **:break-keep">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[69.375rem] px-4">
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-14 md:text-base lg:text-lg text-dark-primary text-center uppercase"
            >
              CHOONEEPLANT DENTAL CLINIC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center"
            >
              둘러보기
            </motion.h1>
          </div>

          {/* Carousel Section */}
          <ClinicCarousel />
        </div>
      </motion.section>

      {/* 진료 및 예약 안내 Section - From reservation/page.tsx */}
      <motion.section
        id="reservation"
        className="scroll-mt-[5rem] lg:scroll-mt-[8rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center pt-8 pb-12 md:pb-16 lg:pb-20 **:break-keep">
          <div className="w-full max-w-[69.375rem] px-4 flex flex-col gap-8 md:gap-12 lg:gap-16">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-2">
              <motion.p
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-14 md:text-base lg:text-lg text-dark-primary text-center uppercase"
              >
                CHOONEEPLANT DENTAL CLINIC
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center"
              >
                진료 및 예약안내
              </motion.h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-12 md:gap-16 lg:gap-[7.4375rem]">
              {/* Operating Hours Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col lg:flex-row gap-6 lg:gap-[1.8125rem] items-start lg:items-center"
              >
                <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-dark-primary w-full lg:w-[15.9375rem] flex-shrink-0 text-center md:text-left">
                  진료시간 안내
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 w-full">
                  {/* Tuesday/Wednesday/Friday */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-teal-bg rounded-lg flex flex-col justify-center items-center text-center p-3 md:p-6 lg:p-12 gap-1 md:gap-3 lg:gap-6 h-[5rem] md:h-[8rem] lg:h-[12.1875rem] hover:scale-102 transition-transform duration-200"
                  >
                    <p className="text-base md:text-lg lg:text-xl font-bold text-teal-secondary">
                      평일(화/수/금)
                    </p>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-dark-primary whitespace-nowrap">
                      AM 09:30 ~ PM 06:30
                    </p>
                  </motion.div>

                  {/* Monday/Thursday Night */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-teal-bg rounded-lg flex flex-col justify-center items-center text-center p-3 md:p-6 lg:p-12 gap-1 md:gap-3 lg:gap-6 h-[5rem] md:h-[8rem] lg:h-[12.1875rem] hover:scale-102 transition-transform duration-200"
                  >
                    <p className="text-base md:text-lg lg:text-xl font-bold text-teal-secondary">
                      야간(월/목) · 진료
                    </p>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-dark-primary whitespace-nowrap">
                      AM 09:30 ~ PM 08:00
                    </p>
                  </motion.div>

                  {/* Saturday */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-teal-bg rounded-lg flex flex-col justify-center items-center text-center p-3 md:p-6 lg:p-12 gap-1 md:gap-3 lg:gap-6 h-[5rem] md:h-[8rem] lg:h-[12.1875rem] hover:scale-102 transition-transform duration-200"
                  >
                    <p className="text-base md:text-lg lg:text-xl font-bold text-teal-secondary">
                      토요일
                    </p>
                    <div className="flex flex-col items-center gap-1 md:gap-2">
                      <p className="text-base md:text-lg lg:text-xl font-bold text-dark-primary whitespace-nowrap">
                        AM 09:30 ~ PM 02:00
                      </p>
                      <p className="text-14 md:text-sm text-dark-primary">
                        점심시간 없이 진료
                      </p>
                    </div>
                  </motion.div>

                  {/* Sunday & Holidays */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-teal-bg rounded-lg flex flex-col justify-center items-center text-center p-3 md:p-6 lg:p-12 gap-1 md:gap-3 lg:gap-6 h-[5rem] md:h-[8rem] lg:h-[12.1875rem] hover:scale-102 transition-transform duration-200"
                  >
                    <p className="text-base md:text-lg lg:text-xl font-bold text-teal-secondary">
                      일요일 · 공휴일
                    </p>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-dark-primary">
                      휴무
                    </p>
                  </motion.div>

                  {/* Lunch Break - Spans 2 columns */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-teal-secondary rounded-lg flex flex-col justify-center items-center text-center p-3 md:p-6 lg:p-12 gap-1 md:gap-3 lg:gap-6 h-[5rem] md:h-[8rem] lg:h-[12.1875rem] md:col-span-2 hover:scale-102 transition-transform duration-200"
                  >
                    <p className="text-base md:text-lg lg:text-xl font-bold text-white">
                      점심시간
                    </p>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-white whitespace-nowrap">
                      PM 01:00 ~ PM 02:00
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Reservation Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col lg:flex-row gap-6 lg:gap-[1.875rem] items-start lg:items-center"
              >
                <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-dark-primary w-full lg:w-[15.9375rem] flex-shrink-0 text-center md:text-left">
                  예약 바로가기
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 w-full">
                  {/* Phone Consultation */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="hover:-translate-y-1 transition-transform duration-200"
                  >
                    <Link
                      href="tel:033-633-8828"
                      className="bg-gray-lighter rounded-lg flex flex-col justify-center items-center text-center p-4 md:p-8 lg:p-12 gap-3 md:gap-4 lg:gap-8 h-[10rem] md:h-[15rem] lg:h-[19rem] hover:shadow-lg transition-shadow"
                    >
                      <Image
                        src={phoneIcon}
                        alt="전화 아이콘"
                        width={60}
                        height={60}
                        className="md:w-[80px] md:h-[80px]"
                        unoptimized
                      />
                      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
                        <p className="text-base md:text-lg lg:text-xl font-bold text-dark-primary">
                          전화 상담
                        </p>
                        <p className="text-lg md:text-xl font-bold text-teal-secondary whitespace-nowrap">
                          033-633-8828
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Kakao Chat */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-gray-lighter rounded-lg flex flex-col justify-between items-center text-center p-4 md:p-8 lg:p-12 h-[10rem] md:h-[15rem] lg:h-[19rem] relative overflow-hidden hover:-translate-y-1 transition-transform duration-200"
                  >
                    <Image
                      src={kakaoChatImage}
                      alt="카카오톡 채팅"
                      width={60}
                      height={60}
                      className="md:w-[80px] md:h-[80px]"
                      quality={100}
                    />
                    <div className="flex flex-col">
                      <p className="text-base md:text-lg lg:text-xl font-bold text-dark-primary">
                        채팅 상담
                      </p>
                      <p className="text-14 md:text-base text-teal-secondary mt-1 md:mt-2 whitespace-nowrap">
                        @조은이플란트치과의원
                      </p>
                    </div>
                    <Link
                      href="https://pf.kakao.com/_UxdLFn/chat"
                      className="mt-4 md:mt-6 inline-flex items-center gap-2 md:gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-4 md:px-6 py-1 rounded-full transition-colors"
                    >
                      <span className="text-14 md:text-base">예약하기</span>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4H9M9 4L6 1M9 4L6 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </motion.div>

                  {/* Naver Booking */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-gray-lighter rounded-lg flex flex-col justify-between items-center text-center p-4 md:p-8 lg:p-12 h-[10rem] md:h-[15rem] lg:h-[19rem] relative overflow-hidden hover:-translate-y-1 transition-transform duration-200"
                  >
                    <Image
                      src={naverBookingImage}
                      alt="네이버 예약"
                      width={60}
                      height={60}
                      className="md:w-[80px] md:h-[80px]"
                      quality={100}
                    />
                    <div className="flex flex-col">
                      <p className="text-base md:text-lg lg:text-xl font-bold text-dark-primary">
                        간편 예약
                      </p>
                      <p className="text-14 md:text-base text-teal-secondary mt-1 md:mt-2 whitespace-nowrap">
                        조은이플란트치과 속초점
                      </p>
                    </div>
                    <Link
                      href="https://naver.me/xyd9cLG8"
                      className="mt-4 md:mt-6 inline-flex items-center gap-2 md:gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-4 md:px-6 py-1 rounded-full transition-colors"
                    >
                      <span className="text-14 md:text-base">예약하기</span>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4H9M9 4L6 1M9 4L6 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 오시는 길 Section - From location/page.tsx */}
      <motion.section
        id="location"
        className="scroll-mt-[5rem] lg:scroll-mt-[8rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center pt-8 pb-12 md:pb-16 lg:pb-20 **:break-keep">
          <div className="w-full max-w-[69.375rem] px-4 flex flex-col gap-8 md:gap-12 lg:gap-16">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-2">
              <motion.p
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-14 md:text-base lg:text-lg text-dark-primary text-center uppercase leading-[1.6] font-normal"
              >
                CHOONEEPLANT DENTAL CLINIC
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center gap-2"
              >
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center py-2 md:py-4">
                  오시는 길
                </h1>
                <p className="text-base md:text-xl lg:text-2xl font-bold text-teal-secondary text-center">
                  강원도 속초시 중앙로 8, 1층
                </p>
              </motion.div>
            </div>

            {/* Main Map */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full"
            >
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[460px] rounded-lg overflow-hidden bg-gray-lighter">
                <KakaoMap />
              </div>
            </motion.div>

            {/* Walking Directions Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-0"
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-primary">
                  도보로 오시는 길
                </h2>
                <div className="flex items-center w-full lg:w-1/2">
                  <div className="h-[3px] bg-teal-secondary flex-1"></div>
                  {/* Desktop Link */}
                  <Link
                    href="https://kko.kakao.com/9dFiHGWREd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors -mx-1 z-10"
                  >
                    <span className="text-14 md:text-base">길 찾기</span>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4H9M9 4L6 1M9 4L6 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  {/* Mobile Link */}
                  <Link
                    href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,845701.0000000395,1307735.9999999986&rt1=&rt2=%EC%86%8D%EC%B4%88%EC%A1%B0%EC%9D%80%EC%9D%B4%ED%94%8C%EB%9E%80%ED%8A%B8%EC%B9%98%EA%B3%BC%EC%9D%98%EC%9B%90&rtIds=,797484775"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex md:hidden items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors -mx-1 z-10"
                  >
                    <span className="text-14 md:text-base">길 찾기</span>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4H9M9 4L6 1M9 4L6 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-0 items-start lg:items-start">
                {/* Detail Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative w-full lg:w-full h-[300px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={locationDetailMap}
                    alt="조은이플란트치과 상세 위치"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-6 md:gap-8 lg:gap-10 w-full lg:w-full lg:pl-8"
                >
                  {/* Phone */}
                  <div className="flex flex-col gap-1 md:gap-2">
                    <h3 className="text-base md:text-xl lg:text-2xl font-bold text-teal-secondary">
                      전화
                    </h3>
                    <p className="text-lg md:text-xl text-dark-primary">
                      033-633-8828
                    </p>
                  </div>

                  {/* Entrance Guide */}
                  <div className="flex flex-col gap-1 md:gap-2">
                    <h3 className="text-base md:text-xl lg:text-2xl font-bold text-teal-secondary">
                      안내 설명
                    </h3>
                    <p className="text-14 md:text-lg lg:text-xl text-dark-primary">
                      속초보광병원 맞은편
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Driving Directions Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-0"
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-primary">
                  자차로 오시는 길
                </h2>
                <div className="flex items-center w-full lg:w-1/2">
                  <div className="h-[3px] bg-teal-secondary flex-1"></div>
                  {/* Desktop Link */}
                  <Link
                    href="https://kko.kakao.com/9dFiHGWREd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors -mx-1 z-10"
                  >
                    <span className="text-14 md:text-base">길 안내 시작</span>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4H9M9 4L6 1M9 4L6 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  {/* Mobile Link */}
                  <Link
                    href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,845701.0000000395,1307735.9999999986&rt1=&rt2=%EC%86%8D%EC%B4%88%EC%A1%B0%EC%9D%80%EC%9D%B4%ED%94%8C%EB%9E%80%ED%8A%B8%EC%B9%98%EA%B3%BC%EC%9D%98%EC%9B%90&rtIds=,797484775"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex md:hidden items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors -mx-1 z-10"
                  >
                    <span className="text-14 md:text-base">길 안내 시작</span>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4H9M9 4L6 1M9 4L6 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
                {/* Parking Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-1 md:gap-2"
                >
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-teal-secondary">
                    주차 안내
                  </h3>
                  <p className="text-14 md:text-lg lg:text-xl text-dark-primary">
                    전용 주차장 완비되어 있습니다
                  </p>
                </motion.div>

                {/* Parking Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative w-full max-w-[631px] mx-auto"
                >
                  <Image
                    src={locationParking}
                    alt="조은이플란트치과 주차장 안내"
                    width={631}
                    height={480}
                    quality={100}
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
