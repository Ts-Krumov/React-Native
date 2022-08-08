import { Post } from "./posts.js";
import { FormState, ValidationConfig, Validators } from "./validate.js";

export interface AppState {
    editedPost: Post | undefined;
    allPosts: Post[],
    postFormValidationConfig: ValidationConfig<Post>,
    postFormErrors: string[],
    postFormState: FormState<Post>
}

export const AppStateStore: AppState = {
    editedPost: undefined,
    allPosts: [],
    postFormValidationConfig: {
        title:[Validators.required(),Validators.pattern('[A-Za-z]{3,12}')],
        authorId:[Validators.required(),Validators.pattern('^[1-9]{1}')],
        imageUrl:[Validators.required()],
        // eslint-disable-next-line no-useless-escape
        tags: [Validators.required(), Validators.pattern('[a-zA-Z]+([,\s]+[a-zA-Z]+)+')]
    },
    postFormErrors: [],
    postFormState: {}
}