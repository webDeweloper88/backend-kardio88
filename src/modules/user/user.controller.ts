import { Body, Controller, Patch, UseGuards, Req, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';



@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @ApiTags('API')
    @ApiResponse({ status: 200, type: UpdateUserDTO })
    @UseGuards(JwtAuthGuard)
    @Patch()
    updateUser(@Body() updateDTO: UpdateUserDTO, @Req() request): Promise<UpdateUserDTO> {
        const user = request.user

        return this.userService.updateUser(user.email, updateDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteUser(@Req() request): Promise<boolean> {
        const user = request.user
        return this.userService.deleteUser(user.email)
    }

}
