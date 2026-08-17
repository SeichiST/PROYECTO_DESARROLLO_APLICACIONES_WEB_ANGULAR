import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(private router: Router, 
    private route: ActivatedRoute){ 
      
    }

  goJuegos(){
    // localhost:4200/dashboard/juego
    this.router.navigate(["juego"], {relativeTo: this.route})
  }
  
  goDashboard(){
    // localhost:4200/dashboard
    this.router.navigateByUrl("/dashboard");
  }
}