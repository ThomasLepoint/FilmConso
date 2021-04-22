import { AbstractControl, ValidatorFn } from "@angular/forms";
import { User } from "src/app/models/User.models";
import { UserService } from "src/app/services/user.service";

export function checkLogin() : ValidatorFn | null{
    let _service : UserService
    let users : User[];

    if(_service)
    _service.getUsers().subscribe((data : User[]) => {users = data}
    );
    return(control : AbstractControl) => {
        if(users && users.find(user=>user['Login'] === control.value)) return {myError : 'Login déjà pris'}
        return null;
    }
}