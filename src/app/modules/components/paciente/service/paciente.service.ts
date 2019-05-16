import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  uri = 'http://localhost:4000/pacientes';

  constructor(private http: HttpClient) { }

  adicionarPaciente(paciente_nome, paciente_genero, paciente_data_de_nascimento) {
    const obj = {
      paciente_nome: paciente_nome,
      paciente_genero: paciente_genero,
      paciente_data_de_nascimento: paciente_data_de_nascimento,
    };
    this.http.post(`${this.uri}/adicionar`, obj)
      .subscribe(res => console.log('Done'));
  }

  getPacientes() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editarPaciente(id) {
    return this
      .http
      .get(`${this.uri}/editar/${id}`);
  }

  atualizarPaciente(paciente_nome, paciente_genero, paciente_data_de_nascimento, id) {

    const obj = {
      paciente_nome: paciente_nome,
      paciente_genero: paciente_genero,
      paciente_data_de_nascimento: paciente_data_de_nascimento,
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deletarPaciente(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}


