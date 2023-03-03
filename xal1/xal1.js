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
    constructor(input, key) {
        if (!input instanceof Buffer) {
            throw new Error('Input must be a \'Buffer\' instance.')
        }

        if (!(/^[\x00-\x7F]*$/.test(key))) {
            throw new Error('Key must be type \'Ascii\'')
        }

        
    }
}