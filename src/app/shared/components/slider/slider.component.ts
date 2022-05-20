import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ImageBase } from 'src/app/home/models/image-base';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnDestroy, OnInit{

  @Input() imageItems: ImageBase[] = [];

  private _destroy$: Subject<boolean> = new Subject<boolean>();

  private _currentImageIndex: number = 0;

  private _currentImage: ImageBase = this.imageItems[0];
  set currentImage(imageItem: ImageBase) {
    this._currentImage = imageItem;
  }

  get currentImage(): ImageBase {
    return this._currentImage;
  }
  
  constructor() { }

  ngOnInit(): void {
    this._startTicks();
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  private _startTicks(dueTime: number = 0): void {
    timer(dueTime, 5000)
    .pipe(takeUntil(this._destroy$))
    .subscribe(() => {
      this.currentImage = this.imageItems[this._currentImageIndex];
      this._currentImageIndex++;
      this._currentImageIndex = this._currentImageIndex >= this.imageItems.length ? 0 : this._currentImageIndex;
    });
  }

  public thumbNailClicked(imageItem: ImageBase): void {
    this._destroy$.next(true);
    this.currentImage = imageItem;
    this._startTicks(5000);
  }
  
}
