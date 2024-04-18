import React from "react";
import { FC } from "react";

export interface CommentProps {
  isSmall?: boolean;
}

const Comment: FC<CommentProps> = ({ isSmall }) => {
  return (
    <div className="nc-CommentCard flex ">
      <div className="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
        <div className="relative flex items-center pr-6">
          <a
            className="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
            href="/ncmaz/author/the-demo-author-slug"
          >
            Nahrul K
          </a>
          <span className="mx-2">·</span>
          <span className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
            bhudev_bhat@zulauf-schiller.example
          </span>
        </div>
        <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
          In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at,
          feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend
          quam a odio. In hac habitasse platea dictumst.
        </span>
      </div>
    </div>
  );
};

export default Comment;
