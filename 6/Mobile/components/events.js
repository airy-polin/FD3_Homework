'use strict'

import { EventEmitter } from 'events';

let myEvents = new EventEmitter();

// myEvents description:
// event "EEditClient"
// event "EDeleteClient"
// event "ECancelChanges"
// event "ESaveChanges"
// event "EAddNewClient"

export { myEvents };