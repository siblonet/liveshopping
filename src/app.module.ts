import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MineindService } from './mineind/mineind.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { LiveModule } from './livertc/live.module';


const Upcase = {
  "A": "z",
  "B": "y",
  "C": "x",
  "D": "w",
  "E": "v",
  "F": "u",
  "G": "t",
  "H": "s",
  "I": "r",
  "J": "q",
  "K": "p",
  "L": "o",
  "M": "n",
  "N": "m",
  "O": "l",
  "P": "k",
  "Q": "j",
  "R": "i",
  "S": "h",
  "T": "g",
  "U": "f",
  "V": "e",
  "W": "d",
  "X": "c",
  "Y": "b",
  "Z": "a"
}




const Lowcas = {
  "a": "Z",
  "b": "Y",
  "c": "X",
  "d": "W",
  "e": "V",
  "f": "U",
  "g": "T",
  "h": "S",
  "i": "R",
  "j": "Q",
  "k": "P",
  "l": "O",
  "m": "N",
  "n": "M",
  "o": "L",
  "p": "K",
  "q": "J",
  "r": "I",
  "s": "H",
  "t": "G",
  "u": "F",
  "v": "E",
  "w": "D",
  "x": "C",
  "y": "B",
  "z": "A"
}



const Nu = {
  "1": 0,
  "2": 9,
  "3": 8,
  "4": 7,
  "5": 6,
  "6": 5,
  "7": 4,
  "8": 3,
  "9": 2,
  "0": 1
}

const Nus = {
  "1": "0",
  "2": "9",
  "3": "8",
  "4": "7",
  "5": "6",
  "6": "5",
  "7": "4",
  "8": "3",
  "9": "2",
  "0": "1"
}

const Sum = {
  "é": "|",
  "â": " ",
  "ô": "Ü",
  "î": "Ï",
  "ê": "Ë",
  "û": "Ö",
  "ë": "Ä",
  "ï": "ÿ",
  "ä": "ü",
  "ö": "ö",
  "ü": "ä",
  "ÿ": "ï",
  "Ä": "ë",
  "Ö": "û",
  "Ë": "ê",
  "Ï": "î",
  "Ü": "ô",
  " ": "â",
  "|": "é",
  "`": "@",
  "~": "§",
  "#": "<",
  "{": ">",
  "}": "£",
  "[": "%",
  "]": "µ",
  "§": "~",
  "µ": "]",
  "%": "[",
  "£": "}",
  ">": "{",
  "<": "#",
  "@": "`",
  "?": "+",
  "&": ".",
  "'": ",",
  "(": ";",
  "-": ":",
  "è": "!",
  "_": "*",
  "ç": "ù",
  "à": "$",
  ")": "^",
  "=": "=",
  "^": ")",
  "$": "à",
  "ù": "ç",
  "*": "_",
  "!": "è",
  ":": "-",
  ";": "(",
  ",": "'",
  ".": "&",
  "+": "?"
}

const dee = {
  "¨": "²",
  "²": "/"
}


function thisiswhat(eee: any): any {
  let dof = "";
  [...eee].forEach(en => {
    dof += Upcase[`${en}`];
    dof += Lowcas[`${en}`];
    //dof+=Nu[`${en}`];
    dof += Sum[`${en}`];
    dof += dee[`${en}`];
    dof += Nus[`${en}`];

  })
  const adaa = dof.replaceAll("undefined", "");
  //console.log(adaa);
  return adaa;
}


@Module({
  imports: [
    LiveModule,
    /*ConfigModule.forRoot(),
    MongooseModule.forRoot(thisiswhat(process.env.DATA_HANDLER))*/
  ],
  controllers: [AppController],
  providers: [AppService, MineindService],
})
export class AppModule { }
