const Express = require('express');
const path = require('path');

const PORT = 3000;

const Api = new Express();

Api.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'index.html'));
});

Api.listen(PORT, () => {
    console.log(`App A at ${PORT}`);
})