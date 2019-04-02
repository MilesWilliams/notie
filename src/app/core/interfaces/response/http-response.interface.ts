import { HttpHeaderResponse } from "@angular/common/http";

export interface HttpResponse<T> {
    message: string;
    values?: T;
    code: number;
    query?: any;
};