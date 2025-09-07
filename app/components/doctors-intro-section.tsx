"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import Image from "next/image";
import React from "react";

import leeJunMyeongImage from "@/public/images/doctors/lee-jun-myeong.png";
import yoonWonBinImage from "@/public/images/doctors/yoon-won-bin.png";

interface DoctorData {
  name: string;
  title: string;
  image: any;
  credentials: string[];
}

const doctors: DoctorData[] = [
  {
    name: "이준명",
    title: "대표원장",
    image: leeJunMyeongImage,
    credentials: [
      "단국대학교 치의예과 졸업",
      "단국대학교 치과대학 졸업",
      "ATC 심미보철 연구회 수료",
      "Digital Guided Surgery Course 수료",
      "Global Academy of Osseointegration 주관",
      "Comprehensive Implant Training Course 수료",
      "Dental Bean Master of Third Molar Extraction 수료",
      "One-day Seminar on TMJ Course 수료",
      "대한악안면임플란트학회 정회원",
      "대한구강보건학회 정회원",
      "오스템임플란트 연구자문위원",
      "메가젠임플란트 임상연구위원",
      "前) 365다운치과 원장",
      "前) 조은이플란트치과 강릉점 원장",
      "前) 28지킴이치과 원장",
    ],
  },
  {
    name: "윤원빈",
    title: "대표원장",
    image: yoonWonBinImage,
    credentials: [
      "단국대학교 치의예과 졸업",
      "단국대학교 치과대학 졸업",
      "Edu-dent 4 all-in-one Course 수료",
      "Dental Bean Master of Third Molar Extraction 수료",
      "Dental Bean Master of Preparation 수료",
      "Dr.kim Master of Endodontic Treatment Course 수료",
      "One-day Seminar on TMJ Course 수료",
      "오스템임플란트 연구자문위원",
      "메가젠임플란트 임상연구위원",
      "前) 의성군 보건소 치과과장",
      "前) 서울백세치과 원장",
    ],
  },
];

const DoctorCard = ({
  doctor,
  index,
}: {
  doctor: DoctorData;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.95,
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}
        className="relative h-[25rem] w-full lg:h-[50rem] lg:w-[33.75rem] overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: isInView ? 1 : 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src={doctor.image}
            alt={`${doctor.name} ${doctor.title}`}
            quality={100}
            fill
            className="object-contain lg:object-cover lg:object-top"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-end gap-4 md:gap-5 lg:gap-6 p-4 md:p-6 lg:px-8 lg:py-8">
        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : isEven ? -20 : 20,
          }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary">
              {doctor.name}
            </h3>
            <span className="text-14 md:text-base lg:text-lg font-normal text-dark-primary">
              {doctor.title}
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.8,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-secondary px-4 py-1 w-fit"
          >
            <span className="text-14 md:text-sm lg:text-base font-normal text-white">
              주요약력
            </span>
          </motion.div>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex max-h-[35rem] flex-col overflow-y-auto"
        >
          <div className="flex flex-col gap-2">
            {doctor.credentials.map((credential, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : -10,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + idx * 0.05,
                  ease: "easeOut",
                }}
                className="flex items-center gap-2"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: isInView ? 1 : 0,
                    rotate: isInView ? 0 : -180,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + idx * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <ChevronRight className="size-4 text-dark-primary flex-shrink-0" />
                </motion.div>
                <span className="text-14 md:text-base lg:text-lg font-normal text-dark-primary">
                  {credential}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const DoctorsIntroSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-[69.375rem] flex-col gap-12 md:gap-16 lg:gap-20 px-4 pb-8 md:pb-12 lg:pb-16 md:px-0">
      {doctors.map((doctor, index) => (
        <DoctorCard key={doctor.name} doctor={doctor} index={index} />
      ))}
    </section>
  );
};

export default DoctorsIntroSection;
