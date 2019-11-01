"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <form method='post'>\n      <div>\n        <label>Email</label>\n          <input name='email' />\n      </div>\n      <div>\n        <label>Password</label>\n          <input name='password' type='password' />\n      </div>\n      <button>Login</button>\n    </form>\n\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password) {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Email and Password were not valid');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href=\"/logout:>Logout</a>\n      </div>\n    ");
    }
});
