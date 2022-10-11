import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    contactName: string;

    @Column()
    cnpj: string;

    @Column()
    reason: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
    
}