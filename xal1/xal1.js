/* 
     ___    ___ ________  ___     _____     
    |\  \  /  /|\   __  \|\  \   / __  \    
    \ \  \/  / | \  \|\  \ \  \ |\/_|\  \   
     \ \    / / \ \   __  \ \  \\|/ \ \  \  
      /     \/   \ \  \ \  \ \  \____\ \  \ 
     /  /\   \    \ \__\ \__\ \_______\ \__\
    /__/ /\ __\    \|__|\|__|\|_______|\|__|
    |__|/ \|__|

    license : AGPL-3.0
    Author  : Reece Harris <reeceharris@email.com>
*/

module.exports = class {
    constructor(key) {
        if (!(/^[\x00-\x7F]*$/.test(key))) {
            throw new Error('Key must be type \'Ascii\'')
        }
        this.key = key
    }

    encrypt(buffer) {
        if (!buffer instanceof Buffer) {
            throw new Error('buffer must be a \'Buffer\' instance.')
        }
    }

    decrypt(input) {
        if (typeof input === 'string' || input instanceof String) {
            throw new Error('input must be type \'String\'.')
        }
    }
}