import { PersonalInfo as Personal } from './personalDetails/personalInfo';
import { Address } from './personalDetails/address';
import { ContactInfo } from './personalDetails/contactInfo';
import { Family } from './family/family';
import { TefilaRequest } from '../tefilaRequest';
import { ProfessionalInfo as Professional } from './personalDetails/professionalInfo';


export class Alumna {
  id: number;
  loginName: string;
  personal: Personal;
  address: Address;
  contact: ContactInfo;
  family: Family;
  professional: Professional;
  isSignedUpForTefilaRequests: boolean;
  tefilos: TefilaRequest[];
}
