import { Component, OnInit } from '@angular/core';
import { DUMMY_PLAYERS } from 'src/app/assets/dummy-players';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrl: './squad.component.scss',
})
export class SquadComponent implements OnInit {
  protected players: Player[] = DUMMY_PLAYERS;
  protected goalkeepers: Player[] = [];
  protected defenders: Player[] = [];
  protected midfielders: Player[] = [];
  protected attackers: Player[] = [];

  public ngOnInit(): void {
    this.goalkeepers = this.players.filter(
      (player) => player.position === 'Goalkeeper'
    );
    this.defenders = this.players.filter(
      (player) => player.position === 'Defender'
    );
    this.midfielders = this.players.filter(
      (player) => player.position === 'Midfielder'
    );
    this.attackers = this.players.filter(
      (player) => player.position === 'Attacker'
    );
  }
}
