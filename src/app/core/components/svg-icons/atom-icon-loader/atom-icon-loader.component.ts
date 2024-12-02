import {Component, computed, forwardRef, input} from '@angular/core';
import {NgClass} from "@angular/common";
import {AtomIconComponent} from "../atom-icon/atom-icon.component";

@Component({
  selector: 'be-atom-icon-loader',
  standalone: true,
  templateUrl: './atom-icon-loader.component.html',
  providers: [
    {
      provide: AtomIconComponent,
      useExisting: forwardRef(() => AtomIconLoaderComponent),
    },
  ],
  imports: [NgClass],

})
export class AtomIconLoaderComponent {
  spin = input(false);
  computedClasses() {
    return 'base-class';
  }
  iconLoaderClasses = computed(() => {
    if (this.spin()) {
      return `${this.computedClasses()} spin-animation`;
    }
    return this.computedClasses();
  });
}
