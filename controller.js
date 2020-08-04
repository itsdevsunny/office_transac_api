const express = require('express');
const router  = express.Router();

const { OfficeTransaction, sequelize } = require('./models');

router.get('/office_transactions', async (req, res) => {
    try {
        const transactions = await OfficeTransaction.findAll({
            order: [
                ['createdAt', 'DESC'],
            ],
        });
        res.json({ success: true, transactions });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});

router.post("/office_transaction/create", async (req, res) => {
    try {
        const transaction = await OfficeTransaction.findOne({
            order: [
                ['createdAt', 'DESC'],
            ]
        });

        let running_balance = transaction ? transaction.running_balance : 0 ;

        if(req.body.transaction_type == 1){
            running_balance += parseInt(req.body.amount);
        }else if(req.body.transaction_type == 2){
            running_balance -= req.body.amount;
        }

        const { id } = await OfficeTransaction.create({...req.body, running_balance});
        res.json({ success: true, id });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});

module.exports = router;