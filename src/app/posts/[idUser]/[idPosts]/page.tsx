import React from "react";
import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/shared/Comment/Comment";
import { GetPostDetail } from "@/types/posts/GetPostDetail";
import { fetchAPostDetail, fetchAllPostComments } from "@/api/posts";
import { GetAUserData } from "@/types/users/GetAUsersData";
import { fetchAUser } from "@/api/users";
import {
  GetCommentsPost,
  GetCommentsPostDatum,
} from "@/types/posts/GetCommentPost";
import { Badge } from "@/components/ui/badge";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { idPosts: number };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  // fetch data
  const postData = await fetchAPostDetail(Number(params.idPosts));

  return {
    title: `Synapsis Post | ${postData.data?.title}`,
    description: `${postData.data?.body}`,
  };
}

const BlogSingle = async ({
  params
}: {
  params: { idUser: string; idPosts: number };
}) => {
  const postDetail: GetPostDetail = await fetchAPostDetail(params.idPosts);
  const postComment: GetCommentsPost = await fetchAllPostComments(
    params.idPosts
  );
  const postUser: GetAUserData = await fetchAUser(
    postDetail?.data?.user_id ? postDetail?.data?.user_id : 1
  );

  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            {postDetail?.data?.title}
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
        <p>{postDetail.data?.body}</p>
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

            <div className="flex flex-col gap-2">
              <h2 className="text-lg flex gap-2 flex-col md:flex-row font-semibold text-neutral-900 dark:text-neutral-200">
                {postUser.data?.name ? postUser.data?.name : "Unknown User"}{" "}
                {postUser.data?.gender && (<Badge className="ml-2 flex items-center justify-center" variant={"outline"}>{postUser.data?.gender}</Badge>)}
              </h2>
              <h3 className="text-sm flex flex-col md:flex-row gap-2 text-neutral-500 sm:text-base dark:text-neutral-300">
                {postUser.data?.email ? postUser.data?.email : ""}{" "}
                {postUser.data?.status && (<Badge className="ml-2 flex items-center justify-center" variant={"default"}>{postUser.data?.status}</Badge>)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCommentForm = () => {
    return (
      <div className="max-w-screen-md mx-auto pt-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Responses ({postComment.meta?.pagination?.total})
        </h3>
      </div>
    );
  };

  const renderCommentLists = () => {
    return (
      <div className="max-w-screen-md mx-auto mb-4">
        <ul className="nc-SingleCommentLists space-y-5">
          {postComment.data?.map((comment: GetCommentsPostDatum, index) => (
            <li key={index}>
              <Comment comment={comment} />
            </li>
          ))}
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
