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
                    name: "contactName",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "cnpj",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "reason",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "phone",
                    type: "varchar",
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
