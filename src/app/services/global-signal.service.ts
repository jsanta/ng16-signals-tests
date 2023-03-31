import { inject, Injectable, InjectionToken, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalSignalService {

  signalMap = new Map<string, WritableSignal<unknown>>();

  constructor() { }

  getSignal<T>(key: string): WritableSignal<T> {
    if (!this.signalMap.has(key)) {
      this.signalMap.set(key, signal<T | undefined>(undefined));
    }
    return this.signalMap.get(key) as WritableSignal<T>;
  }

  setSignal<T>(key: string, value: T): void {
    this.getSignal<T>(key).set(value);
  }
}

export let GLOBAL_SIGNAL_SERVICE = new InjectionToken<GlobalSignalService>('GLOBAL_SIGNAL_SERVICE', {
  providedIn: 'root',
  factory: () => inject(GlobalSignalService)
});
