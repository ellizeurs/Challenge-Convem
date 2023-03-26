import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-promotional-form',
  templateUrl: './promotional-form.component.html',
  styleUrls: ['./promotional-form.component.css']
})


@Injectable()
export class PromotionalFormComponent {
  constructor(private http: HttpClient) { }
  userResponse: string = ''; // Start user response
  buttonText: string = 'Enviar'; // Start button text
  send: boolean = false; // Submitted form

  submitResponse() {
    if (this.userResponse == '') { //Check empty field
      alert('Insira sua resposta');
      return;
    }
    if (this.send) return; //Check if the form was submitted 
    this.buttonText = 'Enviando...';
    this.send = true; // Block button and field read only
    // Send server request
    this.http.post(
      'http://localhost:3000',
      { userResponse: this.userResponse })
      .subscribe(
        (data: any) => {
          this.buttonText = data.message;
        },
        error => {
          this.buttonText = "Erro";
        }
      );
  }

  resetForm() { // On keydown event in userResponse field restart the form
    this.buttonText = 'Enviar';
    this.send = false;
  }
}
