import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../service/paciente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

 
  constructor(private service: PacienteService) { }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  

  ngOnInit() {
  }
  
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    paciente_nome: new FormControl('', Validators.required),
    paciente_genero: new FormControl('1'),
    paciente_data_de_nascimento: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      paciente_nome: '',
      paciente_genero: '1',
      paciente_data_de_nascimento: '',
    });
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }

  adicionarPaciente(paciente_nome, paciente_genero, paciente_data_de_nascimento){
    this.service.adicionarPaciente(paciente_nome, paciente_genero, paciente_data_de_nascimento)
  }

}
