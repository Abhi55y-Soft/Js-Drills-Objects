function defaults(object, newObject){
    for (let name in newObject){
        if (!(object.hasOwnProperty(name))){
            object[name] = newObject[name];  
        }
    }
}
module.exports.defaults = defaults;