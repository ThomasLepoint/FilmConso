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