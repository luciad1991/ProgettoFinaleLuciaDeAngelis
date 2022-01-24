export class Client {
    id!: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: string;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!:string;
    emailContatto!: string;
    indirizzoSedeOperativa!:Object; // da creare una classe?
    indirizzoSedeLegale!: Object; //da creare una classe?
    dataInserimento!: string;
    dataUltimoContatto!: string;
    fatturatoAnnuale!: number
}
