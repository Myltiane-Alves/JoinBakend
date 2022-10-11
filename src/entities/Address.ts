import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("address")
export class Address {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    logradouro: string;

    @Column()
    number: string;;

    @Column()
    complement: string;

    @Column()
    district: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zipcode: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

}