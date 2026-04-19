/** URLs e textos do site — ajuste o número do WhatsApp para o real. */
const WHATSAPP_NUMBER = '5511999999999';

export const SITE = {
  trainerName: 'Claudino',
  brandLine: 'claudino',
  brandAccent: 'PERSONAL',
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  /** CTA curto no topo (mobile-friendly). */
  ctaNavWhatsApp: 'Quero começar agora',
  /** Promessa + ação — botão principal do hero. */
  ctaHeroWhatsApp:
    'Quero secar a barriga em até 45 dias sem me machucar — WhatsApp agora',
  /** Curiosidade / identificação — botão secundário do hero. */
  ctaHeroSecondary: 'Por que meu corpo não responde mais como antes?',
  /** Fechamento — seção de contato. */
  ctaFooterWhatsApp: 'Quero garantir minha vaga no acompanhamento — WhatsApp',
  instagramUrl: 'https://www.instagram.com/',
  heroImage: '/foto1.jpeg',
  aboutImage: '/foto2.jpeg',
} as const;

export const NAV_LINKS = [
  { id: 'por-que', label: 'Por quê' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'diferencial', label: 'Diferencial' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato' },
] as const;
