const { Pool } = require('pg');
const database = require('../config/database');

const pool = new Pool(database);

const createUser = async (userData) => {
  // Insert user data into the database
};

const findById = async (id) => {
  // Find user by id in the database
};

const findByIdAndUpdate = async (id, userData) => {
  // Update user data in the database
};

const findByIdAndDelete = async (id) => {
  // Delete user from the database
};

module.exports = {
  createUser,
  findById,
  findByIdAndUpdate,
  findByIdAndDelete,
};
