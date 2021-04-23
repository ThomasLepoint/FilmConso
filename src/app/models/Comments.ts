export interface userComments
{
    id : string;
    title : string;
    content : string;
    value : number;
    movieId : string;
    movieTitle : string;
    created_at : Date;
}
export interface updateComment{
    id : string;
    title : string;
    content : string;
    value : number;
}
export interface addComment{
    movieId : string;
    userId : string;
    title : string;
    content : string;
    value : number;   
}