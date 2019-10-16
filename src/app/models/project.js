const mongoose = require('../../database');

const bcrypt = require('bcryptjs');


const ProjectSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },

    //Relacionamento entre a tabela de user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
      },

    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        require: true,
    }],

    createdAt: {
        type: Date,
        default: Date.now,
    }
});


const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;