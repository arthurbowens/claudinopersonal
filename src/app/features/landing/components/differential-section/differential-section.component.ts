import { Component } from '@angular/core';

@Component({
  selector: 'app-differential-section',
  standalone: true,
  templateUrl: './differential-section.component.html',
})
export class DifferentialSectionComponent {
  readonly points = [
    'Treino adaptado para o corpo depois dos 40 — sem pressão de “performance” de quem tem 20 anos',
    'Prioridade em segurança: menos dor no joelho e na lombar, mais confiança para treinar',
    'Metas realistas em ciclos de até 45 dias — com ajustes e conversa franca no WhatsApp',
    'Sem dieta maluca: estratégia que você consegue manter na correria do dia a dia',
  ] as const;
}
