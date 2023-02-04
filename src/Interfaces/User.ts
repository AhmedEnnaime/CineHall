export interface User {
  id?: number;
  fname: string;
  lname: string;
  email: string;
  role: number;
  key: string | null;
  password?: string | null;
}

export interface UserLog {
  email: string;
  password: string;
}
