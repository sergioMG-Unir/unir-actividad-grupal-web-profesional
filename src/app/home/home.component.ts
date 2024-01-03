import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  numberCard = 1;
  nameCard = 'Título';
  descriptionCard = 'Descripción';
  imagePath = "../../assets/example.png";
  numberItems = Array.from({ length: 3 }, (_, index) => index + 1);
  buttonName ="Ver más noticias";
  stateHidden = false;

  constructor(private route: Router) { }

  loadMoreCards($event) {
    if (this.numberItems.length < 9) {
      for (let i = 0; i < 3; i++) {
        this.numberItems.push(this.numberItems.length + 3);
      }
  
      if (this.numberItems.length === 9) {
        this.buttonName = "Ver Todas";
        this.stateHidden = true;
        console.log( this.stateHidden);

      }
    } else if (this.numberItems.length >= 9 && this.numberItems.length <= 12) {
      this.route.navigate(['/news']);
      return; 
    }

  }

  seeAllNews($event) {
    this.route.navigate(['/news']);
    return; 
  }

  ngOnInit() {
    console.log("Refrescado");
    console.log( this.stateHidden);

  }

  onLoadServers(id: number) {
    this.route.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' });
  }
}