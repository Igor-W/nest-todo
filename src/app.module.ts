import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { TodoitemsModule } from './todoitems/todoitems.module';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/todo';

@Module({
  imports: [
    MongooseModule.forRoot(databaseUrl),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'browser'),
    }),
    TodoitemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
