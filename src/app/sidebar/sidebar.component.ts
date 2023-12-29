import { Component } from '@angular/core';
export interface SidebarMenuItem {
  name: string;
  link?: string;
  icon?: string;
  active?: boolean;
}

const sideMenuComponentConfig: SidebarMenuItem[] = [
  {
    name: 'Components',
    link: 'components'
  },
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  config: SidebarMenuItem[] = sideMenuComponentConfig;
  isMenuOpen: boolean = false;

  onClickSideMenuButton() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
