import { userComments } from "./Comments";

export interface AuthUser
{
    Login : string;
    Password : string;
}
export interface User {
    id: string;
    login: string;
    email : string;
    usertoken: string;
    isAdmin: boolean;
  }
  export interface registerUser {
      Login : string;
      Email : string;
      Password : string;
      ConfirmPassword : string;
      FirstName : string;
      LastName : string;
      BirthDate : Date;
  }
  export interface completeUser
  {
    id : string;
    login : string;
    email : string;
    password : string;
    firstName : string;
    lastName : string;
    birthDate : Date;
    isAdmin : boolean;
    comments : userComments[];
  }
  export interface deleteUser
  {
    id : string;
    reason : string;
    disable_Until : Date;
  }