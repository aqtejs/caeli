export class User{
    private name: String;
    private id: String;
    private account: Number;

    constructor(name: String, id: String, account: Number = null){
        this.name = name;
        this.id = id;
        this.account = account;
    }

    public getName(): String {
        return this.name;
    }

    public setName(name: String){
        this.name = name;
    }

    public getId(): String{
        return this.id;
    }

    public setId(id: String){
        this.id = id;
    }

    public getAccount(): Number{
        return this.account;
    }
}