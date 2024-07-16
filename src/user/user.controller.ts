import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }
    // 查询用户列表
    @Get()
    async getUserList() {
        const res = await this.userService.findAll()
        return {
            code: 200,
            message: "success",
            data: res
        };
    }
    // 根据id查询用户详情
    @Get(':id')
    async getUserById(@Param('id') id: number) {
        console.log(id);
        const res = await this.userService.findOne(id);
        return {
            code: 200,
            message: "success",
            data: res
        };
    }
    // 查询用户日志
    @Get(':id/logs')
    async getUserlogs(@Param('id') id: number) {
        console.log(id);
        const res = await this.userService.findOneOfLogs(id);
        return {
            code: 200,
            message: "success",
            data: res
        };
    }



}


