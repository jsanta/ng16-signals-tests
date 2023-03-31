import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng16-signals-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  firstName = signal('Peter');
  lastName = signal('Parker');

  signalCounter = 0;

  fullName = computed(() => {
    this.signalCounter++;
    console.log('signal name change');
    return `${this.firstName()} ${this.lastName()}`;
  });

  changeName() {
    this.firstName.set('Signal Spider');
    this.lastName.set('Man');
  }
}
