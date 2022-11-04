const express = require('express');
const { wrapAsync } = require('../lib/utils');
const userService = require('../services/user');

const router = express.Router();

router.use((req, res, next) => {
	// eslint-disable-next-line no-console
	console.log(`USER API - ${req.method} request for ${req.url}`);
	next();
});

router.get('/',
	wrapAsync(async (req, res) => {
		try {
			const users = await userService.getAllUsersFromJSON();
			return res.json(users);
		} catch (err) {
			return res.status(500).json({ error: err.message });
		}
	}));

router.post('/', wrapAsync(async (req, res) => {
	const user = req.body;
	await userService.createUser(user);
	return res.json(user);
}));

module.exports = router;
