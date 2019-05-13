export class TefilaRequest {
    public dateOfRequest: string;
    public name: string;
    public requester: string;
    public description: string;
    constructor(date, name, requester, desc) {
        this.dateOfRequest = date;
        this.name = name;
        this.requester = requester;
        this.description = desc;
    }
}
