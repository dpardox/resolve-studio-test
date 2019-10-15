import { Company } from './company.interface';

export interface Source {
  id?: number;
  company_id?: number;
  company?: Company | number;
  name: string;
  file?: File;
  separator?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface SourceData {
  indicators: { sessions: number, conversions: number };
  campaigns: SourceItem[];
  sources: SourceItem[];
}

export interface SourceItem {
  name: string;
  session: number;
  conversion: number;
}
