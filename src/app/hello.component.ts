import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `{{name}}!`,
  styles: [`a { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
