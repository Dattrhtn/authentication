import { book } from "./book"
export interface account{
    id?: number,
    name: string,
    password: string,
    listbook: book[]
}