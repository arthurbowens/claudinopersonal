import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true,
  templateUrl: './services-section.component.html',
})
export class ServicesSectionComponent {
  readonly items = [
    {
      title: 'Acompanhamento online',
      desc: 'Treino pensado para mulheres 40+, com suporte direto e ajuste semanal — da sua casa ou de onde você estiver.',
    },
    {
      title: 'Acompanhamento presencial',
      desc: 'Correção de movimento e progressão segura em academia ou local combinado — respeitando dores e limitações.',
    },
    {
      title: 'Plano + hábitos (sem milagre)',
      desc: 'Organizamos treino e rotina para emagrecer com segurança e bem-estar — sem promessa absurda e sem culpa.',
    },
  ] as const;
}
