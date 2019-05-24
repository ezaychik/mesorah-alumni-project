export class TefilaRequest {
    public dateOfRequest: string;
    public name: string;
    public requester: string;
    public requesterId: number;
    public description: string;
    constructor(date, name, requester, desc, id) {
        this.dateOfRequest = date;
        this.name = name;
        this.requester = requester;
        this.description = desc;
        this.requesterId = id;
    }
}
