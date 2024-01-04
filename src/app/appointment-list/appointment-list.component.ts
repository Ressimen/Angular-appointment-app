import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  
  appointment: Appointment[] = []
  newAppointmentTitle: string = " ";
  newAppointmentDate:Date = new Date();

  ngOnInit(): void {
  let savedAppointments = localStorage.getItem("appointments");
  this.appointment = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  addAppointment(){
    if(this.newAppointmentTitle.trim() && this.newAppointmentDate) {
      
      let newAppointment:Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointment.push(newAppointment);
      this.newAppointmentTitle = " ";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments",JSON.stringify(this.appointment))
    }

    }
    
    deleteAppointment(index:number){
      this.appointment.splice(index,1);
      localStorage.setItem("appointments",JSON.stringify(this.appointment))
    }
}
