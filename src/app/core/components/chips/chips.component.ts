import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from '@core/directives/input.directive';
import { FilterConfigModel } from '@core/models';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@core/directives/button.directive';

@Component({
  selector: 'app-chips',
  imports: [CommonModule, InputDirective, ReactiveFormsModule, ButtonDirective],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsComponent {
  @Input() chips: FilterConfigModel[] | null = null;
  @Input() isAddAble = false;
  public isAddNew = signal(false);
  public inputControl = new FormControl();

  public addChip(): void {
    this.isAddNew.set(true);
  }

  public onEnterKey(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.inputControl.value) {
      const newChip = {
        value: this.inputControl.value,
        display: this.inputControl.value,
      };
      this.chips = this.chips ? [...this.chips, newChip] : [newChip];
      this.inputControl.reset();
      this.isAddNew.set(false);
    }
  }
}
