import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from './todos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// ---------- getting array ----------

export class AppComponent implements OnInit {
  title: string = 'dev-test';

  todos: Todo[] = []

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.fetchTodos()
  }

  fetchTodos() {
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos
    })
  }
}
// ---------- sorting ----------
/*
export type SortColumn = keyof Todo | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}


export class NgbdTableSortable implements OnInit {

  ngOnInit();

  books = AppComponent.todos;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {


      // resetting other headers
      this.headers.forEach(header => {
        if (header.sortable !== column) {
          header.direction = '';
        }
      });

      // sorting books
      if (direction === '' || column === '') {
        this.books = AppComponent.todos;
      } else {
        this.books = [...AppComponent.todos].sort((a, b) => {
          const res = compare(a[column], b[column]);
          return direction === 'asc' ? res : -res;
        });
      }

  }

}
*/
// ---------- end sorting ----------
