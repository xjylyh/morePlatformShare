const express = require('express');
const app = express();
app.use(express.static('./'));
app.get('/',(req,res)=>{
    res.end('??');
})
app.listen(8888,()=>{
    console.log('server is run in 8...')
});