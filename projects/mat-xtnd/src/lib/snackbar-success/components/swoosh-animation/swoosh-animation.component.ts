import { Component, AfterContentInit, OnInit, ElementRef, Input } from '@angular/core';
import { MatXtndThemeColorFinderService } from '../../../utils';

@Component({
  selector: 'matxtnd-swoosh-animation',
  templateUrl: 'swoosh-animation.component.html',
  styleUrls: [`swoosh-animation.component.scss`]
})
export class MatXtndSwooshAnimationComponent implements OnInit {

  private canvas: HTMLCanvasElement | undefined;

  @Input() color: string = this.matXtndThemeService.colors.primary;
  @Input() speed: number = 6;
  @Input() width: number = 35;
  @Input('play-after') playAfter: number = 500;

  constructor(
    private readonly element: ElementRef<HTMLElement>,
    private readonly matXtndThemeService: MatXtndThemeColorFinderService
  ) { }

  ngOnInit() {
    this.canvas = document.createElement('canvas');
    const width = this.width;
    const height = width * 3.2;
    this.canvas.height = 160;
    this.canvas.style.width = width + 'px';
    const playAfter = this.playAfter || 2000;

    this.element.nativeElement.appendChild(this.canvas);
    setTimeout(this.Play.bind(this), playAfter);
  }

  Play() {
    const color = (this.color || 'rgba(0, 150, 0, 1)');
    const speed = (this.speed || 5)

    let start = 100;
    let mid = 145;
    let end = 250;
    let width = 20;
    let leftX = start;
    let leftY = start;
    let rightX = mid - (width / 2.7);
    let rightY = mid + (width / 2.7);
    let animationSpeed = speed;

    let ctx = this.canvas?.getContext('2d');
    if (ctx) {
      ctx.lineWidth = width;
      ctx.strokeStyle = color;

      for (let i = start; i < mid; i++) {
        var drawLeft = window.setTimeout(function () {
          ctx.beginPath();
          ctx.moveTo(start, start);
          ctx.lineTo(leftX, leftY);
          ctx.stroke();
          leftX++;
          leftY++;
        }, 1 + (i * animationSpeed) / 3);
      }

      for (let i = mid; i < end; i++) {
        var drawRight = window.setTimeout(function () {
          ctx.beginPath();
          ctx.moveTo(leftX, leftY);
          ctx.lineTo(rightX, rightY);
          ctx.stroke();
          rightX++;
          rightY--;
        }, 1 + (i * animationSpeed) / 3);
      }
    }
  }




} 
