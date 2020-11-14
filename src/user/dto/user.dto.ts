import { IsNumber, IsString } from "class-validator";

export class UserDTO {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    email: string;
    
    @IsString()
    password: string;

    @IsNumber()
    role: number;
}