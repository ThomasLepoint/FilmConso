export interface AuthUser
{
    login : string;
    password : string;
}
export interface User {
    id: number;
    login: string;
    email : string;
    usertoken: string;
    isAdmin: boolean;
  }