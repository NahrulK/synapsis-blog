import { Gender, Status } from "./GetAllUserstList";

export interface GetAUserData {
    meta?: null;
    data?: GetAllUserstListDatum;
}

export interface GetAllUserstListDatum {
    id?:     number;
    name?:   string;
    email?:  string;
    gender?: Gender;
    status?: Status;
}


