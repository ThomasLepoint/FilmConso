export interface AuthUser
{
    login : string;
    password : string;
}
export interface User {
    id: string;
    login: string;
    email : string;
    usertoken: string;
    isAdmin: boolean;
  }
  export interface registerUser {
      login : string;
      email : string;
      password : string;
      confirmedPassword : string;
      firstname : string;
      lastname : string;
      birthdate : Date;
  }