import { sheetbase } from '@sheetbase/server';

import appRoutes from './routes/index';

const Sheetbase = sheetbase({
    allowMethodsWhenDoGet: true, // for dev, should remove when in production
});

appRoutes();

export { Sheetbase };