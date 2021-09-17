import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Post()
  create(@Body() body: CreateMessageDto) {
    return body;
  }

  @Get()
  getAll() {
    return { message: 'get all' };
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return { id };
  }
}
