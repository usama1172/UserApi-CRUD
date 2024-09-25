import express from 'express';
import  User from '../models/user.model.js';

// register user

export const registerUser = async (req, res)=>{
    try {
        const {name, email, password, image} = req.body;
        const existingUser = await User.findOne({email});
        
        if(existingUser) return res.status(400).json({message: 'User already exists'});
        
        const newUser = new User({name, email, password, image});
        await newUser.save();
        res.redirect('/read')
        
    } catch (error) {
        res.status(500).json({message:'error occurred while registering user'});
    }
}

// find all users

export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.render('read', { users: users });  // Render the 'read' view with users data
    } catch (error) {
      res.status(500).json({ message: 'Error occurred while retrieving users' });
    }
  };
  

//delete users

export const deleteUser = async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.id });
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.redirect('/read');  // Redirect after successful deletion
    } catch (error) {
      res.status(500).json({ message: 'Error occurred while deleting user' });
    }
  };

// update users

export const updateUser = async (req, res) => {
    try {  
      const { name, email, image } = req.body;
        
      const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, image }, { new: true });
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
  
      res.redirect('/read');  // Redirect after successful update
    } catch (error) {
      res.status(500).json({ message: 'Error occurred while updating user' });
    }
  };

//edit user

export const editUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.render('edit', { user });  // Render the 'edit' view with user data
    } catch (error) {
      res.status(500).json({ message: 'Error occurred while retrieving user' });
    }
  };