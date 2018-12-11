export {userReg, userData, userAuth};

function TimeoutPromise(time){
    return new Promise(function (resolve) {
        window.setTimeout(resolve, time);
    });
}

function userReg() {
    return new Promise(function (resolve, reject) {
        TimeoutPromise(500).then(() => {
            if (Math.random() > 0.2) {
                resolve({
                    msg: '+ registration',
                    id: 1
                })
            }
            else {
                reject({msg: 'error in Reg'});
            }
        }, 500)
    });
}

function userAuth(id) {
    return new Promise(function (resolve, reject) {
        window.setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve({
                    msg: '+ auth' + id,
                    token: 'any text'
                })
            }
            else {
                reject({msg: 'error in Auth'});
            }
        }, 500)
    });
}

function userData(token) {
    return new Promise(function (resolve, reject) {
        window.setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve({
                    msg: '+ data by token' + token,
                    data: {
                        id: 1,
                        name: 'Some'
                    }
                })
            }
            else {
                reject({msg: 'error in Data'});
            }
        }, 500)
    });
}
