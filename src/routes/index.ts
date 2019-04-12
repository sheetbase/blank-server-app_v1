import { Sheetbase } from '../index';

export default () => {

    const app = Sheetbase.Router;

    app.get('/', (req, res) => {
        return res.html('<h1>Sheetbase Blank Backend</h1>');
    });

    app.post('/', (req, res) => {
        return res.success({
            title: 'Sheetbase Blank Backend',
        });
    });

};
