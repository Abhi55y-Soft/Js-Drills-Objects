function invert(object){
    let newObject = {};
    for (let name in object){
        newObject[object[name]] = name;
    }
    return newObject;
}
module.exports.invert = invert;