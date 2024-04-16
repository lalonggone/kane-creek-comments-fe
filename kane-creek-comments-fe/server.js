const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Kane Creek Comments';

app.get('/', (request, response) => {
    response.send('Welcome to Kane Creek Comments!');
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});