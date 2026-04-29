import e from 'express'
import  {PostDiptest,getDiptest,deletedTest } from  '../controllers/TankerDiptest-controller.js'

const router = e.Router();

router.get('/',getDiptest);
router.post('/',PostDiptest);
router.delete('/:id',deletedTest);

export default router;