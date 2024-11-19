import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component,ChangeDetectionStrategy, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'be-atom-button',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet,],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './atom-button.component.html',
})
export class AtomButtonComponent {
  // iconComponent = contentChild(AtomIconComponent);

  inlineFlex = input(true);

  type = input('button');

  classes = input('');

  disabled = input<boolean>();

  loading = input<boolean>();

  mutableClasses = signal('');

  onClick = output<MouseEvent>();

  computedClasses = computed<{ [key: string]: boolean }>(() => {
    const classes = this.mutableClasses() || this.classes();
    return {
      btn: true,
      'btn-primary': !classes,
      [classes]: !!classes,
    };
  });
}
