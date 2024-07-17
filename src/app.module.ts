import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as config from 'config'

import { ConfigModule } from '@nestjs/config';
import { Global, Logger, Module } from '@nestjs/common';
import { modules } from './modules/index'
import { connectionParams } from './config/DataBaseConfig';//qy:导入连接数据库的ormconfig文件
@Global()
@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
      }
    ),
    TypeOrmModule.forRoot(connectionParams),
    ...modules],//qy: 统一导入modules
  providers: [Logger],//qy: Logger是全局的，所以需要在这里导入
  exports: [Logger],//qy: 导出Logger
})
export class AppModule { }
