import { GetCommentsPostDatum } from "@/types/posts/GetCommentPost";
import React from "react";
import { FC } from "react";

export interface CommentProps {
  isSmall?: boolean;
  comment: GetCommentsPostDatum;
}

const Comment: FC<CommentProps> = ({ isSmall , comment}) => {
  return (
    <div className="nc-CommentCard flex ">
      <div className="flex-grow max-w-[80vw] overflow-hidden flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
        <div className="relative flex flex-wrap items-center pr-6">
          <a
            className="flex-shrink-0  font-semibold text-neutral-800 dark:text-neutral-100 "
            href="/ncmaz/author/the-demo-author-slug"
          >
           {comment?.name ? comment.name : "Unknown User"}
          </a>
          <span className="mx-2">·</span>
          <span className="text-neutral-500 dark:text-neutral-400 text-xs  sm:text-sm">
            {comment.email}
          </span>
        </div>
        <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
          {comment.body}
        </span>
      </div>
    </div>
  );
};

export default Comment;
