import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmergencyDialogComponent } from '../emergency-dialog/emergency-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}

  abrirVentanaEmergencia(): void {
    const dialogRef = this.dialog.open(EmergencyDialogComponent, {
      data: {
        title: 'Título de la ventana de emergencia',
        description: 'Descripción de la ventana de emergencia.'
        // Agrega más datos según tus necesidades
      }
    });
  }
}
