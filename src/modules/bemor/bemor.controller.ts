
import { Controller, Post, Body, Get, Catch, ArgumentsHost } from '@nestjs/common';
import { Bemors } from './models/bemor.model';
import { CreateBemorDto } from './dto/index';
import { BemorService } from './bemor.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BemorResponse } from './response';


@Catch()
@Controller('bemor')
export class BemorController {
    constructor(private readonly bemorService: BemorService) { }

    @ApiTags('API')
    @ApiResponse({ status: 201, type: CreateBemorDto })
    @Post('create_bemor')
    async register(@Body() dto: CreateBemorDto): Promise<BemorResponse> {
        return this.bemorService.createBemor(dto);
    }

    @Get('public_bemor')
    async publicBemor(): Promise<BemorResponse[]> {
        return this.bemorService.publicBemor();
    }

    // Обработчик ошибок
    catch(exception: any, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        const status = exception.getStatus();

        response.status(status).json({
            statusCode: status,
            message: exception.message,
            timestamp: new Date().toISOString(),
        });
    }
}
