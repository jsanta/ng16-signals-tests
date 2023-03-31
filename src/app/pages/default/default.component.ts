import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../types/user.interface';
import { UserService } from '../../services/user.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'ng16-signals-default',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    UserCardComponent
  ],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit, OnChanges{
  userService = inject(UserService);
  users: Array<User> = [];
  currentUser: User | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.userService.retrieveUsers().subscribe(users => {
      this.users = users;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  setCurrent(user: User): void {
    console.log('setCurrent', user);
    this.currentUser = user;
  }
}
