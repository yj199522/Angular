import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { getUser } from 'src/auth/decorator';
import { JWTGuard } from 'src/auth/guard';
import { EditTaskDto, createTaskDto } from './dto';
import { TasksService } from './tasks.service';

@UseGuards(JWTGuard)
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    @Get()
    getAllTasks(@getUser('id') userId: number){
        return this.tasksService.getTasks(userId);
    }

    // @Get(':id')
    // getTaskById(@getUser('id') userId: number, @Param('id', ParseIntPipe) taskId: number){
    //     return this.tasksService.getTaskById(userId, taskId);
    // }

    @Get(":status")
    getTasksByStatus(@getUser('id') userId: number, @Param('status') taskStatus: string){
        return this.tasksService.getTasks(userId, taskStatus);
    }

    @Post()
    createTask(@getUser('id') userId: number, @Body() tasks: createTaskDto){
        return this.tasksService.createTask(userId, tasks);
    }

    @Patch(':id')
    updateTask(@getUser('id') userId: number, @Body() editTask: EditTaskDto, @Param('id', ParseIntPipe) taskId: number){
        return this.tasksService.updateTask(userId, editTask, taskId);
    }

    @Delete(':id')
    deleteTask(@getUser('id') userId: number, @Param('id', ParseIntPipe) taskId: number){
        return this.tasksService.deleteTask(userId, taskId);
    }
}
