export interface User {
  id?: number;
  name: string;
  lastname: string;
  phone: string;
  birthday: Date;
  email: string;
  email_verified_at?: Date;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
}
