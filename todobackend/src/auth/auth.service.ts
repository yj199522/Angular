import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private config: ConfigService,private prismaService: PrismaService, private jwtService: JwtService) { }

    async login(dto: AuthDto) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: dto.email,
            }
        });
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        const passwordMatch = await argon.verify(user.hashedPassword, dto.password);
        if (!passwordMatch) {
            throw new UnauthorizedException('Incorrect password');
        }
        return this.signToken(user.id, user.email);
    }

    async register(dto: AuthDto) {
        const hashedPassword = await argon.hash(dto.password);
        try {
            const user = await this.prismaService.user.create({
                data: {
                    email: dto.email,
                    hashedPassword,
                }
            });
            return this.signToken(user.id, user.email);
        } catch (err) {
            if (err.code === 'P2002') {
                throw new UnauthorizedException('User already exists');
            }
            return err;
        }
    }

    async signToken(userId: number, email: string): Promise<{access_token: string}> {
        const payload = { sub: userId, email };
        const token = await this.jwtService.signAsync(payload,{expiresIn: '1d', secret: this.config.get('JWT_SECRET')});
        return {access_token: token}
    }
}
