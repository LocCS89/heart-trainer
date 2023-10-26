export interface UserProfile {
  email: string;
  password:string;
  fullName:string;
  gender: EGender;
  height: number;
  weight: number;
  age: number;
}

export enum EGender {
  M,
  F
}
