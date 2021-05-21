import { OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { AulasService } from 'src/app/Servicios/aulas.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HorarioService } from 'src/app/Servicios/horario.service';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {
  displayedColumns: string[] = ['Horario', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selectedValue: string;
  selectedCar: string;
  aulas: any[];
  fecha: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private aulasService: AulasService, private horarioService: HorarioService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.aulasService.get().subscribe( data =>{
      console.table(data)
      this.aulas = data;
      console.table(this.aulas)
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  datos(hora: any, data: any){
    console.log(hora)
    console.log(data)
  }

  Buscar(){
    let fecha = new DatePipe('en').transform(this.fecha, 'yyyy-MM-dd')
    let id;
    for (let index = 0; index < this.aulas.length; index++) {
      const element = this.aulas[index];
      if( element.nombre == this.selectedValue){
        id = element.id
        break;
      }
    }
    console.log(fecha, id)
    this.horarioService.getDia(id, fecha).subscribe(data =>{
      console.table(data)
      ELEMENT_DATA.forEach(element => {
        data.forEach(element2 => {
          console.log(element)
          console.log(element2)
          
          if(element.horario == element2.hora){
            let dia = element2.dia
            element[dia] = element2.profesor
            console.table(element[dia])
            console.table(ELEMENT_DATA)
          }
        });
      });
    })
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  lunes: string;
  horario: string;
  martes: string;
  miercoles: string;
  jueves: string;
  viernes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {horario: "7:00am - 7:50am", lunes: 'Melissa Osuna Cardenas', martes: '', miercoles: 'H', jueves: '', viernes: ''},
  {horario: "7:50am - 8:40am", lunes: '', martes: '', miercoles: 'He', jueves: '', viernes: ''},
  {horario: "8:40am - 9:30am", lunes: '', martes: 'Roberto Antonio Martinez Thompson', miercoles: 'Li', jueves: '', viernes: ''},
  {horario: "10:00am - 10:50am", lunes: 'Miguel Angel Zatarain Coronado', martes: 'Miguel Angel Zatarain Coronado', miercoles: 'Miguel Angel Zatarain Coronado', jueves: 'Miguel Angel Zatarain Coronado', viernes: 'Miguel Angel Zatarain Coronado'},
  {horario: "10:50am - 11:40am", lunes: '', martes: '', miercoles: 'B', jueves: '', viernes: ''},
  {horario: "11:40am - 12:30am", lunes: '', martes: '', miercoles: 'C', jueves: '', viernes: ''},
  {horario: "12:30pm - 1:20pm", lunes: '', martes: '', miercoles: 'N', jueves: '', viernes: ''},
  {horario: "1:20pm - 2:10pm", lunes: '', martes: '', miercoles: 'O', jueves: '', viernes: ''},
  {horario: "2:10pm - 3:00pm", lunes: '', martes: '', miercoles: 'F', jueves: '', viernes: 'Miguel Angel Zatarain Coronado'},
  {horario: "3:30pm - 4:20pm", lunes: '', martes: '', miercoles: 'Ne', jueves: '', viernes: ''},
  {horario: "4:20pm - 5:10pm", lunes: '', martes: '', miercoles: 'Na', jueves: '', viernes: ''},
  {horario: "5:10pm - 6:00pm", lunes: '', martes: '', miercoles: 'Mg', jueves: '', viernes: ''},
  
];