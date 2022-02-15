import { Component } from '@angular/core';

export interface Sound {
  id: number;
  isGym: boolean;
}

const NUMBER_OF_SOUND : number = 31;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gym-or-sex';

  hasStarted: boolean = false;
  hasLost: boolean = false;
  score: number = 0;
  currentSoundNumber: number = Math.floor(Math.random() * (NUMBER_OF_SOUND + 1)); //Random between 0 and NUMBER_OF_SOUND

  soundDatabase: Sound[] = [
    {
      id: 0,
      isGym: true
    },
    {
      id: 1,
      isGym: true
    },
    {
      id: 2,
      isGym: true
    },
    {
      id: 3,
      isGym: true
    },
    {
      id: 4,
      isGym: true
    },
    {
      id: 5,
      isGym: true
    },  
    {
      id: 6,
      isGym: true
    },
    {
      id: 7,
      isGym: true
    },
    {
      id: 8,
      isGym: true
    },
    {
      id: 9,
      isGym: true
    },
    {
      id: 10,
      isGym: true
    },
    {
      id: 11,
      isGym: true
    },  
    {
      id: 12,
      isGym: true
    },  
    {
      id: 13,
      isGym: true
    },  
    {
      id: 14,
      isGym: true
    },  
    {
      id: 15,
      isGym: true
    },  
    {
      id: 16,
      isGym: false
    },
    {
      id: 17,
      isGym: false
    },  
    {
      id: 18,
      isGym: false
    },  
    {
      id: 19,
      isGym: false
    },  
    {
      id: 20,
      isGym: false
    },  
    {
      id: 21,
      isGym: false
    },  
    {
      id: 22,
      isGym: false
    },  
    {
      id: 23,
      isGym: false
    },  
    {
      id: 24,
      isGym: false
    },  
    {
      id: 25,
      isGym: false
    },  
    {
      id: 26,
      isGym: false
    },  
    {
      id: 27,
      isGym: false
    },  
    {
      id: 28,
      isGym: false
    },  
    {
      id: 29,
      isGym: false
    },  
    {
      id: 30,
      isGym: false
    },
    {
      id: 31,
      isGym: false
    },    
  ];

  startGame(){
    this.hasStarted = true;
  }

  pickedGym(){
    if(this.soundDatabase[this.currentSoundNumber].isGym == true)
    {
      this.score++;
      this.nextSound();
    }
    else
      this.hasLost = true;
  }

  pickedSex(){
    if(this.soundDatabase[this.currentSoundNumber].isGym == false)
    {
      this.score++;
      this.nextSound();
    }
    else
      this.hasLost = true;
  }

  replay(){
    this.score = 0;
    this.hasLost = false;

    this.nextSound();
  }

  goBackToMenu(){
    this.score = 0;
    this.hasLost = false;
    this.hasStarted = false;

    this.nextSound();
  }

  private nextSound(){
    var audioPlayer = <HTMLVideoElement>document.getElementById("audioPlayer");

    var oldSoundNumber = this.currentSoundNumber;

    while(oldSoundNumber == this.currentSoundNumber)
      this.currentSoundNumber = Math.floor(Math.random() * (NUMBER_OF_SOUND + 1));
    
    if(audioPlayer)
      audioPlayer.play();
  }
}
