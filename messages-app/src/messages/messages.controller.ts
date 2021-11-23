import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import {createMessageDto} from "./dtos/create-message.dto";

@Controller('/api/v1/messages')
export class MessagesController {
  @Get()
  getAllMessages() {}

  @Post()
  createMessage(@Body() body: createMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
  }
}
