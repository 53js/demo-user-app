const fs = require('node:fs');

const getAllUsersFromJSON = () => new Promise((resolve, reject) => {
	fs.readFile(`${__dirname}/../data/users.json`, 'utf8', (err, data) => {
		if (err) {
			reject(new Error('Unable to get users'));
		}
		try {
			const parsed = JSON.parse(data);
			resolve(parsed);
		} catch (e) {
			reject(new Error(e));
		}
	});
});

const createUser = (user) => new Promise((resolve, reject) => {
	fs.readFile(`${__dirname}/../data/users.json`, 'utf8', (err, data) => {
		if (err) {
			reject(new Error('Unable to get users'));
		}
		try {
			const users = JSON.parse(data);
			users.sort((a, b) => a.id - b.id);
			const lastId = users[users.length - 1]?.id || 0;
			users.push({ ...user, id: lastId + 1 });
			fs.writeFile(`${__dirname}/../data/users.json`, JSON.stringify(users), (errW) => {
				if (errW) {
					reject(new Error('Unable to write to users.json'));
				}
				resolve(user);
			});
		} catch (e) {
			reject(new Error(e));
		}
	});
});

module.exports.getAllUsersFromJSON = getAllUsersFromJSON;
module.exports.createUser = createUser;
