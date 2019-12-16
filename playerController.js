// playerController.js
// Import player model
Player = require('./playerModel');
// Handle index actions
exports.index = function (req, res) {
    Player.get(function (err, players) {
        console.log('got request');
        if (err) {
            console.log("error");
            res.json({
                status: "error",
                message: err,
            });
        }
        console.log("success?");
        res.json({
            status: "success",
            message: "players retrieved successfully",
            data: players
        });
    });
};
// Handle create player actions
exports.new = function (req, res) {
    var player = new Player();
    player.name = req.body.name ? req.body.name : player.name;
    player.score = req.body.score;
// save the player and check for errors
    player.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New player created!',
            data: player
        });
    });
};
// Handle view player info
exports.view = function (req, res) {
    Player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
        res.json({
            message: 'player details loading..',
            data: player
        });
    });
};
// Handle update player info
exports.update = function (req, res) {
Player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
player.name = req.body.name ? req.body.name : player.name;
        player.score = req.body.score;
// save the player and check for errors
        player.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'player Info updated',
                data: player
            });
        });
    });
};
// Handle delete player
exports.delete = function (req, res) {
    Player.remove({
        _id: req.params.player_id
    }, function (err, player) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'player deleted'
        });
    });
};