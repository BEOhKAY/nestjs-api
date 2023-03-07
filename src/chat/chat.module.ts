import { Module } from '@nestjs/common';
import { ChatGateway } from './gateway/chat.gateway';
import { ConversationService } from './service/conversation.service';

@Module({
  providers: [ChatGateway, ConversationService],
})
export class ChatModule {}
