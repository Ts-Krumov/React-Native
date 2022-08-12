export enum ToDoStatus {
    Active = 1, Completed, Canceled
}

export class ToDo {
    static nextId = 0;
    id = ++ToDo.nextId;
    constructor(
        public text: string,
        public deadline = new Date().toDateString(),
        public status = ToDoStatus.Active,
    ) {}
}