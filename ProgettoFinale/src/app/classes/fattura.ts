import { Client } from "./client";
import { Stato } from "./stato";

export class Fattura {
    
        id?: number;
        data!: string;
        numero!: number;
        anno!: number;
        importo!: number;
        stato!: Stato;
        cliente!: Client;

        constructor() {
                this.stato = new Stato();
                this.cliente = new Client();
        }
}
        
