import { Component, Input } from '@angular/core';
import { IterableListItem } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() dataSource: IterableListItem[] = [];
}
