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
  buttonText = 'Enviar';
  send = false;

  submitResponse() {
    if (this.selectedValue == '') return;
    this.buttonText = 'Enviando...';
    this.send = true;
    this.http.get('https://641077cd7b24bb91f21e25e1.mockapi.io/promotional_response/' + this.selectedValue.toUpperCase()).subscribe(
      data => {
        this.buttonText = 'Sucesso';
      },
      error => {
        this.buttonText = 'Erro';
      }
    );
  }
  options = [
    { name: 'Selecione', value: '' },
    { name: 'Sim', value: 'sim' },
    { name: 'Não', value: 'nao' },
    { name: 'Talvez', value: 'talvez' }
  ];

  selectedValue = '';
}
