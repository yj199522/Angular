import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditTaskDto, createTaskDto } from './dto';

@Injectable()
export class TasksService {
    constructor(private prismaService: PrismaService) { }

    async getTasks(userId: number, taskStatus?: string) {
        const tasks = await this.prismaService.task.findMany({
            where: {
                userId,
                status: {
                    contains: taskStatus,
                    mode: 'insensitive'
                }
            }
        });
        return tasks;
    }

    async createTask(userId: number, tasks: createTaskDto) {
        const task = await this.prismaService.task.create({
            data: {
                userId,
                ...tasks
            }
        });
        return task;
    }

    async updateTask(userId: number, editTask: EditTaskDto, taskId: number) {
        const task = await this.prismaService.task.findUnique({
            where: {
                id: taskId
            }
        })
        if (!task || task.userId !== userId) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.prismaService.task.update({
            where: {
                id: taskId
            },
            data: { ...editTask }
        });
    }

    async deleteTask(userId: number, taskId: number) {
        const task = await this.prismaService.task.findUnique({
            where: {
                id: taskId
            }
        });
        if (!task || task.userId !== userId) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.prismaService.task.delete({
            where: {
                id: taskId
            }
        });
    }

    async getTaskById(userId: number, taskId: number) {
        const task = await this.prismaService.task.findUnique({
            where: {
                id: taskId
            }
        });
        if (!task || task.userId !== userId) {
            throw new UnauthorizedException('Unauthorized');
        }
        console.log(task);
        return task;
    }
}
