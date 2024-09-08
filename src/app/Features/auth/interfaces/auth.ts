import { FormControl, Validators } from "@angular/forms";


export interface Auth {
}

export interface IsignIn {
    email: string,
    password: string,
}


export class InputErrorStateMatcherExample {
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}