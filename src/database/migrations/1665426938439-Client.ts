import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Client1665426938439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "client",
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
                
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("client")
    }

}
