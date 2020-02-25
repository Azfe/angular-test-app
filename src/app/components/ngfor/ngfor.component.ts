import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  cursos: string[] = ['HTML', 'ANGULAR', 'PHP']

  animales: Array<any> = [
    {tipo:'Perro', nombre: 'Lisa', edad: 10},
    {tipo:'Gato', nombre: 'Pepón', edad: 2},
    {tipo:'Pato', nombre: 'Tantan', edad: 7}
  ]

  constructor() { }

  ngOnInit() {
  }

}
