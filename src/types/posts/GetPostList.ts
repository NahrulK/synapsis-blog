export interface GetPostList {
    meta?: Meta;
    data?: GetPostListDatum[];
}

export interface GetPostListDatum {
    id?:      number;
    user_id?: number;
    title?:   string;
    body?:    string;
}

export interface Meta {
    pagination?: Pagination;
}

export interface Pagination {
    total?: number;
    pages?: number;
    page?:  number;
    limit?: number;
    links?: Links;
}

export interface Links {
    previous?: string;
    current?:  string;
    next?:     string;
}
