import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  profileName: any

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.removeClass();
    this.changeName();
  }

  removeClass() {
    const catchIdToggle = <HTMLInputElement>document.getElementById('toggle')
    const catchIdHamburguer = <HTMLInputElement>document.getElementById('hamburguer')
    this.breakpointObserver
      .observe(['(min-width: 376px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          catchIdToggle.classList.remove('active')
          catchIdHamburguer.classList.remove('active')
        }
      });
  }

  toggleActive() {
    const catchIdToggle = <HTMLInputElement>document.getElementById('toggle')
    const catchIdHamburguer = <HTMLInputElement>document.getElementById('hamburguer')
    catchIdToggle.classList.toggle('active')
    catchIdHamburguer.classList.toggle('active')
  }

  changeName() {
    const person = prompt("Digite seu nome:");
    if (person == null || person == "") {
      this.profileName = `Profile`
    } else {
      this.profileName = person
    }
  }

}
