import { Component } from '@angular/core';

@Component({
    selector:'dad',
    template:`<h1>Hello.{{message}}.</h1><br/>
    <son *ngFor="let name of arrSonNames"
    [Name]="name"></son>`
})
export class DadComponent{
    message:string="I'm a Dad";
    arrSonNames=['Justin','','Brendan'];
}