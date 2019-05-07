import { Husband } from './husband';
import { Child } from './child';

export class Family {
    isMarried: boolean;
    husband: Husband;
    hasChildren: boolean;
    children: Child[];
}