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
import { Doctor } from '../doctor/models';
import { DoctorModule } from '../doctor/doctor.module';
import { Department } from '../department/models';
import { DepartmentModule } from '../department/department.module';
import { Labaratory } from '../labaratory/model/labaratory.model';
import { LabaratoryModule } from '../labaratory/labaratory.module';
import { Glyukoza } from '../glyukoza/models/model.glyukoza';
import { GlyukozaModule } from '../glyukoza/glyukoza.module';
import { Bioximik } from '../bioximik/model/model.bioximik';
import { BioximikModule } from '../bioximik/bioximik.module';
import { Analiz } from '../analiz/model/model.analiz';
import { AnalizModule } from '../analiz/analiz.module';
import { Qon } from '../qon/model/model.qon';
import { QonModule } from '../qon/qon.module';
import { Indeks } from '../indeks/model/model.indeks';





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
      models: [User, Watchlist, Bemors, Doctor, Department, Labaratory, Glyukoza, Bioximik, Analiz, Qon, Indeks]

    })

  }),
    UserModule,
    AuthModule,
    TokenModule,
    WatchlistModule,
    BemorModule,
    DoctorModule,
    DepartmentModule,
    LabaratoryModule,
    GlyukozaModule,
    BioximikModule,
    AnalizModule,
    QonModule,
    Indeks,

  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
