import React, { FC } from "react";

import Link from "next/link";

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
        <span className="mt-4 block sm:hidden text-sm text-slate-500 ">
          May 20, 2021 · 2 min read
        </span>
      </div>
    </div>
  );
};

export default SmallCard;
