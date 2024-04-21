
import React, { FC, useCallback } from "react";
import Link from "next/link";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CustomLink } from "@/types/CustomLink";
import { GetPostList } from "@/types/posts/GetPostList";
import twFocusClass from "@/lib/twFocusClass";

export interface PaginationProps {
  className?: string;
  postList: GetPostList ;
  searchParams: {  pageIndex?: string };
}

const Pagination: FC<PaginationProps> = ({
  className = "",
  postList,
  searchParams,
}) => {

  const PAGINATION: CustomLink[] = [
   
    {
        label: String(Number(postList.meta?.pagination?.page) - 2),
        href: String(Number(postList.meta?.pagination?.page) - 2),
      },
    {
      label: String(Number(postList.meta?.pagination?.page) - 1) ,
      href: String(Number(postList.meta?.pagination?.page) - 1),
    },
    {
      label: String(postList.meta?.pagination?.page),
      href: String(postList.meta?.pagination?.page),
    },
    {
      label: String(Number(postList.meta?.pagination?.page) + 1),
      href: String(Number(postList.meta?.pagination?.page) + 1),
    },
    {
        label: String(Number(postList.meta?.pagination?.page) + 2),
        href: String(Number(postList.meta?.pagination?.page) + 2),
      },
   
  ];

  const renderItem = (pag: CustomLink, index: number) => {
    if (Number(pag.href) < 1) {
      return;
    }

    if (Number(pag.href) > Number(postList.meta?.pagination?.pages)) {
      return;
    }

    if (Number(pag.href) == Number(postList.meta?.pagination?.page)) {
      return (
        <span
          key={index}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
        >
          {Number(pag.href)}
        </span>
      );
    }

  
    // RETURN UNACTIVE PAGINATION
    return (
      <Link
        key={index}
        // scroll={false}
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        href={`?${new URLSearchParams({
          pageIndex: pag.href,
        })}`}
      >
        {pag.label}
      </Link>
    );
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
    >
      {PAGINATION.map(renderItem)}
    </nav>
  );
};

export default Pagination;
