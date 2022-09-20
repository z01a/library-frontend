import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getLoan().subscribe({
      next: (result: any) => {
        this.days = result.maxLoanDays
      }
    });
  }

  days: number = 0;

  performIncrement() {
    if(this.days) {
      this.days++;
      this.configService.setLoan(this.days).subscribe({}); 
    }
  }

  performDecrement() {
    if(this.days) {
      if(this.days > 1) {
        this.days--;
        this.configService.setLoan(this.days).subscribe({});
      }
    }
  }

}
