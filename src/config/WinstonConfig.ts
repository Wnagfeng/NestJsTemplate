/**
 * 该文件用于配置winston日志模块
在index.ts文件中，我们对于winsont进行了配置最终在main.ts中使用了该模块进行日志输出。
author: Joon
*/
import { createLogger } from 'winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { utilities, WinstonModule } from 'nest-winston';
import { LogEnum } from '../../config/enum/config.enum'
import * as config from 'config';
const server = config.get('server');

function createDailyRotateTrasnport(level: string, filename: string) {

    return new DailyRotateFile({
        level,
        dirname: 'logs',
        filename: `${filename}-%DATE%.log`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.simple(),
        ),
    });
}
export const instance = createLogger({
    // options of Winston
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                utilities.format.nestLike(),
            ),
        }),
        // 解析配置文件是否需要开启日志
        ...(server[LogEnum.LOG_ON] == "true" ? [createDailyRotateTrasnport('info', 'application'),
        createDailyRotateTrasnport('warn', 'error')] : [])

    ],
});

export const instancelogger = WinstonModule.createLogger({
    instance,
})