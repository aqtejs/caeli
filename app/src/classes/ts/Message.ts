import { User } from "./User";
import { Room } from "./Room";

export class Message{
    public readonly from: User;
    public readonly content: String;
    public readonly to: [User, Room];

    constructor(content: String, from: User,  to: [User, Room] = null){
        this.from = from;
        this.content = content;
        this.to = to;
    }
}