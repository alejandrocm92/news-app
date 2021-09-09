const { request } = require('express');
const express = require('express');
const router = express.Router();
const News = require('../models/News');

router.get('/', async (req, res) => {
    try {
        let retrievedNewsItems = [];
        if (typeof req.query.timestampLastReq !== 'undefined' && req.query.timestampLastReq > 0) {
            const datetime = new Date(parseInt(req.query.timestampLastReq)*1000);
            retrievedNewsItems = await News.find({date: {$gte: datetime.toISOString()}}).sort([['date', -1]]);
        } else {
            retrievedNewsItems = await News.find().sort([['date', -1]]);
        }

        const resData = {
            'payload': retrievedNewsItems,
            'timestamp': Math.floor(Date.now() / 1000)
        };

        res.json(resData);
    } catch(err) {
        res.json({ message: err });
    }
});

router.delete('/:newsItemID', async (req, res) => {
    try {
        const targetedItem = await News.find({ _id: req.params.newsItemID, archiveDate: { $ne: null } });


        // Perform redundant check prior to deleting.
        if (targetedItem.length === 0) {
            throw `Item ${req.params.newsItemID} is not an archived news item`;
        }

        const deletedNewsItem = await News.deleteOne({ _id: req.params.newsItemID });

        res.json(deletedNewsItem);
    } catch(err) {
        res.json({ message: err });
    }

});

router.patch('/:newsItemID', async (req, res) => {
    let newDate = new Date();

    try {
        const updatedNewsItem = await News.findOneAndUpdate(
            { _id: req.params.newsItemID},
            { $set:  { archiveDate: newDate } },
            { new: true }
        );

        res.json(updatedNewsItem);
    } catch(err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const newsItem = new News({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        author: req.body.author,
        date: Date.now()
    });

    try {
        const savedNewsItem = await newsItem.save();
        res.json(savedNewsItem);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;