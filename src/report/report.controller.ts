import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post ,Put} from '@nestjs/common';
import { data, DataType} from '../data';
import { ReportService } from './report.service';
import { createReportDto,updateReportDto } from './dto/report.dto';

@Controller('report/:type')
export class ReportController {
    constructor(private readonly reportService:ReportService){}

  @Get()
  getAllRepotr(@Param('type') type: string):DataType[]{
    return this.reportService.getAll(type)
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    console.log({ id, type });
    return this.reportService.getById({type,id})
  }

  @Post()
  createReport(
    @Body() Body : createReportDto, 
    @Param('type') type :string
) { 
    return this.reportService.create({Body,type})
  }

  @Put(':id')
  updateReport(
    @Body() Body:updateReportDto,
    @Param("id")id:string
  ){
    return this.reportService.update({Body,id})
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReport(
    @Param('id')id:string,
  ){
   return this.reportService.delete(id)
  } 
}
