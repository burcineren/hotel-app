import {NgClass, NgTemplateOutlet} from '@angular/common';
import {Component, ChangeDetectionStrategy, computed, input, output, signal, contentChild} from '@angular/core';
import {AtomIconComponent} from "../svg-icons/atom-icon/atom-icon.component";
import {AtomIconLoaderComponent} from "../svg-icons/atom-icon-loader";

@Component({
  selector: 'be-atom-button',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet, AtomIconLoaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './atom-button.component.html',
})
export class AtomButtonComponent {
  iconComponent = contentChild(AtomIconComponent);
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
