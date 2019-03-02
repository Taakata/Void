require('dotenv').config()
import { Void } from './Void'

/**
 *
 * @type {Void}
 */

let bot = new Void({
    token: process.env.TOKEN,
    cd: 3000,
    prefix: 'void ',
    cPath: '../commands',
    sPath: '../subcommands',
    lPath: '../listeners'
})

bot.start()
