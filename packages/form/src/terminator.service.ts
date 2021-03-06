import { Subject } from 'rxjs/Subject';

export class TerminatorService {
  onDestroy: Subject<boolean>;

  constructor() {
    this.onDestroy = new Subject();
  }

  destroy() {
    this.onDestroy.next(true);
  }
}
