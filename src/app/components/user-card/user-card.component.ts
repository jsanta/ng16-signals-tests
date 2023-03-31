import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { User } from '../../types/user.interface';

@Component({
  selector: 'ng16-signals-user-card',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    NgIf
  ],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit, OnChanges {
  @Input() user: User | undefined;
  @Input() isCurrent = false;
  @Output() currentUser = new EventEmitter<User>();
  hilite = false;

  ngOnInit(): void {
    console.log('ngOnInit UserCardComponent');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges UserCardComponent', changes);
  }

  highLight(): void {
    this.hilite = !this.hilite;
    console.log('Toggle highLight', this.hilite);
  }
  setCurrent(): void {
    console.log('setCurrent', this.user);
    this.currentUser.emit(this.user);
  }
}
