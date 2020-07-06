import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public documents: any[] = [];
  public selected: any[] = [];
  public id = 0
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if ((window.innerHeight + window.scrollY) >= 2000) {
      if(this.id < 40) {
        for (;this.id < 40; this.id++) {
          this.documents.push({
            id : this.id,
            name: `Document ${this.id}`,
          });
        }
    }
      
    }
  }
  ngOnInit() {
    for (; this.id < 20; this.id++) {
      this.documents.push({
        id: this.id,
        name: `Document ${this.id}`,
      });
    }
  }

}
