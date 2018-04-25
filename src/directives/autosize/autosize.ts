/**
 * Purpose of this directive is to auto-adjust the textarea size as data is input
 */

import {ElementRef, HostListener, Directive, OnInit} from '@angular/core';

@Directive({
  selector: 'ion-textarea[autosize]'
})

export class Autosize implements OnInit {
  @HostListener('input', ['$event.target'])
  onInput(textArea:HTMLTextAreaElement):void {
    this.adjust();
  }

  constructor(public element:ElementRef) {
  }

  /**
   * On calling class set the timeout for the textarea adjustment to zero
   */
  ngOnInit():void {
    setTimeout(() => this.adjust(), 0);
  }

  /**
   * Set the textarea to auto size as text is added
   */
  adjust():void {
    let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + "px";
  }
}

//  source: https://competenepal.com/elastic-text-area-component-in-ionic-framework/
