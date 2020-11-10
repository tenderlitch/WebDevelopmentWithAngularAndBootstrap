import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector:'ngb-modal',
    templateUrl:'./ngb-modal.component.html'
})
export class NgbModalComponent{
    closeResult:string;

    constructor(private modalService:NgbModal){}

    open(content){
        this.modalService.open(content).result.then((result)=>{
            this.closeResult=`Closed with:${result}`;
        },(reason)=>{
            this.closeResult=`Dismissed ${this.getDismissReasion(reason)}`;
        });
    }

    private getDismissReasion(reason:any):string{
        debugger;
        if(reason===ModalDismissReasons.ESC){
            return 'by pressing ESC';
        }else if(reason===ModalDismissReasons.BACKDROP_CLICK){
            return 'by clicking on a backdrop';
        }else{
            return `with: ${reason}`;
        }
    }
}