import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Props {
  text: string;
  ariaLabel: string;
  type: 'paragraph' | 'list';
  size: 'text-xs' | 'text-sm' | 'text-base';
  width?: 'max-w-md' | 'w-full';
  padding?: 'px-1 py-0' | 'px-2 py-1';
  bold?: boolean;
  background?: boolean;
}

@Component({
    selector: 'app-text-element',
    imports: [CommonModule],
    templateUrl: './text-element.component.html'
})
export class TextElementComponent {
  @Input() props: Props = {
    text: '',
    ariaLabel: '',
    type: 'paragraph',
    size: 'text-base',
  };

  addClasses() {
    const hasBold = this.props.bold ? 'font-bold' : 'font-normal';
    const printTextSize = this.props.ariaLabel.includes("Date:") ? "print:text-sm" : "print:text-base";
    const hasBackground = this.props.background
      ? 'border border-transparent bg-neutral-200 rounded-md text-foreground text-center '
      : 'text-foreground/80';
    return `text-pretty print:text-foreground ${this.props.width} ${this.props.size} ${this.props.padding} ${hasBold} ${hasBackground} ${printTextSize}`;
  }
}
