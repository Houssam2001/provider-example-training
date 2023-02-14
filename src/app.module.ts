import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsService } from './contacts/contacts.service';
import { LoggerMidleware } from './logger.middleware';

@Module({
  imports: [ContactsModule],
  controllers: [AppController],
  providers: [AppService,ContactsService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
   consumer.apply(LoggerMidleware).forRoutes(ContactsController);
  }

}
