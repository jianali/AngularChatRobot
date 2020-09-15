import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heros } from './mock-heros';
import { Observable, of, from } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private herosUrl='http://127.0.0.1:8001/heros'

  getHeros():Observable<string>{
    this.messageService.add("查询联盟成员消息！！！")
    // return of(heros);
    return this.http.get<string>(this.herosUrl)
  }

  getHero(id:number):Observable<Hero>{
    return of(heros.find(hero=>hero.id===id))
  }

  // 将服务注册到另一个服务中

  constructor(private messageService:MessageService,private http:HttpClient) { 

    
  }
}
