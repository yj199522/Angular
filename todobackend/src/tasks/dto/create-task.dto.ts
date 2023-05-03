import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class createTaskDto{

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsString()
    status: string;
}