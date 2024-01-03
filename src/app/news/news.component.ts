import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})


export class NewsComponent  {
  
  numberCard = 1;
  nameCard = 'Título';
  descriptionCard = 'Descripción';
  imagePath = "../../assets/example.png";

}
