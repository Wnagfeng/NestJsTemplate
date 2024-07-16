import { TypeOrmModule } from '@nestjs/typeorm'
import * as config from 'config'
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ConfigEnum } from '../config/enum/config.enum'
import { entities } from './entitys/index'
import { modules } from './modules/index'
const server = config.get('server');
@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
      }
    ),
    TypeOrmModule.forRootAsync(
      {
        imports: [],
        inject: [],
        useFactory: () => ({
          type: server[ConfigEnum.DB_TYPE],
          host: server[ConfigEnum.DB_HOST],
          port: server[ConfigEnum.DB_PORT],
          username: server[ConfigEnum.DB_USERNAME],
          password: server[ConfigEnum.DB_PASSWORD],
          database: server[ConfigEnum.DB_DATABASE],
          entities: entities,
          synchronize: true,//同步本地schema到数据库(初始化的时候使用)
          logging: process.env.node_env === 'development' ? true : false,
        })
      }

    ),
    ...modules],
})
export class AppModule { }
