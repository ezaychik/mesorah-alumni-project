import { PersonalInfo } from './personalDetails/personalInfo';
import { Address } from './personalDetails/address';
import { ContactInfo } from './personalDetails/contactInfo';
import { Family } from './family/family';
import { TefilaRequest } from '../tefilaRequest';
import { ProfessionalInfo } from './personalDetails/professionalInfo';


export class Alumna {
  id: number;
  loginName: string;
  personalInfo: PersonalInfo;
  address: Address;
  contact: ContactInfo;
  family: Family;
  profession: ProfessionalInfo;
  isSignedUpForTefilaRequests: boolean;
  tefilos: TefilaRequest[];
}
