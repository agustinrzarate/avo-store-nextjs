import { ICart } from "./Icart";

export interface IShoppingCart {
    total: number;
    cart: Array<ICart>;
}