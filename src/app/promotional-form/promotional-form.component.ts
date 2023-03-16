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
  userResponse : string = ''; // Start user response
  buttonText : string = 'Enviar'; // Start button text
  send : boolean = false; // Submitted form

  submitResponse() {
    if (this.userResponse == '') { //Check empty field
      alert('Insira sua resposta');
      return;
    }
    if (this.send) return; //Check if the form was submitted 
    this.buttonText = 'Enviando...';
    this.send = true; // Block button and field read only
    // Send server request
    this.http.get('https://641077cd7b24bb91f21e25e1.mockapi.io/promotional_response/' + this.userResponse.toUpperCase()).subscribe(
      data => { // Sucess request (/:id == SIM || /:id is empty)
        if (Array.isArray(data)) // Empty field (second check)
          this.buttonText = 'Erro';
        else // Sucess
          this.buttonText = 'Você está mais próximo de se juntar ao time!';
      },
      error => { //Error request (/:id != SIM)
        this.buttonText = 'Erro';
      }
    );
  }
}
