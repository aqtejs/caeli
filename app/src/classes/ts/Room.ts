import { User } from "./User";

export class Room{
    public readonly name: String;
    private users: User[];

    constructor(name: String, newUser: User = null) {
        this.name = name;

        if(newUser)
            this.users = [...this.users, newUser];
    }

    public addUser(newUser: User) {
        this.users = [...this.users, newUser];
    }
}