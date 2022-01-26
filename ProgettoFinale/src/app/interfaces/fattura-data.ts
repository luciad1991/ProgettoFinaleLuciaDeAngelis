import { Fattura } from "../classes/fattura"

export interface FatturaData {
   
    content : Array <Fattura>;
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
