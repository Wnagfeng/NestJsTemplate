import { Body, Param, Controller, Delete, Get, Post, Patch } from '@nestjs/common';
import { DemoService } from './demo.service';
import { adduser, updateuser } from "./types/index"
import * as config from 'config'
@Controller('demo')
export class DemoController {
    constructor(private demoService: DemoService) {

    }
    // Get请求
    @Get("/getuserlist")
    getUserlist() {
        // 测试配置文件的读取
        const server = config.get('server');
        console.log("读取到配置了😄：", server);
        return this.demoService.getUserlist()
    }
    // Get请求携带Query参数
    @Get("/getuserlist/:name")
    getUserlistParam(@Param('name') name: string) {
        return this.demoService.getUserlistParam(name)
    }
    // Post请求
    @Post("/adduser")
    createUser(@Body() userdata: adduser) {
        return this.demoService.addUser(userdata.name)
    }
    // Delete请求
    @Delete("/deleteuser")
    deleteUser(@Body() name: adduser) {
        return this.demoService.deleteUser(name.name)
    }
    // Delete请求携带Query参数
    @Delete("/deleteuser/:name")
    deleteUserParam(@Param('name') name: string) {
        console.log("测试hot reload,q,1")
        return this.demoService.deleteUserParam(name);
    }
    // Patch请求
    @Patch("/updateuser")
    updateUser(@Body() userdata: updateuser) {
        return this.demoService.updateUser(userdata.NewName, userdata.OldName)
    }



}
