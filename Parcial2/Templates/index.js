const express = requiere('express');
const path = requiere('path');
const pug = requiere('pug');
const app = express();
const cors = requier('cors');

app.use(cors())
app.set('view engine', 'pug');
app.set('views', path.join(_diname, 'views'));

app.get('/', (req,res) =>{
    console.log(req, )
})