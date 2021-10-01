const router = require('express').Router();
const tipsController = require('./../controller/tips');



router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await tipsController.fetch();
	res.send(response);
})


router.post('/add', async (req, res) => {
	const response = await tipsController.add(req.body);
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {
	const response = await tipsController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await tipsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await tipsController.update(req.query.id, req.body);
	res.send(response);
})

router.get('/search', async (req, res) => {
	const response = await tipsController.search(req.query.tipstitle);
	res.send(response);
})

module.exports = router;