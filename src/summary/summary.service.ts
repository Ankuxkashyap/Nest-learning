import { Injectable } from '@nestjs/common';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
    constructor(private readonly reportService:ReportService){}
    getSummry(){
        const totalIncomeData = this.reportService.getAll("income")
        const totalExpanseData = this.reportService.getAll("expense")
        
        const totalExpanse =  totalExpanseData.reduce((sum, item)=>sum + Number(item.amount) ,0)
        const totalIncome = totalIncomeData.reduce((sum, item)=>sum + Number(item.amount) ,0)

        const  res  = totalIncome - totalExpanse;

        return res;
    }
}
