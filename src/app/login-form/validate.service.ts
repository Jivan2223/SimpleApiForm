import { AbstractControl } from "@angular/forms";

export class ValidateService{

    static validUsername(control: AbstractControl){
        return new Promise((res)=>{
            if(control.value !== 'admin'){
                res({ invalidUsername:true });
            }
            else{
                res(null);
            }
        })
    }

    static validPassword(control: AbstractControl){
        return new Promise((res)=>{
            if(control.value !== 'pass'){
                res({ invalidPassword:true });
            }
            else{
                res(null);
            }
        })
    }

    static passwordShouldMatch(control:AbstractControl){
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword?.value !== confirmPassword?.value){
            return { passwordShouldMatch: true };
        }
        return null;
    }
}