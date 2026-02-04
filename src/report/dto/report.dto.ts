import { IsNotEmpty, IsNumber,IsOptional,IsString } from "class-validator";


export class createReportDto{
    @IsNotEmpty()
    @IsString()
    source:string;

    @IsNotEmpty()
    @IsNumber()
    amount:number;
}
export class updateReportDto{
    @IsOptional()
    @IsString()
    source:string

    @IsNumber()
    @IsOptional()
    amount:number

    @IsOptional()
    @IsString()
    type:string
}

export interface CreateReportDto {
    source:string,
    amount:number,
}