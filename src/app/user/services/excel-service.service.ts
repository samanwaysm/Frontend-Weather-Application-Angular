import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {
  parseExcel(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          const bstr: string = e.target.result;
          const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
          const wsname: string = wb.SheetNames[0];
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
          resolve(data);
        } catch (error :any) {
          reject(`Error parsing Excel file: ${error.message}`);
        }
      };
      reader.onerror = (error: any) => reject(`Error reading file: ${error.message}`);
      reader.readAsBinaryString(file);
    });
  }
}
