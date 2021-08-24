import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(number: any) {
    let  formatedNumber = "";
    
    for (let i = 0; i < number.length; i++) {
      formatedNumber = formatedNumber + number[i];
      if ((i+1)%3 === 0 && i !== 0){
        formatedNumber = formatedNumber + '-';
      }
    }
    return formatedNumber;
  }

}
