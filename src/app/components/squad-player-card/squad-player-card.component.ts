import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-squad-player-card',
  templateUrl: './squad-player-card.component.html',
  styleUrl: './squad-player-card.component.scss',
})
export class SquadPlayerCardComponent {
  @Input() player!: Player;
}
