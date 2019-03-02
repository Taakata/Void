export class TimerUtils {

    /**
     * @param user
     * @param users
     * @param timer
     */

    constructor() {
        this.users = []
        this.timer = false
    }

    set(user) {
        this.users.push(user.id)
        return this.timer = true;
    }

    delete(user) {
        this.users.remove(user.id)
        return this.timer = false;
    }

    get() {
        return this.users;
    }

    getTimer() {
        return this.timer;
    }

}
