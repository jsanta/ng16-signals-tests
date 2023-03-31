import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { User } from '../../types/user.interface';

@Component({
  selector: 'ng16-signals-user-card-onpush',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    NgIf
  ],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponentOnPush implements OnInit, OnChanges, DoCheck {
  ngDoCheck(): void {
    console.log('ngDoCheck UserCardComponentOnPush');
  }
  cdr = inject(ChangeDetectorRef);

  @Input() user!: User;
  @Input() isCurrent = false;
  @Output() currentUser = new EventEmitter<User>();
  hilite = false;

  ngOnInit(): void {
    console.log('ngOnInit UserCardComponentOnPush');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges UserCardComponentOnPush', changes);
  }

  highLight(): void {
    this.hilite = !this.hilite;
    console.log('Toggle highLight', this.hilite);
    this.cdr.markForCheck();
    // this.cdr.detectChanges();
  }
  setCurrent(): void {
    console.log('setCurrent', this.user);
    this.cdr.markForCheck();
    // this.cdr.detectChanges();
    this.currentUser.emit(this.user);
  }
}
