export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber?: string;
}

