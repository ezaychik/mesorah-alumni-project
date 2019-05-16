export enum SearchType {
    Name = 'NAME',
    YearGraduated = 'YEAR',
    Location = 'LOCATION',
    Occupation = 'OCCUPATION'
}
export class Search {
    type: SearchType;
    public terms: any;
    constructor(type: SearchType, terms: any) {
        this.type = type;
        this.terms = terms;
    }
}
export class SearchResult {
    public firstName: string;
    public lastName: string;
}
