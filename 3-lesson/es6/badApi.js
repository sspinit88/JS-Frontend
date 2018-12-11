export {userReg, userData, userAuth};

function userReg(onSuccess, onError) {
    window.setTimeout(() => {
        if (Math.random() > 0.2) {
            onSuccess({
                msg: '+ registration',
                id: 1
            })
        }
        else {
            onError({msg: 'error'});
        }
    }, 500)
}

function userAuth(id, onSuccess, onError) {
    window.setTimeout(() => {
        if (Math.random() > 0.2) {
            onSuccess({
                msg: '+ auth' + id,
                token: 'any text'
            })
        }
        else {
            onError({msg: 'error'});
        }
    }, 500)
}

function userData(token, onSuccess, onError) {
    window.setTimeout(() => {
        if (Math.random() > 0.2) {
            onSuccess({
                msg: '+ data by token' + token,
                data: {
                    id: 1,
                    name: 'Some'
                }
            })
        }
        else {
            onError({msg: 'error'});
        }
    }, 500)
}
