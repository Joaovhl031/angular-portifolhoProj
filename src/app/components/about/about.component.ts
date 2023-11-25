import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  @Input()
  about: string = `Bem-vindo ao nosso site de quadros pintados à mão! Aqui, você encontrará
  uma coleção exclusiva de obras de arte únicas e autênticas, cuidadosamente
  criadas por talentosos artistas.
  Agradecemos por visitar nosso site de quadros pintados à
  mão. Esperamos que você encontre uma obra de arte que toque seu coração e
  traga beleza para o seu espaço. Explore nossa coleção e mergulhe no mundo
  da arte autêntica e inspiradora!`;

  ngOnInit(): void {}
}
