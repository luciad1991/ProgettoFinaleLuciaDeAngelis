import { Comune } from "./comune";
import {Provincia} from "./provincia"

export class IndirizzoSedeLegale {
    id!: number;
    via!: string;
    civico!: string;
    cap!: string;
    localita!:string;
    comune!: Comune;
    
}
