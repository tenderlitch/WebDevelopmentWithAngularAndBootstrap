import { Component, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Component({
    selector:'ngb-test-carousel',
    templateUrl:'./ngb-carousel.component.html',
    styles:[`
        .carousel{
            width:500px;
        }
    `]
})
export class NgbCarouselComponent implements OnInit{
    images:Array<string>;

    constructor(private _http:HttpClient){}

    ngOnInit(){
        this._http.get('https://picsum.photos/list')
        .pipe(map((images:Array<{id:number}>)=>this._randomImageUrls(images)))
        .subscribe(images=>this.images=images);
    }

    private _randomImageUrls(images:Array<{id:number}>):Array<string>{
        return [1,2,3].map(()=>{
            const randomId = images[Math.floor(Math.random()*images.length)].id;
            return `http://picsum.photos/900/500?image=${randomId}`;
        });
    }
}