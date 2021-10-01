const router = require('express').Router();
const userController = require('../controller/user');

   //async function (not simmultaneously or single vlaue at a time)
router.post('/add', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await userController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await userController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await userController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await userController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await userController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/search', async (req, res) => {
	const response = await userController.search(req.query.name);
	res.send(response);
})
module.exports = router;