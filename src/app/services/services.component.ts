import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      uniqueId: 'item1',
      title: "Marketing digital 365º",
      imageSrc: "assets/pina.png",
      imageAlt: "Piña refrescante para inspirar ideas frescas",
      description: "Desarrollamos estrategias integrales de marketing digital para impulsar tu presencia online. Desde la planificación estratégica hasta la ejecución táctica, con nuestro enfoque conseguirás destacar bajo el competitivo sol digital."
    },
    {
      uniqueId: 'item2',
      title: "Creación de campañas multimedia",
      imageSrc: "assets/mango.png",
      imageAlt: "Un mango maduro para campañas multimedia jugosas",
      description: "Convierte tu mensaje en una jugosa experiencia multimedia. Nuestro equipo experto crea campañas que asombran, desde vídeos envolventes hasta gráficos impactantes, asegurando que tu mensaje brille en todos los canales."
    },
    {
      uniqueId: 'item3',
      title: "SEO y estrategia de contenidos",
      imageSrc: "assets/coco.png",
      imageAlt: "Coco duro de pelar para una estrategia sólida de SEO y contenidos",
      description: "Le damos mucho al coco para optimizar tu presencia online y atraer a tu audiencia objetivo. A través de estrategias de SEO y una planificación de contenidos efectiva, mejoramos tu visibilidad y relevancia, garantizando su impacto."
    },
    {
      uniqueId: 'item4',
      title: "Diseño gráfico y web",
      imageSrc: "assets/platano.png",
      imageAlt: "Identidad visual sabrosa como un plátano maduro",
      description: "Dotamos a tu marca de una identidad visual atractiva y sugerente. Desde el diseño de logotipos hasta el desarrollo web, creamos experiencias visuales tan coherentes como cautivadoras. ¡Haz que tu marca sea la fruta más codiciada!"
    }
  ];
}