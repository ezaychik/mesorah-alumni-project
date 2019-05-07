import { PersonalInfo } from './personalDetails/personalInfo';
import { Address } from './personalDetails/address';
import { ContactInfo } from './personalDetails/contactInfo';
import { Family } from './family/family';
import { TefilaRequest } from '../tefilaRequest';


export class Alumna {
  personalInfo: PersonalInfo;
  address: Address;
  contact: ContactInfo;
  family: Family;
  isSignedUpForTefilaRequests: boolean;
  tefilos: TefilaRequest[];
}
