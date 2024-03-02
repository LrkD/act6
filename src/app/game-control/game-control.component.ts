// game-control.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() tick = new EventEmitter<number>();
  @Output() gameStarted = new EventEmitter<void>();
  @Output() gameStopped = new EventEmitter<void>();

  isRunning: boolean = false;
  intervalId: any;
  counter: number = 0;

  startGame() {
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.counter++;
      this.tick.emit(this.counter);
    }, 1000);
    this.gameStarted.emit();
  }

  stopGame() {
    clearInterval(this.intervalId);
    this.isRunning = false;
    this.gameStopped.emit();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
