import { Decimal } from "@prisma/client/runtime";

export class CreatedAddressDto{
    logradouro: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    zipcode: string;
    latitude: Decimal;
    longitude: Decimal;
   
}