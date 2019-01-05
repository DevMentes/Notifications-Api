const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const axios = require('axios');

app.get('/', (req, res) => res.send('Hello world'));

app.post('/message', async(req, res) => {

    try{
        let response = await axios.post(
            'https://hooks.slack.com/services/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',
            {
                text: req.body.message
            }
        );
        res.json(
            {
                'message':response
            }
            );
    }catch (error) {
        res.json(
            {
                'error':error.message
            }
        );
    }
});
app.listen(port, () => console.log(`App listening from port ${port}`));