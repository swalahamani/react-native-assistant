/******************************************
 *  Author : Muhammad Swalah A A   
 *  Created On : Fri Oct 25 2019
 *  File : component.js
 *******************************************/
const {
    Command,
    flags
} = require('@oclif/command');

class Component extends Command {
    async run() {
        const {flags} = this.parse(Component);

        const {
            // name of component going to create.
            name
        } = flags;


    }
}

Component.description = `Creates a new class based state-full react-native
component`;

Component.flags = {
    // defining -n flag for specifying component name.
    name: flags.string({
        char: 'n',
        description: "name of component"
    })
}

module.exports = Component;