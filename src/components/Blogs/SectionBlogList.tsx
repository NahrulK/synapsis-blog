import React, { FC } from "react";
import SmallCard from "./SmallCard";
import BigCard from "./BigCard";

export interface SectionBlogListProps {}

const SectionBlogList: FC<SectionBlogListProps> = () => {
  return (
    <div className="nc-SectionMagazine5">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
       <div className="grid gap-4 md:gap-6">
       {[1, 1].map((item, index) => (
          <BigCard key={index} />
        ))}
       </div>
        <div className="grid gap-6 md:gap-8">
          {[1, 1, 1].map((item, index) => (
            <SmallCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBlogList;
