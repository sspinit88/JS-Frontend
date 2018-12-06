import 'babel-polyfill';
import {getWords} from './generator';


let itemText = ' Всем привет! Ура, ура! ';

for(let word of getWords(itemText)){
    console.log(word);
}

