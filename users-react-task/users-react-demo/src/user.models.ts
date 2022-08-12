export enum UserStatus {
    Active=1, Suspended, Deactivated
}

export enum UserRole {
    USER, ADMIN
}

export enum UserGender {
    MALE, FEMALE
}

export class User {
    static nextId = 0;
    id = ++User.nextId;
    constructor (
        public firstName: string,
        public lastName: string,
        public userame: string,
        public password: string,
        public gender: UserGender,
        public picUrl: string,
        public description: string,
        public role = UserRole.USER,
        public status = UserStatus.Active,
    ) {}
}