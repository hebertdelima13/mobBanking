import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /*Username*/

  getName(name: string) {
    if (name === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite um nome para entrar!',
      })
    } else {
      window.localStorage.setItem('user', name)
      this.router.navigate(['overview']);
    }
  }
}
