import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';

@Component({
  selector: 'be-atom-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: '',
})
export class AtomIconComponent {
  classes = input('');
  mutableClasses = signal('');
  computedClasses = computed(() => this.mutableClasses() || this.classes());
}
