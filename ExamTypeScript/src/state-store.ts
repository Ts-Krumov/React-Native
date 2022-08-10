/* eslint-disable no-useless-escape */

import { User } from "./shared-types.js";
import { ValidationConfig, Validators } from "./validators.js";

export interface AppState {
    editedUser: User | undefined;
    allUsers: User[],
    userFormValidationConfig: ValidationConfig<User>,
    userFormErrors: string[],
}

export const AppStateStore: AppState = {
    editedUser: undefined,
    allUsers: [],
    userFormValidationConfig: {
        email:[Validators.required(),Validators.pattern(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/)],
        password: [Validators.required(),Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"), Validators.len(8,50)],
        firstName: [Validators.required(), Validators.len(2,15)],
        lastName: [Validators.required(), Validators.len(2,15)],
        username: [Validators.required(), Validators.len(5,15)],
        description: [Validators.required(), Validators.len(1,512)],
    },
    userFormErrors: [],
}