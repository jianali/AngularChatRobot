import { Component, OnInit } from '@angular/core';
// import { heros } from '../mock-heros';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero1={
    id:1,
    name:"ironMan"}

  heros:Hero[]
  selectHero:Hero


  constructor(private heroService:HeroService,private messageService:MessageService) {
    
  }

  // 这里的获取值是一个同步操作，实际情况下应该是一个异步的操作，就是说服务不会等着你
  getHeros():void{
    // 最终返回一个Observable,这玩意就是一个观察订阅者模式
    this.heroService.getHeros().subscribe(res=>{
      console.log("aaa:"+res);
      this.heros = JSON.parse(res)
      console.log(typeof this.heros)
      console.log(JSON.parse(res)[0])
    })
  }

  onSelect(value:Hero){
    // this.heroService.getHeros()
      this.selectHero = value
      // 这里使用的取值符号是~
      this.messageService.add(`查询的联盟英雄为：${value.id}`)
  }

  ngOnInit(): void {
    // 创建完组件之后调用。是一个初始化逻辑的好地方
    this.getHeros()
    this.selectHero={
      id:1,
    name:"ironMan"
    }
  }

}
