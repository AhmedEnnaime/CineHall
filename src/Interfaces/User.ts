interface User {
  fname: string;
  lname: string;
  email: string;
  role: number;
  key: string;
  password?: string | null;
}

export default User;
