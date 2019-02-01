import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() linkSelect = new EventEmitter<string>();

  constructor() { }

    onLinkSelect(link) {
        this.linkSelect.emit(link);
    }

  ngOnInit() {
  }

}
