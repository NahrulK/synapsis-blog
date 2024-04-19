import React, { FC } from "react";
import SmallCard from "./SmallCard";
import BigCard from "./BigCard";
import { fetchAllPostList } from "@/api/posts";
import { GetPostList, GetPostListDatum } from "@/types/posts/GetPostList";

export interface SectionBlogListProps {}

const SectionBlogList: FC<SectionBlogListProps> = async () => {
  

  const postList: GetPostList = await fetchAllPostList(1, 5)

  return (
    <div className="nc-SectionMagazine5">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <div className="grid gap-4 md:gap-6">
          {postList?.data?.map((post : GetPostListDatum, index) => (
            <>{index % 2 === 1 && <BigCard key={index} post={post} />}</>
          ))}
        </div>
        <div className="grid gap-6 md:gap-8">
          {postList?.data?.map((post : GetPostListDatum, index) => (
            <>{index % 2 === 0 && <SmallCard key={index} post={post} />}</>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBlogList;
