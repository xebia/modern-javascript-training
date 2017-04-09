import a from './modules/lib-a';
import * as b from './modules/lib-b';
import { foo } from './modules/lib-c';

import log from './modules/log';

log('import a from "./modules/lib-a";', a);
log('import * as b from "./modules/lib-b";', { ...b });
log('import { foo } from "./modules/lib-c";', foo);
