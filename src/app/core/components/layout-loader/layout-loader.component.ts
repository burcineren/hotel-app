import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {AtomFullPageLoaderComponent} from "../atom-full-page-loader/atom-full-page-loader.component";
import {LoaderService} from "../../services/loader/loader.service";

@Component({
  selector: 'be-layout-loader',
  standalone: true,
  imports: [AtomFullPageLoaderComponent],
  templateUrl: './layout-loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutLoaderComponent {
  loaderService = inject(LoaderService);
}
