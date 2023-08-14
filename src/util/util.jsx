export const isExistBuyer = (key) => {
    return localStorage.getItem(key) !== null;
}

export const getItem = (key) => {
    if(localStorage.getItem(key)===undefined){
        return ;
    }else{
        return JSON.parse(localStorage.getItem(key));
    }
}

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}