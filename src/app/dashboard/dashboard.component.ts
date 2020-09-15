import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  heros:Hero[]
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeros()
  }

  getHeros():void{
    this.heroService.getHeros().subscribe(res=>this.heros=JSON.parse(res).slice(1,5) )
    console.log(this.heros)
  }

}
