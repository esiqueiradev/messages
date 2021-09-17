import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  @Post()
  create(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get()
  getAll() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
