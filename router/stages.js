const router = require('express').Router();
const StageModel = require('../db/schema/stageSchema');

/**
 * Chercher toutes les offres de stages
 */
router.get('/', async (req, res) => {
    try {
        const stages = await StageModel.getStages();
        res.send(JSON.stringify(stages));
    } catch (err) {
        res.status(404).send(err);
    }
})

/**
 * Chercher un stage précis
 */
router.get('/:id', async (req, res) => {
    try {
        const stage = await StageModel.findStage(req.params.id);
        res.send(JSON.stringify(stage));
    } catch (err) {
        res.status(404).send(err);
    }
})

/**
 * Ajouter un stage
 */
router.post('/', async (req, res) => {
    try {
        const stage = await StageModel.addStage(req.body);
        res.send(JSON.stringify(stage));
    } catch (err) {
        res.status(404).send(err);
    }
})

/**
 * Modifier un stage
 */
router.put('/:id', async (req, res) => {
    try {
        const stage = await StageModel.updateStage(req.params.id, req.body);
        res.send(JSON.stringify(stage));
    } catch (err) {
        res.status(404).send(err);
    }
})

/**
 * Supprimer un stage
 */
router.delete('/:id', async (req, res) => {
    try {
        const stage = await StageModel.deleteStage(req.params.id);
        res.send(JSON.stringify(stage));
    } catch (err) {
        res.status(404).send(err);
    }
})


module.exports = router;