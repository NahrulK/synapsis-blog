import React, { FC } from "react";

import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export interface SmallCardProps {
  className?: string;
}

const SmallCard: FC<SmallCardProps> = ({ className = "" }) => {
  return (
    <div className={`nc-Card13 relative flex ${className}`} data-nc-id="Card13">
      <div className="flex flex-col h-full py-2">
        <h2 className={`nc-card-title block font-semibold text-base`}>
          <Link
            href={"/blog-single"}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            Vitae Et Leo Duis Ut Diam Quam Nulla.
          </Link>
        </h2>
        <span className="hidden sm:block my-3 text-slate-500 dark:text-slate-400 ">
          <span className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorem voluptatibus numquam ut pariatur officiis?
          </span>
        </span>
        <div
      className={` inline-flex  font-medium justify-end py-1 items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-xs`}
    >
     
      <button className="flex  cursor-pointer hover:bg-primary-400 justify-center items-center bg-primary-100 rounded">
          <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          <ArrowRightCircleIcon className="h-5 w-5"/>
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

export default SmallCard;
