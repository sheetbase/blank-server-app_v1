import { Sheetbase } from '..';

export default () => {
    const app = Sheetbase.Router;

    app.get('/', (req, res) => {
        return res.html(
            '<h1>Sheetbase Blank Backend</h1>' +
            '<p>Homepage: <a href="https://sheetbase.net">https://sheetbase.net</a></p>' +
            '<p>Docs: <a href="https://sheetbase.net/docs">https://sheetbase.net/docs</a></p>',
        );
    });

    app.post('/', (req, res) => {
        return res.success({
            title: 'Sheetbase Blank Backend',
            homepage: 'https://sheetbase.net',
            docs: 'https://sheetbase.net/docs',
        });
    });

};
