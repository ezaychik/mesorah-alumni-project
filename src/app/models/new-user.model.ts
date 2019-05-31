export class NewUser {
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    constructor(fname: string, lname: string, email: string, pword: string) {
        this.email = email;
        this.firstName = fname;
        this.lastName = lname;
        this.password = pword;
    }
}