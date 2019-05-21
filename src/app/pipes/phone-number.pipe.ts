import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phoneNumber: any, country: any): any {
    try {
      const formattedPhoneNumber = parsePhoneNumber(phoneNumber + '', country as CountryCode);
      return formattedPhoneNumber.formatNational();
    } catch (error) {
      console.log(error);
      return phoneNumber;
    }
  }

}
