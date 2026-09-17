"use client";

import { motion } from "framer-motion";
import { QuotationIcon } from "@/assets/Icons/Quotes";

export default function QuoteArea() {
  return (
    <div className="flex items-center justify-end w-full mt-20 sm:mt-28 md:mt-36">
      <div className="flex flex-col items-end relative w-full max-w-[712px]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex text-center items-center w-full border border-white relative min-h-[80px] sm:min-h-[95px] overflow-hidden"
        >
          {/* Top-left quote */}
          <QuotationIcon className="absolute top-1 sm:top-1.5 sm:left-1 w-2 h-2 sm:w-6 sm:h-6 opacity-75" />

          <p className="heading-3 md:heading-2 text-center w-full px-2 py-3">
            With great power comes great electricity bill
          </p>

          {/* Bottom-right quote */}
          <QuotationIcon className="absolute rotate-180 bottom-1 sm:right-1 w-2 h-2 sm:w-6 sm:h-6 opacity-75" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center justify-center w-[120px] sm:w-[140px] md:w-[162px] h-[50px]\
          sm:h-[56px] md:h-[63px] px-3 sm:px-4 py-3 sm:py-4 border-t-0 border border-white relative"
        >
          <p className="heading-3 md:heading-2">-Engr. I</p>
        </motion.div>
      </div>

      <div
        className="hidden xl:block absolute -right-6 mt-24 w-12 lg:w-16 xl:w-[91px]
      h-12 lg:h-16 xl:h-[91px] border border-white border-r-0"
      />
    </div>
  );
}
