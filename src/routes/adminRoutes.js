const express = require('express');
const { registerAdmin, loginAdmin, getAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController');
const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/assignments', getAssignments);
router.post('/assignments/:id/accept', acceptAssignment);
router.post('/assignments/:id/reject', rejectAssignment);

module.exports = router;
