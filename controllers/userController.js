const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


function signup(req, res)
{
    bcrypt.hash(req.body.password, 10)
		.then(hash => {
			const user = new User({
				name: req.body.name,
				password: hash
			});
			user.save()
				.then((savedUser) => res.status(200).json(savedUser))
				.catch(error => res.status(500).json({ error: error }));
		})
		.catch(error => res.status(500).json({ error:error }));
}

function login(req, res)
{
    
    User.findOne({ name: req.body.name })
		.then(user => {
			if (user === null) 
			{
				return res.status(404).json({ error: 'User not found !' });
			}
			bcrypt.compare(req.body.password, user.password)
				.then(valid => {
					if (!valid) 
					{
						return res.status(401).json({ error: 'Wrong password !' });
					}
                    const tokenUser = jwt.sign({userId: user.id}, 'secret_key', {expiresIn: "1h"});
					res.status(200).json({userId: user._id, token: tokenUser});
				})
			.catch(error => res.status(500).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
}

module.exports = { signup: signup, login: login};