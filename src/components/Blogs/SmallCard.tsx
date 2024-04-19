import React, { FC } from "react";

import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { GetPostListDatum } from "@/types/posts/GetPostList";

export interface SmallCardProps {
  className?: string;
  post : GetPostListDatum;
}

const SmallCard: FC<SmallCardProps> = ({ className = "" , post}) => {
  return (
    <div className={`nc-Card13 relative flex ${className}`} data-nc-id="Card13">
      <div className="flex flex-col h-full py-2">
        <h2 className={`nc-card-title block font-semibold text-base`}>
          <Link
            href={`/posts/${post.user_id}/${post.id}`}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
           {post.title}
          </Link>
        </h2>
        <span className="hidden sm:block my-3 text-slate-500 dark:text-slate-400 ">
          <span className="line-clamp-2">
            {post.body}
          </span>
        </span>
        <Link
         href={`/posts/${post.user_id}/${post.id}`}
      className={` inline-flex  font-medium justify-end py-1 items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-xs`}
    >
     
      <button className="flex  cursor-pointer hover:bg-primary-400 justify-center items-center bg-primary-100 rounded">
          <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          <ArrowRightCircleIcon className="h-5 w-5"/>
        </span>
        <span className="text-black p-2  font-normal line-clamp-1">
          Lihat Selengkapnya..
        </span>
      </button>
    </Link>
      </div>
    </div>
  );
};

export default SmallCard;
