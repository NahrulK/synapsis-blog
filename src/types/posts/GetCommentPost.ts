import { Pagination } from "./GetPostList";

export interface GetCommentsPost {
    meta?: Meta;
    data?: GetCommentsPostDatum[];
}

export interface GetCommentsPostDatum {
    id?:      number;
    post_id?: number;
    name?:    string;
    email?:   string;
    body?:    string;
}

export interface Meta {
    pagination?: Pagination;
}

