const router = require('express').Router();
const notificationController = require('../controller/notification');

   //async function (not simmultaneously or single vlaue at a time)
router.post('/add', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await notificationController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await notificationController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await notificationController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await notificationController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await notificationController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/search', async (req, res) => {
	const response = await notificationController.search(req.query.title);
	res.send(response);
})
module.exports = router;