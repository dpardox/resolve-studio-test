import { User } from './user.interface';

export interface Company {
  id?: number;
  user_id: number;
  name: string;
  address: string;
  phone: string;
  created_at?: Date;
  updated_at?: Date;
  user?: User;
}
