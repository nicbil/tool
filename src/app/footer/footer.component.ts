import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <footer class="footer">
          <div class="copyright">
              <span>© 2020 Tool</span>
          </div>
      </footer>
  `,
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
