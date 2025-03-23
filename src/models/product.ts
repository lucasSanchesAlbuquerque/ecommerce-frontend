import { CategoryDTO } from "./category";

export type ProductDTO={
    id:number;
    name:string;
    description:string;
    price:number;
    imagUrl:string;
    categories:CategoryDTO[]
}