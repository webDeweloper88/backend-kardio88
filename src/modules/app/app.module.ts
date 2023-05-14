import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import configuretions from '../../configurations'
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/models/user.model';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from '../token/token.module';
import { WatchlistModule } from '../watchlist/watchlist.module';
import { Watchlist } from '../watchlist/models/watchlist.model';
import { Bemors } from '../bemor/models/bemor.model';
import { BemorModule } from '../bemor/bemor.module';




@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuretions]
  }),
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService) => ({
      dialect: "postgres",
      host: configService.get('db_host'),
      port: configService.get('db_port'),
      username: configService.get('db_user'),
      password: configService.get('db_password'),
      database: configService.get('db_name'),
      synchronize: true,
      autoLoadModels: true,
      models: [User, Watchlist, Bemors]

    })

  }),
    UserModule,
    AuthModule,
    TokenModule,
    WatchlistModule,
    BemorModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
