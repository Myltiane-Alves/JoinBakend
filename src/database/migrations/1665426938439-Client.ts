import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class Client1665426938439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "clients",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "cnpj",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: "reason",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "phone",
                    type: "varchar",
                    length: "20",
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "createdAt",
                    type: "datetime",
                    default: "CURRENT_TIMESTAMP",   
                },
                {
                    name: "updatedAt",
                    type: "datetime",
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {     
        await queryRunner.dropTable("clients")
    }

}
