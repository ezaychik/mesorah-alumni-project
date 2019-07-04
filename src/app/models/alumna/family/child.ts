export enum Gender {
    Male = 'MALE',
    Female = 'FEMALE'
}
export class Child {
    name: string;
    gender: Gender;
    birthday: Date;
    constructor(name, gender, birthday) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
    }
}
