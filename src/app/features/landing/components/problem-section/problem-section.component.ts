import { Component } from '@angular/core';

@Component({
  selector: 'app-problem-section',
  standalone: true,
  templateUrl: './problem-section.component.html',
})
export class ProblemSectionComponent {
  readonly pains = [
    'Depois dos 40 parece que nada funciona — e a balança não mexe como antes',
    'A mesma coisa que você fazia antes não dá mais resultado',
    'Metabolismo lento e aquela sensação de “estou fazendo tudo errado”',
    'Dores no joelho ou na lombar — e medo de treinar e piorar',
    'Falta de energia no dia a dia; tudo parece mais pesado',
    'Já tentou várias vezes, desistiu, e culpa a si mesma',
  ] as const;
}
