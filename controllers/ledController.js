const Led = require('../models/LedSchema');

function getAllLeds(req, res) {
    Led.find()
        .then((leds) => res.status(200).json(leds))
        .catch((error) => res.status(500).json({error: error}));
}

function getLed(req, res) {
    Led.findById(req.body.id)
        .then((led) => res.status(200).json(led))
        .catch((error) => res.status(500).json({error: error}));
}

function getLedLight(req,res) {
    Led.findById(req.body.id)
        .then((led) => res.status(200).json(led.light))
        .catch((error) => res.status(500).json({error: error}));
}

function getLedState(req, res) {
    Led.findById(req.body.id)
        .then((led) => res.status(200).json(led.isOn))
        .catch((error) => res.status(500).json({error: error}));
}

function getLedColor(req,res) {
    Led.findById(req.body.id)
        .then((led) => res.status(200).json(led.color))
        .catch((error) => res.status(500).json({error: error}));
}

function setLedState(req,res) {
    Led.findById(req.body.id)
        .then((led) => {
            led.isOn = req.body.state;
            led.save();
            res.status(200).json(led);
        })
        .catch((error) => res.status(500).json({error: error}));
}

function setLedLight(req,res) {
    Led.findById(req.body.id)
        .then((led) => {
            led.light = req.body.light;
            led.save();
            res.status(200).json(led);
        })
        .catch((error) => res.status(500).json({error: error}));
}

function setLedColor(req,res) {
    Led.findById(req.body.id)
        .then((led) => {
            led.color.setRed(req.body.red);
            led.color.setGreen(req.body.green);
            led.color.setBlue(req.body.blue);
            led.save();
            res.status(200).json(led);
        })
        .catch((error) => res.status(500).json({error: error}));
}

module.exports = { getAllLeds: getAllLeds, 
    getLed: getLed, 
    getLedLight: getLedLight,
    getLedState: getLedState, 
    getLedColor: getLedColor, 
    setLedState: setLedState,
    setLedColor: setLedColor,
    setLedLight: setLedLight
};
