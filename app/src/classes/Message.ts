import { User } from "./User";
import { Room } from "./Room";

export class Message{
    public readonly from: User;
    public readonly content: String;
    public readonly to: [User, Room];

    constructor(from: User, content: String, to: [User, Room] = null){
        this.from = from;
        this.content = content;
        this.to = to;
    }
}