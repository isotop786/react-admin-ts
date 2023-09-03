import { OrderItem } from "./OderItem";
export interface Order{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    order_items: OrderItem[]
}