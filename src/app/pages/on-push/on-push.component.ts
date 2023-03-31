import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user.interface';
import { UserCardComponentOnPush } from '../../components/user-car-onpush/user-card.component';

@Component({
  selector: 'ng16-signals-on-push',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    UserCardComponentOnPush
  ],
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit, OnChanges {
  userService = inject(UserService);
  cdr = inject(ChangeDetectorRef);
  users: Array<User> = [];
  currentUser: User | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.userService.retrieveUsers().subscribe(users => {
      this.users = users;
      this.cdr.markForCheck();
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
