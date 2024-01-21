import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noticias: any[] = [
    {
      title: 'Generación técnologica',
      description: 'La Generación Digital: Los niños utilizan la tecnología de manera sorprendente desde edades tempranas',
      imagePath: '../../assets/kids.png'
    },
    {
      title: 'Tendencias de Marketing para el 2024',
      description: 'El panorama del marketing experimenta una transformación notable, impulsada por avances tecnológicos ' +
          'y cambios en el comportamiento del consumidor. ' +
          'Aquí te presentamos algunas de las tendencias más destacadas que definen el mundo del marketing este año',
      imagePath: '../../assets/2024.png'
    },
    {
      title: 'Un Viaje por los Avances Tecnológicos',
      description: 'Desde los albores de la Edad de Piedra hasta la actual Era Digital, la humanidad ha experimentado un' +
          ' asombroso viaje tecnológico que ha transformado radicalmente la forma en que vivimos. ' +
          'Echemos un vistazo a algunos de los hitos más significativos en este viaje evolutivo.',
      imagePath: '../../assets/marketing.jpeg'
    },
    // Agrega más noticias según sea necesario
  ];

  buttonName = "Ver más noticias";
  stateHidden = false;

  constructor(private route: Router) { }

  loadMoreCards(): void {
    if (this.noticias.length < 9) {
      // Lógica para cargar más noticias si hay menos de 9
      // Aquí puedes agregar más noticias al array this.noticias
      this.noticias.push({ title: 'El diseño a través del smartphone', description: 'El último avance en moviles es el GOmartz un ' +
            'dispositivo capaz de satisfacer las necesidades de los profesionales del diseño en movimiento.  ', imagePath: '../../assets/noticia1imagen.png' });
      this.noticias.push({ title: 'El marketing de Coca-Cola va más allá de lo normal', description: 'La estrategia de marketing de Coca-Cola ' +
            'se fundamenta en la creación y preservación de una marca fuerte, el establecimiento de conexiones emocionales' +
            ' con los consumidores y la continua adaptación a las tendencias del mercado.', imagePath: '../../assets/CocaCola.jpeg' });
      this.noticias.push({ title: 'Inteligencia Artificial (IA) en la Creación Artística', description: 'La inteligencia artificial (IA) favorece una segmentación ' +
            'precisa de audiencias mediante el análisis de datos demográficos, comportamientos en línea y preferencias individuales', imagePath: '../../assets/robot.jpg' });
      this.noticias.push({ title: 'El papel fundamental de las redes sociales en el marketing ', description: 'Las redes sociales son una herramienta esencial en el marketing ' +
            'contemporáneo, proporcionando oportunidades únicas para promover marcas, interactuar con la audiencia y establecer conexiones significativas con los clientes.', imagePath: '../../assets/redes.png' });
      this.noticias.push({ title: 'La importancia del marketing en el arte', description: 'El marketing desempeña un papel crucial en el mundo del arte: en el ámbito artístico adopta diversas formas y estrategias,' +
            ' y su impacto financiero varía según la naturaleza específica del proyecto o la institución. La inversión en marketing de cada entidad se determina en función de sus objetivos y recursos disponibles.', imagePath: '../../assets/contenido.png' });
      this.noticias.push({ title: 'La importancia del diseño en objetos cotidianos como; un biberon ', description: 'El Diseño del Biberón Revoluciona la experiencia para Padres y Bebés, un diseño bien pensado no solo mejora la funcionalidad, sino que ' +
            'también contribuye al bienestar de los padres y al desarrollo saludable de los bebés.', imagePath: '../../assets/vitamina.png' +
            '' });

      if (this.noticias.length === 9) {
        this.buttonName = "Ver Todas";
        this.stateHidden = true;
      }
    } else if (this.noticias.length >= 9 && this.noticias.length <= 12) {
      // Lógica para navegar a otra página si hay entre 9 y 12 noticias
      this.route.navigate(['/news']);
    }
  }

  seeAllNews(): void {
    this.route.navigate(['/news']);
  }

  ngOnInit(): void {
    console.log("Refrescado");
    console.log(this.stateHidden);
  }
}