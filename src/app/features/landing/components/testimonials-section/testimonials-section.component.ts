import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  templateUrl: './testimonials-section.component.html',
})
export class TestimonialsSectionComponent {
  readonly quotes = [
    {
      text: 'A barriga diminuiu e eu voltei a ter energia para trabalhar e cuidar da casa — sem me sentir destruída depois do treino.',
      author: 'Aluna 40+',
    },
    {
      text: 'Pensei que não dava mais resultado depois dos 40. Hoje eu entendo meu corpo e treino sem medo de machucar o joelho.',
      author: 'Aluna 40+',
    },
    {
      text: 'O acompanhamento no WhatsApp faz diferença. Não é treino jogado: ele ajusta quando eu falo que estou com dor ou sem tempo.',
      author: 'Aluna 40+',
    },
  ] as const;
}
