export type Language = 'fr' | 'en' | 'es' | 'zh';

export const translations = {
  fr: {
    nav: {
      services: "Services",
      partners: "Partenaires",
      contact: "Contactez-nous",
    },
    maintenance: {
      title: "Site en maintenance",
      subtitle: "Nous travaillons actuellement sur notre site pour vous offrir une meilleure expérience. Merci de votre patience !",
      needHelp: "Besoin d'assistance ?",
      helpText: "N'hésitez pas à nous contacter pendant cette période de maintenance.",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      services: "Services",
      partners: "Partners",
      contact: "Contact Us",
    },
    maintenance: {
      title: "Site Under Maintenance",
      subtitle: "We are currently working on our site to provide you with a better experience. Thank you for your patience!",
      needHelp: "Need assistance?",
      helpText: "Feel free to contact us during this maintenance period.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      partners: "Socios",
      contact: "Contáctenos",
    },
    maintenance: {
      title: "Sitio en mantenimiento",
      subtitle: "Actualmente estamos trabajando en nuestro sitio para ofrecerle una mejor experiencia. ¡Gracias por su paciencia!",
      needHelp: "¿Necesita ayuda?",
      helpText: "No dude en contactarnos durante este período de mantenimiento.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  zh: {
    nav: {
      services: "服务",
      partners: "合作伙伴",
      contact: "联系我们",
    },
    maintenance: {
      title: "网站维护中",
      subtitle: "我们正在努力改进我们的网站，为您提供更好的体验。感谢您的耐心等待！",
      needHelp: "需要帮助？",
      helpText: "在维护期间，请随时与我们联系。",
    },
    footer: {
      rights: "版权所有。",
    },
  },
};

export function detectLanguage(): Language {
  const browserLang = navigator.language.split('-')[0];
  
  if (browserLang === 'en') return 'en';
  if (browserLang === 'es') return 'es';
  if (browserLang === 'zh') return 'zh';
  
  return 'fr'; // Default to French
}

export function getTranslations(lang: Language) {
  return translations[lang];
}
