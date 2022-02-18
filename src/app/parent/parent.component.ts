import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { DataService } from 'src/Service/data.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  dropDownData:Object |any;
  id:any
  msg:any
  constructor(
    private parentService: DataService
  ) { }

  ngOnInit(): void {
    this.parentService.getParentData().pipe(map(data => data)).subscribe(result => {
      this.dropDownData = result
    });
  }

  onChange(item:any){
    this.id = item

  }


}
