import express from 'express';
import { registerUser, deleteUser, getAllUsers, updateUser, editUser } from '../controllers/user.controller.js';



const UserRoute = express.Router();

UserRoute.get('/', (req, res) => {
    res.render('app');
});

UserRoute.get('/users', getAllUsers);

UserRoute.post('/register',registerUser);

//Read file
UserRoute.get('/read',getAllUsers);

UserRoute.get('/edit/:id', editUser);

UserRoute.post('/update/:id', updateUser);

UserRoute.get('/delete/:id', deleteUser);

export default UserRoute;