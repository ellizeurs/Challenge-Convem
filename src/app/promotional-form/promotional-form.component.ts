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
  userResponse = '';
  buttonText = 'Enviar';
  send = false;

  submitResponse() {
    if (this.userResponse == ''){
      alert('Insira sua resposta');
      return;
    }
    if (this.send) return;
    this.buttonText = 'Enviando...';
    this.send = true;
    this.http.get('https://641077cd7b24bb91f21e25e1.mockapi.io/promotional_response/' + this.userResponse.toUpperCase()).subscribe(
      data => {
        this.buttonText = 'Você está mais próximo de se juntar ao time!';
      },
      error => {
        this.buttonText = 'Erro';
      }
    );
  }
}
