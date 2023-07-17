import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    
  }

  selectedRadioValue: string = 'All';
  @Output()
  filterRadioSelection: EventEmitter<string> = new EventEmitter<string>();

  onRadioSelection(){
    this.filterRadioSelection.emit(this.selectedRadioValue);
    console.log(this.selectedRadioValue);
  }

}