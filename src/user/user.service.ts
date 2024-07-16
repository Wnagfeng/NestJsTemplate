import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>) { }

    async create(user: User): Promise<User> {
        const UserTemp = await this.userRepository.create(user)
        return await this.userRepository.save(UserTemp);
    }
    // 查询用户详情信息
    async findOne(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: { id }, relations: {
                profile: true
            }
        });
    }
    // 查询用户日志

    async findOneOfLogs(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: { id }, relations: {
                logs: true
            }
        });
    }
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
    async update(id: number, user: User): Promise<User> {
        await this.userRepository.update(id, user);
        return await this.userRepository.findOne({ where: { id } });
    }
    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
