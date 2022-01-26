import { Client } from "./client";
import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";
import { Stato } from "./stato";

export class Fattura {
    
        id!: number;
        data!: string;
        numero!: number;
        anno!: number;
        importo!: number;
        stato!: Stato;
        cliente!: Client;
        
}
