const DoctorsHeadingSection = () => {
  return (
    <section className="flex w-full max-w-[69.375rem] flex-col items-end gap-6 md:gap-8 lg:gap-[2.313rem] px-4 md:px-0 mx-auto py-8 md:py-12 lg:py-16">
      {/* Heading */}
      <div className="flex w-full flex-col items-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex w-full flex-col items-center gap-2">
          <p className="text-center text-14 md:text-base lg:text-lg font-normal leading-[1.6] text-dark-primary opacity-50">
            CHOONEEPLANT DENTAL CLINIC
          </p>
          <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-bold leading-[1.6] text-dark-primary">
            의료진 소개
          </h1>
        </div>
      </div>
    </section>
  );
};

export default DoctorsHeadingSection;
