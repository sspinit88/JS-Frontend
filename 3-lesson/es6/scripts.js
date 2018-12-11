/*--------------------*/
/*--- try... catch ---*/
/*--------------------*/

import {mathOp} from "./math";

function mathRun() {
    try {
        let res = mathOp(1, 2, '+') + mathOp(1, parseInt(Math.random() * 2), '/');
        console.log(res);
        return res;
    }
    catch (e) {
        console.log(e.message);
    }
    finally {
        console.log('math done!');
        /*
        В блок finally помещают код, который гарантированно должен быть вызван (кроме случаев завершения работы JVM или текущего потока посреди блоков try и catch). Таким кодом, например, является закрытие использованных в блоке try ресурсов для предотвращения утечек. В случае UI - например, индикатор загрузки.
        Блок finally выполнится перед выходом из блока try/catch.
        */
    }
}

// mathRun();

/*---------------*/
/*--- BadApi ----*/
/*---------------*/

// import * as BadApi from './badApi';
//
// BadApi.userReg((res) => {
//         console.log(res);
//         BadApi.userAuth(res.id, (resAuth) => {
//             console.log(resAuth);
//             BadApi.userData(resAuth.token, (resData) => {
//                 console.log(resData);
//             }, (rejData) => {
//                 console.log(rejData.msg)
//             })
//         }, (rejAuth) => {
//             console.log(rejAuth.msg)
//         });
//     },
//     (rej) => {
//         console.log(rej.msg)
//     }
// );


/*---------------*/
/*--- promise ---*/
/*---------------*/

/*V-1*/
// let some = new Promise(function (resolve, reject) {
//     window.setTimeout(() => {
//         let num = Math.random();
//         num > 0.5 ? resolve(num) : reject(`Ошибка! ${num}`);
//     }, 200);
// });
//
// some.then(
//     (good) => {
//         console.log(`YES: ${good}`);
//     },
//     (bad) => {
//         console.log(bad);
//     }
// );


/*V-2*/

// import * as PromiseApi from './api-promise';
//
// PromiseApi.userReg()
//     .then(
//         (resUserReg) => {
//             console.log(resUserReg);
//             return PromiseApi.userAuth(resUserReg.id);
//             // что вернем, то и попадет в следующий then();
//         })
//     .then( // в then() вторым параметром можно передать функцию с обработкой ошибки
//         (resUserAuth) => {
//             console.log(resUserAuth);
//             return PromiseApi.userData(resUserAuth.token);
//     })
//     .then(
//         (resUserData) => {
//             console.log(resUserData);
//         }
//     )
//     // обработка ошибок - catch() - метод, присутствующий в цепочке из then() и срабатывающий в не зависимости от
//     // того в каком promise был вызван reject.
//     .catch(
//         (e) => {
//             console.log(e.msg);
//         }
//     );


/*---------------*/
/*---- async ----*/
/*---------------*/

import 'babel-polyfill';
import * as AsyncApi from './api-async';

async function userProccess() {
    // await дождется пока promise отработает и подставит в него результат
    let resUserReg = await AsyncApi.userReg();
    // console.log(resUserReg);

    let resUserAuth = await AsyncApi.userAuth(resUserReg.id);
    // console.log(resUserAuth);

    let resUserData = await AsyncApi.userData(resUserAuth.token);
    // console.log(resUserData);

    return resUserData.data;
}

// userProccess() возвращает promise
userProccess()
    .then(
        (data) => {
            console.log(data);
        }
    )
    .catch(
        (err) => {
            console.log(err);
            console.log(err.message);
        }
    );

