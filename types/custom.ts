import { Database } from "./supabase";

export type Brand = Database["public"]['Tables']["brand"]["Row"];
export type BusinessDetails = Database["public"]['Tables']["business_details"]["Row"];

export type Country = {
    name: string;
    flag: string;
}
export type CountryObject ={
    name: Country
}