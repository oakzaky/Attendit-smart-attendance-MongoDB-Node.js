const express = require('express')
const router = express.Router();
const Obj = require('../controllers/modules')

router.get("/:id", Obj.GetByID);
router.post("",Obj.Add);
router.post("AddTA",Obj.AddTA);
router.post("AddStudent",Obj.AddStudent);
router.put("",Obj.Update);
router.delete("/:id",Obj.Delete);

module.exports = router; 