import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  @Input()
  public user: User;

  @Output()
  public deleted = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() { }

  public delete(id: number) {
    // if (confirm('Confirme para eliminar el usuario')) {
    //   this.userService.delete(id).subscribe((response) => {
    //     this.deleted.emit({ id: response.id });
    //   });
    // }
  }

}
