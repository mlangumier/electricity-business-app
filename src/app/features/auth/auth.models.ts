export interface IUserAuth {
  accessToken: string;
  user: IUser;
}

export interface IUser {
  id: string; //TODO: remove
  email: string;
  role: string;
  profile: IProfile;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  avatar?: string;
  preferences: string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date; // Necessary for backend to verify user's age >= 18yo
  phoneNumber?: string;
}