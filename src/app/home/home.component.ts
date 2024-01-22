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
      this.noticias.push({ title: 'NOTICIA 4', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/noticia1imagen.png' });
      this.noticias.push({ title: 'NOTICIA 5', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/CocaCola.jpeg' });
      this.noticias.push({ title: 'NOTICIA 6', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/robot.jpg' });
      this.noticias.push({ title: 'NOTICIA 7', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/redes.png' });
      this.noticias.push({ title: 'NOTICIA 8', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/contenido.png' });
      this.noticias.push({ title: 'NOTICIA 9', description: 'Descripción de la Nueva Noticia', imagePath: '../../assets/vitamina.png' +
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