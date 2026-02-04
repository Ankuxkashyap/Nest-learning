import { UUID } from "crypto";

const enum DataEmun {
    INCOME = "income",
    EXPENSE = "expense"
}

export const data : DataType[] = [
    {
        id:"uuid",
        source:"Youtube",
        amount:5000,
        create_At: new Date(),
        updated_At:new Date(),
        type:"income"
    },
    {
        id:"uuid1",
        source:"Salray",
        amount:5000,
        create_At: new Date(),
        updated_At:new Date(),
        type:"income"
    },
    {
        id:"uuid3",
        source:"food",
        amount:500,
        create_At: new Date(),
        updated_At:new Date(),
        type:"expense"
    }
] 
export interface DataType {
    id: string;
    source: string;
    amount: number;
    create_At: Date;
    updated_At: Date;
    type: string;
}