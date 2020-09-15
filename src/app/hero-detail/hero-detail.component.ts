import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero:Hero
  hero:Hero

  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location

  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  // 如何从路由中提取想要的信息呢？比如路由是detail/id，demo就是detail/18,如何提取18这个信息呢？

  // 这里要注意，如果浏览器报错有些方法找不到，可以开启调试模式看看是不是因为对应的文件没有保存
  getHero():void{
    const id=+this.route.snapshot.paramMap.get('id')
    console.log(this.heroService.getHero(id))
    const newLocal = this.heroService.getHero(id).subscribe(res => this.hero = res);
  }

  goBack():void{
    this.location.back()
  }


}
