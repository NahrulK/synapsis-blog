import React from "react";
import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/shared/Comment/Comment";

const BlogSingle = () => {
  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            Keep up the spirit of the desire to travel around the world
          </h1>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert mt-4"
      >
        <p>
          Venio ut accedo. Illum saepe curia. Adaugeo animus solio. Quis sol
          abbas. Animi thymum depono. Debitis similique absens. Vivo timor
          neque. Valeo qui adduco. Caelestis quisquam cogito. Comedo uredo
          omnis. Clarus abundans depulso. Tametsi est tumultus. Stipes averto
          qui. Spes bene vigor. Quibusdam pectus terror. Verbum tripudio
          censura. Speciosus sulum architecto.
        </p>
      </div>
    );
  };

  const renderAuthor = () => {
    return (
      <div className="max-w-screen-md mx-auto ">
        <div className="nc-SingleAuthor flex">
          <div className="flex flex-col ml-3 max-w-lg sm:ml-5 space-y-1">
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
              WRITEN BY
            </span>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              <a href="##">Fones Mimi</a>
            </h2>
            <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
            bhudev_bhat@zulauf-schiller.example
              
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderCommentForm = () => {
    return (
      <div className="max-w-screen-md mx-auto pt-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Responses (14)
        </h3>
      </div>
    );
  };

  const renderCommentLists = () => {
    return (
      <div className="max-w-screen-md mx-auto mb-4">
        <ul className="nc-SingleCommentLists space-y-5">
          <li>
            <Comment />
            {/* <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul> */}
          </li>
          <li>
            <Comment />
            {/* <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul> */}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16 ">
      {renderHeader()}
      <div className="nc-SingleContent container space-y-10 mb-4">
        {renderContent()}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
        {renderAuthor()}
        {renderCommentForm()}
        {renderCommentLists()}
      </div>
    </div>
  );
};

export default BlogSingle;
