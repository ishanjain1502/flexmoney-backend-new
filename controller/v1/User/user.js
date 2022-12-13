const isValid = (user) => {

    return user != undefined && user.email != undefined && user.name != undefined;
}
const isValid1 = (user) => {

    return user != undefined && user.email != undefined ;
}


exports.isValid = isValid;
exports.isValid1 = isValid1;