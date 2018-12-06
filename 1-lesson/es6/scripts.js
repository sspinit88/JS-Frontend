import 'babel-polyfill';

// import counter from './some.js'
// import * as counter from './some.js'
import {cnt} from './some.js'
import {inc} from './some.js'

import {gen} from './gen.js'




let elem = document.querySelector('.test');
elem.innerHTML = 'test-page';
elem.style.cssText = 'border: 1px solid red; text-align: center; font-size: 20px';

console.log(cnt);
inc();
inc();
inc();
console.log(cnt);


/*Symbol*/

let forName1 = Symbol("name");
let otherName1 = Symbol("name");
// // Symbol не равен Symbol
// console.log(forName1 === otherName1);

let pasport = Symbol();

let user = {
    firstName: 'Name',
    lastName: 'User',
    [pasport]: '6543218'
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`)
}

console.log(user[pasport]);

/*Итераторы*/

let someObj = {
    to: 10,
    [Symbol.iterator]: function () {

        let current = 0;
        let stop = this.to;

        return {
            next() {
                if (current <= stop) {
                    return {
                        done: false,
                        value: current++
                    }
                }
                else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
};

for (let some of someObj) {
    console.log(some);
}

/*Генераторы*/

let someGen = gen(1, 5);

for ( let some of someGen){
    console.log(some);
}

