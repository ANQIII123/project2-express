// SETUP BEGINS
require("dotenv").config();
const mongoUrl = process.env.MONGO_URL;

const express = require("express");
const cors = require("cors");

const ObjectId = require("mongodb").ObjectId;
const MongoUtil = require("./MongoUtil.js");

let app = express();
// !! Enable processing JSON data
app.use(express.json());
// !! Enable CORS
app.use(cors());
// SETUP END

async function main() {
    db = await MongoUtil.connect(mongoUrl, "wrong");
}



app.get("/get_all_sheet"), async (req, res) => {
    let db = MongoUtil.getDB();

    try {
        let result = await db.collection("cover").find({
            '_id': new ObjectId('62c7c495d286549d4486084c')
        });
        res.status(200);
        res.send('testing');
    } catch {
        res.status(500);
        res.send({
            error: "Internal server error. Please contact administrator"
        });
        console.log(e);
    }


}

app.post("/free_food_sighting", async (req, res) => {
    // the document must have
    // description: a brief of description what the free food has
    // food: an array of short phrases (no more than 100 characters) about
    // what the free food has
    // datetime: when is it sighted (default to the NOW -- current date
    // time, must be the YYYY-MM-DD format)
    let description = 'my desc';
    let food = 'my food';
    try {
        // tell mongo to insert the document
        let result = await db.collection("free_food_sightings").insertOne({
            description: description,
            food: food,
            datetime: datetime
        });
        res.status(200);
        res.send(result);
    } catch (e) {
        res.status(500);
        res.send({
            error: "Internal server error. Please contact administrator"
        });
        console.log(e);
    }
});

main();

// START SERVER
app.listen(3000, () => {
    console.log("Server has started");
});