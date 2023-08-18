const app = require('./app');
const PORT = process.env.PORT || 3000;
const path = require('path');
const conn = require(__dirname+'/database/conn');

conn.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log('Server on PORT:', PORT);
    });
})
.catch((error) => {
    console.log(error)
});
