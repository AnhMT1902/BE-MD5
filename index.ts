import express from "express";
import fileUpload from "express-fileupload"
import cors from "cors";
import {router} from "./src/router/router";
import {AppDataSource} from "./src/data-source";

const app = express()
app.use(fileUpload({
    createParentPath: true
}));

app.use(express.static('public'));
app.use(express.json())

app.use(cors());
app.use('', router)
app.listen(3000, () => {
    console.log('server running localhost 3000');
})