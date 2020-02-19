import { User } from "./User";

export class Message{
    public readonly from: User;
    public readonly content: String;
    public readonly to: [User, String];

    constructor(from: User, content: String, to: [User, String] = null){
        this.from = from;
        this.content = content;
        this.to = to;
    }
}