import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profileName: any

  constructor() { }

  ngOnInit(): void {
    //this.changeName()
  }

  //Menu hamburguer

  toggleActive() {
    const catchIdToggle = <HTMLInputElement>document.getElementById('toggle')
    const catchIdHamburguer = <HTMLInputElement>document.getElementById('hamburguer')
    catchIdToggle.classList.toggle('d-block')
    catchIdHamburguer.classList.toggle('active')
  }

  //User change name

  changeName() {
    const person = prompt("Digite seu nome:");
    if (person == null || person == "") {
      this.profileName = `Profile`
    } else {
      this.profileName = person
    }
  }

  // Swiper Slide

  @ViewChild('swiper') swiper?: SwiperComponent;

  slideNext() {
    this.swiper?.swiperRef.slideNext(500);
  }

  slidePrev() {
    this.swiper?.swiperRef.slidePrev(500);
  }

  config: SwiperOptions = {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 130
      },
      821: {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: false
      }
    }
  };

  //ChartsJs

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [80, 120, 50, 250, 100, 270, 200, 300, 50, 230],
        label: 'Incomes',
        backgroundColor: 'transparent',
        borderColor: 'rgba(139, 185, 201, 1)',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: 'rgba(139, 185, 201, 1)',
        pointHoverBorderColor: 'transparent'
      },
      {
        data: [90, 230, 70, 200, 130, 240, 100, 200, 120, 180],
        label: 'Expenses',
        backgroundColor: 'transparent',
        borderColor: 'rgba(63, 140, 255, 1)',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: 'rgba(63, 140, 255, 1)',
        pointHoverBorderColor: 'transparent'
      }
    ],
    labels: ['Nov 02', '', '', 'Nov 09', '', '', 'Nov 15', '', '', 'Nov 23'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    interaction: {
      mode: 'index',
      intersect: false
    },
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      'x-axis-0':
      {
        display: true,
        beginAtZero: true,
        ticks: {
          color: 'rgba(179, 180, 182, 1)',
          font: {
            family: 'Poppins',
            weight: '500',
            size: 12
          }
        },
        grid: {
          color: 'rgba(179, 180, 182, 1)',
          borderDash: [5, 10]
        }
      },
      'y-axis-0':
      {
        display: false,
        beginAtZero: true
      }
    },
    plugins: {
      tooltip: {
        displayColors:false,
        callbacks: {
          label: (data) => {
            let label = data.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (data.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.parsed.y);
            }
            return label;
          }
        }
      }
    }
  };

  public lineChartType: ChartType = 'line';
  public lineChartLegend = false;

}
