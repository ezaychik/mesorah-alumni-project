export enum SearchTerms {
    Name = 'NAME',
    YearGraduated = 'YEAR',
    Location = 'LOCATION',
    Occupation = 'OCCUPATION'
}
export class Search {
    type: SearchTerms;
    public terms: any;
    constructor(type: SearchTerms, terms: any) {
        this.type = type;
        this.terms = terms;
    }
}
