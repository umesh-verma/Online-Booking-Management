"use client";

import React, { FC } from "react";
import RentalCarSearchForm from "./(car-search-form)/RentalCarSearchForm";

export interface HeroSearchFormSmallProps {
  className?: string;
}

const HeroSearchFormSmall: FC<HeroSearchFormSmallProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-HeroSearchFormSmall ${className}`}
      data-nc-id="HeroSearchFormSmall"
    >
      <ul className="h-[88px] flex justify-center space-x-5 sm:space-x-9">
        <li className="relative flex-shrink-0 flex items-center cursor-pointer text-base text-neutral-900 dark:text-neutral-200 font-medium">
          <div className="relative select-none">
            <span>Rental Cars</span>
            <span className="absolute top-full mt-1 block w-full h-0.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
          </div>
        </li>
      </ul>
      <div className="mt-2">
        <RentalCarSearchForm />
      </div>
    </div>
  );
};

export default HeroSearchFormSmall;
