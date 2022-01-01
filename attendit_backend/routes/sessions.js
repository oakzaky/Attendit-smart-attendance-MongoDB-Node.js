const express = require('express')
const router = express.Router();
const Obj = require('../controllers/sessions')

router.get("/:id", Obj.GetByID);
router.post("",Obj.Add);
router.put("",Obj.Update);
router.delete("/:id",Obj.Delete);

module.exports = router; 