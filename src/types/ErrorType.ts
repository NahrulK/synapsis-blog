export interface ErrorType {
    meta?: null;
    data?: ErrorTypeDatum[];
}

export interface ErrorTypeDatum {
    field?:   string;
    message?: string;
}
