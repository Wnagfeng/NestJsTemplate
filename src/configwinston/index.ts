import { createLogger } from 'winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { utilities, WinstonModule } from 'nest-winston';
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
        new DailyRotateFile({
            level: 'warn',
            dirname: 'logs',
            filename: 'warn-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.simple(),
            ),
        }),
        new DailyRotateFile({
            level: 'error',
            dirname: 'logs',
            filename: 'error-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.simple(),
            ),
        }),

        new DailyRotateFile({
            level: 'info',
            dirname: 'logs',
            filename: 'info-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.simple(),
            ),
        }),
    ],
});

export const instancelogger = WinstonModule.createLogger({
    instance,
})