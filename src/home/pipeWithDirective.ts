
import {Component, View, CORE_DIRECTIVES,Pipe, PipeTransform} from 'angular2/angular2';
import {Location, RouteConfig, RouterLink, Router} from 'angular2/router';
let pipesTemplate=require('./pipesTemplate.html');

// We use the @Pipe decorator to register the name of the pipe
@Pipe({
  name: 'tempConvert'
})
// The work of the pipe is handled in the tranform method with our pipe's class
class TempConvertPipe implements PipeTransform {
  transform(value: number, args: any[]) {
    if(value && !isNaN(value) && args[0] === 'celsius') {
      var temp = (value - 32) * 5/9;
      var places = args[1];
      return temp.toFixed(places) + ' C';
    }

    return;
  }
}

@Component({
  selector: 'Pipe-directive'
})
@View({
  template : pipesTemplate,
  pipes: [TempConvertPipe]
})

export class PipeWithDirective {
  date: Date;
  grade: number;
  rating: number;
  temperature: number;
  constructor() {
    //Dates pipe
    this.date = new Date();
    //Decimals/Percentages
    this.grade = 0.99;
    this.rating = 9.1243;
    //Custom Pipes - Convert Temperature
    this.temperature = 85;
  }
}