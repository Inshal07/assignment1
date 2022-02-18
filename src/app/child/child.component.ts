import { ChangeDetectorRef, Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/Service/data.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  id: any
  data: any
  msg: any
  constructor(
    private ref: ChangeDetectorRef,
    private parentService: DataService
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.checkID()
  }
  checkID() {
    this.parentService.getChildData().pipe(map(data => data)).subscribe(result => {
      this.data = result
      for (let item of this.data) {
        if (item.Id === this.id) {
          this.msg = item.age
          break;
        }
        else {
          this.msg = 'No Data Present'
        }
      }
    }
    )
  }


}
