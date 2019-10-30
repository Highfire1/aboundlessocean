import nengi from 'nengi'
import NetLog from './NetLog.js'
import PlayerCharacter from './PlayerCharacter.js'
import PlayerInput from './PlayerInput.js'

const config = {
    UPDATE_RATE: 20, 

    ID_BINARY_TYPE: nengi.UInt16,
    TYPE_BINARY_TYPE: nengi.UInt8, 

    ID_PROPERTY_NAME: 'nid',
    TYPE_PROPERTY_NAME: 'ntype', 

    USE_HISTORIAN: true,
    HISTORIAN_TICKS: 40,

    protocols: {
        entities: [
            ['PlayerCharacter', PlayerCharacter]
        ],
        localMessages: [],
        messages: [
            ['NetLog', NetLog]
        ],
        commands: [
            ['PlayerInput', PlayerInput]
        ],
        basics: []
    }
}

export default config
