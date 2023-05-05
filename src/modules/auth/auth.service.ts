import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDTO } from '../user/dto';
import { AppError } from 'src/common/constants/errors';
import { UserLoginDTO } from './dto';
import * as bcrypt from 'bcrypt';
import { AuthUserResponse } from './response';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,

    ) { }

    async registerUsers(dto: CreateUserDTO): Promise<AuthUserResponse> {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email)
            if (existUser) throw new BadRequestException(AppError.USER_EXIST)
            await this.userService.createUser(dto)
            return await this.userService.publicUser(dto.email)
        } catch (e) {
            // Обработка ошибок
            // Вместо выброса нового исключения, возвращаем ошибку с нужным статус кодом
            throw new BadRequestException('Ro`yxatga olishda xatolik yuz berdi: ' + e.message)
        }
    }


    async loginUser(dto: UserLoginDTO): Promise<AuthUserResponse> {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email)
            if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST)
            const validatePassword = await bcrypt.compare(dto.password, existUser.password)
            if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA)
            return await this.userService.publicUser(dto.email)

        } catch (e) {
            throw new Error(e)
        }
    }
}
