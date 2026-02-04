import { Injectable, NotFoundException } from '@nestjs/common';
import { data, DataType } from 'src/data';
import { createReportDto, updateReportDto } from './dto/report.dto';

@Injectable()
export class ReportService {
  getAll(type: string):DataType[] {
    const res = data.filter((i) => i.type === type);
    return res;
  }

  getById({ type, id }: { type: string; id: string }) {
    const res = data.filter((i) => i.type === type).find((i) => i.id === id);
    if (!res) {
      throw new NotFoundException();
    }
    return res;
  }
  create({ Body, type }: { Body: createReportDto; type: string }) {
    const Id = Math.random() * 1000;

    const newReport = {
      source: Body.source,
      amount: Body.amount,
      id: Id.toString(),
      type: type === 'income' ? 'income' : 'expense',
      create_At: new Date(),
      updated_At: new Date(),
    };
    data.push(newReport);
    return data;
  }

  update({ Body, id }: { Body: updateReportDto; id: string }) {
    const report = data.find((i) => i.id === id);

    if (!report) {
      throw new NotFoundException('Report not found');
    }
    report.amount = Body.amount;
    report.source = Body.source;
    report.type = Body.type;
    return data;
  }

  delete(id: string) {
    const report = data.findIndex((i) => {
      i.id === id;
    });
    if (!report) {
      throw new NotFoundException('data not found');
    }
    data.splice(report, 1);
  }
}

