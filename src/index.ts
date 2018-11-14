import { sheetbase } from '@sheetbase/core-server';

import homeRoutes from './routes/index';

export const Sheetbase = sheetbase({
    allowMethodsWhenDoGet: true, // for dev, should remove when in production
});

homeRoutes();
