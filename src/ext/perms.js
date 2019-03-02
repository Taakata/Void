import { PermissionsUtils } from './util/permissionsUtils'

export class Perms extends PermissionsUtils {

    /**
     *
     * @param m
     * @param c
     * @returns {boolean}
     */

    get(m, c) {
        return this.take(m, c)
    }

}
