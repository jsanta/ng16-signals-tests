import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, NgZone, OnChanges, OnInit, signal, effect, SimpleChanges, DoCheck } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user.interface';
// import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UserCardComponentSignaled } from '../../components/user-car-signaled/user-card.component';
import { GlobalSignalService, GLOBAL_SIGNAL_SERVICE } from '../../services/global-signal.service';

@Component({
  selector: 'ng16-signals-with-signals',
  standalone: true,
  imports: [
    CommonModule,
    // UserCardComponent,
    UserCardComponentSignaled,
    NgFor,
    NgIf
  ],
  // providers: [
  //   {
  //     provide: GLOBAL_SIGNAL_SERVICE,
  //     useExisting: GlobalSignalService
  //   }
  // ],
  templateUrl: './with-signals.component.html',
  styleUrls: ['./with-signals.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithSignalsComponent implements OnInit, OnChanges, DoCheck {
  cdr                 = inject(ChangeDetectorRef);
  zone                = inject(NgZone);
  userService         = inject(UserService);
  globalSignalService = inject(GLOBAL_SIGNAL_SERVICE);
  users       =  signal<Array<User>>([]);
  currentUser = this.globalSignalService.getSignal<User>('currentUser');
  

  constructor() {
    // this.cdr.detach();
    // effect(() => {
    //   console.log('effect currentUser', this.currentUser());
    //   // this.cdr.detectChanges();
    // });
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // this.zone.runOutsideAngular(() => {
      this.userService.retrieveUsers().subscribe(users => {
        this.users.set(users);
        this.cdr.detectChanges();
      });
    // });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
}
