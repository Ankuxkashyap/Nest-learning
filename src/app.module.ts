import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportController } from './report/report.controller';
import { ReportModule } from './report/report.module';
import { SummaryModule } from './summary/summary.module';

@Module({
  imports: [ReportModule, SummaryModule],
  controllers: [AppController, ReportController],
  providers: [AppService],
})
export class AppModule {}
