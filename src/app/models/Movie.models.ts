import { casting, insertCasting } from "./Casting.model";
import { person } from "./person.model";


export class Movie {
    id : string;
    title : string;
    synopsis : string;
    releaseDate : Date;
    scriptWriterID : string;
    directorId : string;
}
export class completeMovie {
    id : string;
    title : string;
    synopsis : string;
    releaseDate : Date;
    scriptWriter : person;
    director : person;
    casting : casting[];
    comments : Comment[];
}
export class insertMovie
{
    id : string;
    title : string;
    synopsis : string;
    releaseDate : Date;
    scriptWriterId : string;
    directorId : string;
    casting : insertCasting[];
}