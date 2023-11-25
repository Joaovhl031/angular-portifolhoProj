import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass'],
})
export class FormsComponent implements OnInit {
  enviarEmail() {
    return alert('Enviado com sucesso!');
  }

  ngOnInit(): void {}
}
