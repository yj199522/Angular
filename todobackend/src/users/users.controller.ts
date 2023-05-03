import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { getUser } from 'src/auth/decorator';
import { JWTGuard } from 'src/auth/guard';
import { EditUserDto } from './dto';
import { UsersService } from './users.service';

@UseGuards(JWTGuard)
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get('me')
    getUserDetail(@getUser() user: User){
        return user;
    }

    @Patch('me')
    editUserDetail(@getUser('id') userId: number, @Body() dto: EditUserDto){
        return this.usersService.editUserDetail(userId, dto);
    }
}
