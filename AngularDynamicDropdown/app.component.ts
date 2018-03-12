import { Component } from '@angular/core';
import { SearchCriteria } from './SearchCriteria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  criterias = [new SearchCriteria("Name"), new SearchCriteria("Address")];
  selectedCriteria = "";

  onClickSearch(): void {
    this.selectedCriteria = this.criterias.map(c=>c.Label + " " + c.SelectedOption + " " + c.Value).join();
  }
}
