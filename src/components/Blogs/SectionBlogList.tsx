import React, { FC } from "react";
import SmallCard from "./SmallCard";
import BigCard from "./BigCard";

export interface SectionBlogListProps {}

const SectionBlogList: FC<SectionBlogListProps> = () => {
  const array = [1, 1, 1, 1, 1,];

  return (
    <div className="nc-SectionMagazine5">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <div className="grid gap-4 md:gap-6">
          {array.map((item, index) => (
            <>{index % 2 === 1 && <BigCard key={index} />}</>
          ))}
        </div>
        <div className="grid gap-6 md:gap-8">
          {array.map((item, index) => (
            <>{index % 2 === 0 && <SmallCard key={index} />}</>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBlogList;
