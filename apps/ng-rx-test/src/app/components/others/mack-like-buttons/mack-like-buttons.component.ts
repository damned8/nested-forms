import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'monorepo-mack-like-buttons',
  templateUrl: './mack-like-buttons.component.html',
  styleUrls: ['./mack-like-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MackLikeButtonsComponent {
  @Output() public redClick = new EventEmitter();
  @Output() public yellowChick = new EventEmitter();
  @Output() public greenClick = new EventEmitter();

  onClickRed(): void {
    this.redClick.emit();
  }

  onClickYellow(): void {
    this.yellowChick.emit();
  }

  onClickGreen(): void {
    this.greenClick.emit();
  }
}
