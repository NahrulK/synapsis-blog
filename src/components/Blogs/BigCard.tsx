import React, { FC } from "react";

import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Button from "../shared/Button/Button";
import { GetPostListDatum } from "@/types/posts/GetPostList";

export interface BigCardProps {
  className?: string;
  post: GetPostListDatum;
}

const BigCard: FC<BigCardProps> = ({ className = "h-full" , post}) => {
  return (
    <div className={`nc-Card12 group relative flex flex-col ${className}`}>
      <div className=" mt-8 md:pr-10 flex flex-col w-full md:w-auto">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Link
            href={`/posts/${post.user_id}/${post.id}`}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            {post.title}
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2">
            {post.body}
          </span>
        </span>
        <Link
         href={`/posts/${post.user_id}/${post.id}`}
          className={` inline-flex  font-medium justify-end py-2 items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-xs`}
        >
          <button className="flex  cursor-pointer hover:bg-secondary-400 justify-center items-center bg-secondary-100 rounded">
            <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
              <ArrowRightCircleIcon className="h-5 w-5" />
            </span>
            <span className="text-black p-2 font-normal line-clamp-1">
              Lihat Selengkapnya..
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BigCard;
