import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity'
@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}