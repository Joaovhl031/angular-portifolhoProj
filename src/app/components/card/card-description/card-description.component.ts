import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.sass']
})
export class CardDescriptionComponent implements OnInit{
  @Input()
  status: string =''

  ngOnInit(): void {

  }

}
