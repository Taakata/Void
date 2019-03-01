/**
 * Dependencies area
 */

import { Client, Collection } from 'discord.js'

import { Cooldown } from './ext/cooldown'
import { Perms } from './ext/perms'

/**
 * Class area
 */

export class Void extends Client {

    /**
     *
     * @param options param of the constructor
     */
     
    constructor(options = {}) {
        super();
        this.token = options.token
        this.cd = options.cd
        this.prefix = options.prefix
        this.cPath = options.cPath
        this.sPath = options.sPath
        this.lPath = options.lPath

        this.commands = new Collection()
        this.subCommands = new Collection()
        this.listeners = []

        this.cd = new Cooldown()
        this.perms = new Perms()

        /**
         *
         * @returns {string}
         */

        String.prototype.firstUpper = function () {
            let s = this.split('');
            s[0] = s[0].toUpperCase();
            return s.join('');
        }

        /**
         *
         * @returns {*}
         */

        Array.prototype.random = function () {
            return this[Math.floor(Math.random() * this.length)];
        }

    }

    start() {
        return this.login(this.token);
    }

    stop() {
        return this.destroy();
    }

    restart() {
        this.stop()
        return this.start();
    }

}

