const { BadRequestError } = require("../utils/errors")

class GiftExchange {

    //Accepts an array of strings
    static pairs(names) {

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
    static traditional(names) {
        //randomized name array
        let random = []
        //array for strings
        let random_string = []

        //capture number of names
        let num_names = names.length

        for (let i = 0; i < num_names; i++) {
            //gets index of a name
            let remove_index = Math.floor(Math.random() * names.length)
            //removes name from possible names to pick, and saves the removed name in a variable
            let remove_name = names.splice(remove_index, 1)[0]

            random.push(remove_name)
        }
        for(let i = 0; i < random.length; i++)
        {
            if(i !== random.length - 1)
            {
                random_string.push(random[i]+" is giving a gift to "+random[i+1])
            }
            //last person gives gift to first person
            else{
                random_string.push(random[i]+" is giving a gift to "+random[0])
            }
        }

        return random_string
    }
}

module.exports = GiftExchange