import { Client } from "../classes/client";

export interface ClientData {
    
    content : Array <Client>;
    pageable: Object;
    last: Boolean;
    totalPages: number;
    totalElements: number;
    number: number;
    numberOfElements: number;
    size: number;
    sort: Object;
    first: Boolean;
    empty: Boolean;
}
