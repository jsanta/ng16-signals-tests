import { Component, inject, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user.interface';

@Component({
  selector: 'ng16-signals-no-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-signals.component.html',
  styleUrls: ['./no-signals.component.scss'],
})
export class NoSignalsComponent implements OnInit, OnChanges {
  userService = inject(UserService);
  users =  signal<Array<User>>([]);
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.userService.retrieveUsers().subscribe(users => {
      this.users.set(users);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }}
