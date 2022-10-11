import { AppDataSource } from "src/config/database";
import { Address } from "src/entities/Address";

export const addressRepository = AppDataSource.getRepository(Address)