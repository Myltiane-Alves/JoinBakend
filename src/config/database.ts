import 'dotenv/config';
import {  DataSource } from "typeorm";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "95325414",
    database: "join",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: ["src/database/migrations/*.ts"],
})