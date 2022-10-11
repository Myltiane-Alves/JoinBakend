import 'dotenv/config';
import 'reflect-metadata';

import {  DataSource } from "typeorm";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "95325414",
    database: "team",
    synchronize: true,
    logging: true,
    entities: ["src/prisma/**/*.ts"],
    subscribers: [],
    migrations: ["src/database/migrations/*.ts"],
})