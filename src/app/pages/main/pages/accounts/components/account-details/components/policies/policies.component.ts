import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-policies',
  imports: [],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoliciesComponent implements OnInit {
  public policiesSignal = signal(null);
  constructor(
    
  ) {}

  public get policies(): any {
    return this.policiesSignal();
  }

  ngOnInit(): void {
    
  }
}