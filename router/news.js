const router = require('express').Router();
const newsController = require('./../controller/news');



router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await newsController.fetch();
	res.send(response);
})


router.post('/add', async (req, res) => {
	const response = await newsController.add(req.body);
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {
	const response = await newsController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await newsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await newsController.update(req.query.id, req.body);
	res.send(response);
})

router.get('/search', async (req, res) => {
	const response = await newsController.search(req.query.newstitle);
	res.send(response);
})

module.exports = router;