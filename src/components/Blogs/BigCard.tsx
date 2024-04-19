import React, { FC } from "react";

import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Button from "../shared/Button/Button";

export interface BigCardProps {
  className?: string;
}

const BigCard: FC<BigCardProps> = ({ className = "h-full" }) => {
  return (
    <div className={`nc-Card12 group relative flex flex-col ${className}`}>
      <div className=" mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Link
            href={"/posts/idUser/idBlog"}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            Adipiscing Bibendum Est Ultricies.
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            vero perspiciatis ullam ea? Nihil accusamus similique debitis
            tempore mollitia? Aperiam.
          </span>
        </span>
        <div
          className={` inline-flex  font-medium justify-end py-2 items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-xs`}
        >
          <button className="flex  cursor-pointer hover:bg-secondary-400 justify-center items-center bg-secondary-100 rounded">
            <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
              <ArrowRightCircleIcon className="h-5 w-5" />
            </span>
            <span className="text-neutral-500 p-2  dark:text-neutral-400 font-normal line-clamp-1">
              Lihat Selengkapnya..
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
