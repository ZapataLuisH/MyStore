import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input ({required: true}) duration: number = 0;
  @Input ({required: true}) message: string = '';

  constructor(){
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    //before and during render
    console.log('Constructor');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('message =>', this.message);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

}
