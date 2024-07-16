import { Controller, Get, Logger } from '@nestjs/common';

@Controller('example-log')
export class ExampleLogController {
    constructor(
        private readonly logger: Logger
    ) { }
    /**
     * 展示如何使用winston日志模块
     * author: Joon
     * date: 2024-07-17:00:17:00
    */
    @Get()
    getHello(): string {
        this.logger.log('Hello, World!');
        this.logger.debug('This is a debug message');
        this.logger.log('This is an info message');
        this.logger.warn('This is a warning message');
        this.logger.error('This is an error message');
        return 'Hello, World!';
    }
}
