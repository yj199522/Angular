import { IsOptional, IsString } from "class-validator";

export class EditTaskDto{

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    status?: string;
}