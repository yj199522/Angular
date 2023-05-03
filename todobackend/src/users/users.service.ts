import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) {}

    async editUserDetail(userId: number, dto: EditUserDto){
        const user = await this.prismaService.user.update({
            where: {
                id: userId,
            },
            data: {...dto}
        });
        delete user.hashedPassword;
        return user;
    }
}
