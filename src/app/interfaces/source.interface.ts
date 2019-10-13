import { Company } from './company.interface';

export interface Source {
  id?: number;
  company_id?: number;
  company?: number | Company;
  name: string;
  file?: File;
  separator?: string;
  created_at?: Date;
  updated_at?: Date;
}
