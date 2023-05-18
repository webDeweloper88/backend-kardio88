
import { Controller, Post, Body, Get, Catch, ArgumentsHost, Param, Put } from '@nestjs/common';
import { CreateBemorDto, UpdateBemorDto } from './dto/index';
import { BemorService } from './bemor.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BemorResponse } from './response';
import { Bemors } from './models/bemor.model';


@Catch()
@Controller('bemor')
export class BemorController {
    constructor(private readonly bemorService: BemorService) { }

    @ApiTags('Bemor')
    @ApiResponse({ status: 201, type: CreateBemorDto })
    @Post('create_bemor')
    async register(@Body() dto: CreateBemorDto): Promise<CreateBemorDto> {
        return this.bemorService.createBemor(dto);
    }

    @ApiTags('Bemor')
    @ApiResponse({ status: 201, type: BemorResponse })
    @Get('public_bemor')
    async publicBemor(): Promise<BemorResponse[]> {
        return this.bemorService.publicBemor();
    }

    @ApiTags('Bemor')
    @ApiResponse({ status: 201, type: Bemors })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.bemorService.findOne(+id);
    }

    @ApiTags('Bemor')
    @ApiResponse({ status: 201, type: Bemors })
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateBemorDto: UpdateBemorDto) {
        return this.bemorService.update(+id, updateBemorDto);
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
