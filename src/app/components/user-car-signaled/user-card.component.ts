import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, effect, EventEmitter, inject, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { User } from '../../types/user.interface';
import { GlobalSignalService, GLOBAL_SIGNAL_SERVICE } from '../../services/global-signal.service';

@Component({
  selector: 'ng16-signals-user-card-signaled',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    NgIf
  ],
  // providers: [
  //   { 
  //     provide: GLOBAL_SIGNAL_SERVICE, 
  //     useExisting: GlobalSignalService
  //   }
  // ],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponentSignaled implements OnInit, OnChanges, DoCheck {
  cdr = inject(ChangeDetectorRef);
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);

  @Input() user: User | undefined;
  @Input() isCurrent = false;
  hilite = signal<boolean>(false);

  constructor() {
    // effect(() => {
    //   console.log('effect hilite', this.hilite());
    //   this.cdr.detectChanges();
    //   // this.cdr.markForCheck();
    // });
  }
  ngDoCheck(): void {
    console.log('ngDoCheck UserCardComponentSignaled');
  }

  ngOnInit(): void {
    console.log('ngOnInit UserCardComponentSignaled');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges UserCardComponentSignaled', changes);
  }

  highLight(): void {
    this.hilite.set(!this.hilite());
    console.log('Toggle highLight', this.hilite());
  }
  setCurrent(): void {
    console.log('setCurrent', this.user);
    this.globalSignalService.setSignal('currentUser', this.user);
    // this.cdr.markForCheck();
  }
}
