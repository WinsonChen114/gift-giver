const { BadRequestError } = require("../utils/errors")

class GiftExchange {

    //Accepts an array of strings
    static async pairs(names) {

        if (names.length % 2 !== 0) {
            throw new BadRequestError('The number of names should be even!')
        }

        //randomized name array
        let random = []

        //capture number of names
        let num_names = names.length

        for (let i = 0; i < num_names / 2; i++) {
            //gets index of first name in pair
            let remove_index_1 = Math.floor(Math.random() * names.length)
            //removes name from possible names to pick, and saves the removed name in a variable
            let name_1 = names.splice(remove_index_1, 1)[0]

            let remove_index_2 = Math.floor(Math.random() * names.length)
            //removes name from possible names to pick, and saves the removed name in a variable
            let name_2 = names.splice(remove_index_2, 1)[0]

            let name_tuple = [name_1, name_2]
            random.push(name_tuple)

        }
        return random

    }
    static async traditional(names) {

    }
}

module.exports = GiftExchange