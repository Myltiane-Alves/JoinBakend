import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Address1665430639688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "address",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "logradouro",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "number",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "complement",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: "district",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "city",
                    type: "varchar",
                    length: "255",
                    isNullable: false,    
                },
                {
                    name: "state",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "zipcode",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                    
                },
                {
                    name: "latitude",
                    type: "decimal",
                    precision: 10,
                    scale: 8,
                    isNullable: true,

                },
                {
                    name: "longitude",
                    type: "decimal",
                    precision: 11,
                    scale: 8,
                    isNullable: true,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address")
    }

}
