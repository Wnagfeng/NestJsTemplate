import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, OneToOne, JoinColumn } from 'typeorm';
import { Logs } from '../logs/logs.entity'
import { Role } from '../roles/roles.entity';
import { Profile } from './profile.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;



    @OneToMany(() => Logs, (logs) => logs.user)
    logs: Logs[]

    @ManyToMany(() => Role)
    @JoinTable({ name: 'user_role' })
    roles: Role[]

    @OneToOne(() => Profile, profile => profile.user)
    profile: Profile
}