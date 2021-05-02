import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './company';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(company:Company[],searchtext:string):Company[] {
    if(!company || !searchtext){
      return company;

    }
    return company.filter(data => 
      data.userName.toLocaleLowerCase().includes(searchtext.toLocaleLowerCase()));
  }


}
