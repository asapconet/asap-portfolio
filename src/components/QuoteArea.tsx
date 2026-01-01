import { QuotationIcon } from "@/assets/Icons/Quotes";

export default function QuoteArea() {
  return (
    <div className="flex items-center justify-center w-full mt-20 sm:mt-28 md:mt-36">
      <div className="flex flex-col items-end relative w-full max-w-[712px]">
        <div
          className="flex text-center items-center w-full

          border border-white relative
          min-h-[80px] sm:min-h-[95px]"
        >
          <QuotationIcon className="absolute -top-3 sm:-top-4 left-2 sm:left-4 " />
          <p className="heading-3 md:heading-2 text-left sm:text-center w-full px-2">
            With great power comes great electricity bill
          </p>
          <QuotationIcon className="absolute -bottom-3 sm:-bottom-4 right-2 sm:right-4 " />
        </div>

        <div
          className="flex items-center justify-center
          w-[120px] sm:w-[140px] md:w-[162px]
          h-[50px] sm:h-[56px] md:h-[63px]
          px-3 sm:px-4 py-3 sm:py-4
          border-t-0 border border-white relative"
        >
          <p className="heading-3 md:heading-2">-Dr. I</p>
        </div>
      </div>

      <div
        className="
          hidden xl:block absolute right-0 mt-24
          w-12 lg:w-16 xl:w-[91px]
          h-12 lg:h-16 xl:h-[91px]
          border border-white border-r-0
        "
      />
    </div>
  );
}
