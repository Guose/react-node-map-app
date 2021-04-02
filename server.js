const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/about", function(req, res) {
    const data = [
        {
            id: "1",
            name: "Yoel",
            address: "California"
        },
        {
            id: "2",
            name: "Lelia",
            address: "Texas"
        },
        {
            id: "3",
            name: "Justin",
            address: "Washington"
        },
        {
            id: "4",
            name: "Nithin",
            address: "Washington"
        },
        {
            id: "5",
            name: "Sara",
            address: "Washington"
        }
    ]
    res.send(data);
});

app.listen('3001', function() {
    console.log('Port running on 3001');
})