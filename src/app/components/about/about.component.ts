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
  criadas por talentosos artistas. Trabalhamos em estreita colaboração com
  nossos clientes para entender suas ideias e transformá-las em realidade,
  criando um quadro personalizado que será um tesouro para toda a vida.
  Nossa equipe está empenhada em fornecer um excelente atendimento ao
  cliente. Estamos aqui para ajudar em todas as etapas da sua jornada de
  compra, desde a seleção do quadro perfeito até a entrega segura em sua
  porta. Valorizamos sua confiança em nós e faremos tudo ao nosso alcance
  para garantir uma experiência de compra tranquila e satisfatória.
  Agradecemos por visitar nosso site de e-commerce de quadros pintados à
  mão. Esperamos que você encontre uma obra de arte que toque seu coração e
  traga beleza para o seu espaço. Explore nossa coleção e mergulhe no mundo
  da arte autêntica e inspiradora!`;

  ngOnInit(): void {}
}
