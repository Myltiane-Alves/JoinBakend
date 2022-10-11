import { AppDataSource } from "src/config/database";
import { Client } from "src/entities/Client";

export const clientRepository = AppDataSource.getRepository(Client)