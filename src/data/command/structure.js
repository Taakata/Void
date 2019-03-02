/**
 * This class is a structure
 */

export class Command {
    constructor(bot) {
        this.bot = bot

    }

    md(type, context) {
        return `\`\`\`${type}\n${context}\`\`\``;
    }

    type(context) {
        return typeof context;
    }

}
