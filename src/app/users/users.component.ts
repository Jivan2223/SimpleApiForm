import { UserService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {

  users:any = [];
  posts:any = [];

  postTitle = '';
  postBody = '';
  
  title = 'appBootstrap';
  
  closeResult: string ='';

  constructor(private service: UserService, private modalService: NgbModal) { }

  
  ngOnInit(): void {    
    this.service.getUser()
    .subscribe(res=>{
      this.users = res;
    })
  }

  getPost(post?: any){
    this.service.getPosts(post)
        .subscribe(data => {
          console.log(data);
        });
  }


  


  
  open(content?:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
