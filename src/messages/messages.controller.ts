import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { createMessageDto } from './dtos/create.message.dto';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;
    constructor() {
        // DONT DO THIS ON REAL APP
        // USE DEPENDENCY INJECTION
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: createMessageDto){
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param() id: string){
        return this.messagesService.findOne(id);
    }
}
