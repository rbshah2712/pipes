import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {
 
  transform(value: any,filterstring :string){
    if(value.length === 0 || filterstring === ''){
      return value;
    }
  

  const students = [];
  for(const stu of value){
    if(stu['firstname'] === filterstring){
      students.push(stu);
    }
  }
  return students;

}

}
