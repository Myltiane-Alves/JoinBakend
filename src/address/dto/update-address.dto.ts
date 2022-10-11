import { Decimal } from "@prisma/client/runtime";

export class UpdatedAddressDto{
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