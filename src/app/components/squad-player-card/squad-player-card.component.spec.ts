import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadPlayerCardComponent } from './squad-player-card.component';

describe('SquadPlayerCardComponent', () => {
  let component: SquadPlayerCardComponent;
  let fixture: ComponentFixture<SquadPlayerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquadPlayerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquadPlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
