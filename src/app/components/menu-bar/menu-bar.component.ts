import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.sass']
})
export class MenuBarComponent {
  isMenuVisible: boolean = false;

  @ViewChild('menu') menu: ElementRef | undefined;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    if (this.menu && !this.menu.nativeElement.contains(event.target)) {
      this.isMenuVisible = false;
    }
  }
}
