import { AbstractControl, ValidatorFn } from "@angular/forms";

export function confirmPassword() : ValidatorFn | null{
    return(control : AbstractControl) => {
        if(control.get('Password') && control.get('ConfirmPassword'))
        {
            const password : string = control.get('Password').value
            if(password != control.value) return {myError : 'Les mots de passes ne correspondent pas'}
        }
        return null;
    }
}
