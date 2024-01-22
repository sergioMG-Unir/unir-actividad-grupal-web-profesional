import { Component } from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent{

  noticiasTitulo: string = "Noticias anteriores";

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
    { title: 'NOTICIA 4', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/noticia1imagen.png' },
    { title: 'NOTICIA 5', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/CocaCola.jpeg' },
    { title: 'NOTICIA 6', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/robot.jpg' },
    { title: 'NOTICIA 7', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/redes.png' },
    { title: 'NOTICIA 8', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/contenido.png' },
    { title: 'NOTICIA 9', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/vitamina.png' }
    // Agrega más noticias según sea necesario
  ];
}