import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/')
    showAll() {
        return this.userService.findAll();
    }
    
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: string) {
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() data: UserDTO) {

         return this.userService.create(data);
    }

    @Put(':id')
    update(@Param() id: string, data) {
        return this.userService.update(id,data);
    }
    
}
