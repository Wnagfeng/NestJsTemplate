/**
 * 这是数据库的配置
 * author: Joon
*/
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigEnum } from '../../config/enum/config.enum';
import * as config from 'config'
import * as path from 'path';

// 通过dotENV来解析不同的配置
function buildConnectionOptions() {
    const server = config.get('server');
    // 配置一： 如果该配置文件在src下用这个
    // const entitiesDir =
    //     process.env.NODE_ENV === 'test'
    //         ? [__dirname + '/**/*.entity.ts']
    //         : [__dirname + '/**/*.entity{.js,.ts}'];
    // 配置二： 如果该配置文件在config目录下用这个
    const entitiesDir =
        process.env.NODE_ENV === 'test'
            ? [path.resolve(__dirname, '../../src/**/*.entity.ts')]
            : [path.resolve(__dirname, '../../src/**/*.entity{.js,.ts}')];
    return {
        type: server[ConfigEnum.DB_TYPE],
        host: server[ConfigEnum.DB_HOST],
        port: server[ConfigEnum.DB_PORT],
        username: server[ConfigEnum.DB_USERNAME],
        password: server[ConfigEnum.DB_PASSWORD],
        database: server[ConfigEnum.DB_DATABASE],
        entities: entitiesDir,
        // 同步本地的schema与数据库 -> 初始化的时候去使用
        synchronize: true,
        logging: server[ConfigEnum.LOG_SQL] === 'treu' ? true : false,
    } as TypeOrmModuleOptions;
}

export const connectionParams = buildConnectionOptions();

export default new DataSource({
    ...connectionParams,
    migrations: ['src/migrations/**'],
    subscribers: [],
} as DataSourceOptions);