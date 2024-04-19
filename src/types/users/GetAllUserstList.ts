export interface GetAllUserstList {
    meta?: Meta;
    data?: GetAllUserstListDatum[];
}

export interface GetAllUserstListDatum {
    id?:     number;
    name?:   string;
    email?:  string;
    gender?: Gender;
    status?: Status;
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export enum Status {
    Active = "active",
    Inactive = "inactive",
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
