import data from './data.json' with {type: 'json'}
import { SelectManager } from './SelectManager.js';
import { ViewElement } from './ViewElement.js';

const manager = new SelectManager(data.questions);
const view = new ViewElement(manager);
view.appendTo(document.body);
manager.play();