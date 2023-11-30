import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit{

  @Input()
  image=''
  @Input()
  price = 'R$ 25,00'
  @Input()
  status: string ='1 DISPONÍVEL'

  constructor(){

}
  ngOnInit(): void {

  }
}
