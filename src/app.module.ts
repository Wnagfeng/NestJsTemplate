import { TypeOrmModule } from '@nestjs/typeorm'
import * as config from 'config'
import { Module } from '@nestjs/common';
import { DemoModule } from './demo/demo.module';
import { ConfigEnum } from '../config/enum/config.enum'
const server = config.get('server');
@Module({
  imports: [DemoModule, TypeOrmModule.forRootAsync(
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
        entities: [],
        synchronize: true,//同步本地schema到数据库(初始化的时候使用)
        logging: ["error"],
      })
    }

  )],
})
export class AppModule { }
