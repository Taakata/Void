import { TimerUtils } from './util/timerUtils'

export class Cooldown extends TimerUtils {

    /**
     *
     * @param user
     * @returns {*}
     */

    add(user) {
        return this.set(user);
    }

    del(user) {
        return this.delete(user)
    }

    get() {
        return this.getTimer();
    }

}
