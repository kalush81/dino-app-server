const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors');
const bodyParser = require('body-parser')
const { Router } = require('express')

const middleWare = cors();
app.use(middleWare);

const router = new Router();
app.use(router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const dinos = [
    {
        "description": "Herbivore, Quadrupedal",
        "geological_era": "CRETACEOUS",
        "height": "1.80",
        "id": 1,
        "image": "https://vignette.wikia.nocookie.net/ppba/images/e/ea/Acanthopholis222_29db.jpg/revision/latest?cb=20181123195027",
        "name": "Acanthopholis",
        "region": "Europe",
        "weight": 380
    },
    {
        "description": "Carnivore, Bipedal",
        "geological_era": "CRETACEOUS",
        "height": "5.50",
        "id": 2,
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Theropod_courtship.jpg",
        "name": "Acrocanthosaurus",
        "region": "North America",
        "weight": 2500
    },
    {
        "description": "Herbivore, Quadrupedal",
        "geological_era": "CRETACEOUS",
        "height": "0.80",
        "id": 3,
        "image": "https://www.extinctanimals.org/wp-content/uploads/2015/09/Protoceratops-Pictures.jpg",
        "name": "Protoceratops",
        "region": "Asia",
        "weight": 408
    },
    {
        "description": "Carnivore, Bipedal",
        "geological_era": "TRIASSIC",
        "height": "0.80",
        "id": 8,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Procompsognathus.jpg/440px-Procompsognathus.jpg",
        "name": "Procompsognathus",
        "region": "Europe",
        "weight": 0
    },
    {
        "description": "Herbivore, Quadrupedal",
        "geological_era": "TRIASSIC",
        "height": "3.00",
        "id": 9,
        "image": "https://images.fineartamerica.com/images-medium-large-5/plateosaurus-daniel-eskridge.jpg",
        "name": "Plateosaurus",
        "region": "Europe, Africa and Nova Scotia",
        "weight": 1814
    },
    {
        "description": "carnivore, reptile",
        "geological_era": "TRIASSIC",
        "height": "6.00",
        "id": 10,
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Tanystropheus_NT_small.jpg",
        "name": "Tanystropheus",
        "region": "Europe",
        "weight": 140
    },
    {
        "description": "The Dilophosaurus was built lightweight, slender, and fast. It probably fed off of smaller animals, as it was not built to confront, kill, and eat larger prey.",
        "geological_era": "JURASSIC",
        "height": "1.50",
        "id": 11,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Dilophosaurus_wetherilli.jpg/1200px-Dilophosaurus_wetherilli.jpg",
        "name": "Dilophosaurus",
        "region": "North America",
        "weight": 500
    },
    {
        "description": "The Allosaurus was a large carnivorous dinosaur that walked on two legs and had two arms on the front of its body.",
        "geological_era": "JURASSIC",
        "height": "5.00",
        "id": 12,
        "image": "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium-5/an-allosaurus-and-a-hypsilophodon-find-yuriy-priymak.jpg",
        "name": "Allosaurus",
        "region": "Europe, North America",
        "weight": 14000
    },
    {
        "description": "Among the best-known sauropods, Diplodocus were very large, long-necked, quadrupedal animals, with long, whip-like tails.",
        "geological_era": "JURASSIC",
        "height": "11.00",
        "id": 13,
        "image": "http://3.bp.blogspot.com/--0nX9rMVYgM/WovQdkvH43I/AAAAAAAADOw/WI50PEq1boosyu-kCDNR5GkyMHKzflBtACK4BGAYYCw/s1600/Diplodocus%2Bmural%2Bweb%2Bres%2B%25C2%25A9%2BM.%2BWitton%2B2018.jpg",
        "name": "Diplodocus",
        "region": "North America",
        "weight": 113398
    }
]

app.listen(port, () => {console.log('helloooo!!')});
router.get('/dinos', (request, response) => response.send([...dinos]));
router.get('/dinos/:dinoId', (req, res) => {
    const dinoId = req.params.dinoId
    const dino = dinos.find(d => d.id == dinoId)
    res.json(dino)
})