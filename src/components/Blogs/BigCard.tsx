import React, { FC } from "react";

import Link from "next/link";

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
      </div>
    </div>
  );
};

export default BigCard;
