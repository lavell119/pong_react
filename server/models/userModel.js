const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema 

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    chipcount: {
        type: Number,
        default: 0
    },
    rank: {
        type: Number,
        default: 0
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    krill: {
        type: Number,
        default: 0
    }
})

//static sign up method
userSchema.statics.signup = async function(email, password, username) {

    //validation
    if(!email || !password) {
        throw Error('All fields are required')
    }

    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    // if(!validator.isStrongPassword(password)) {
    //     throw Error('Password not strong enough')
    // }

    const exists = await this.findOne({ email })

    if(exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({ email, password: hash, username})
    
    console.log(user)
    return user   
}


//static login method
userSchema.statics.login = async function(email, password) {

        if(!email || !password) {
            throw Error('All fields must be filled')
        }
        //look for user in db by email
        const user = await this.findOne({ email })

        if(!user) {
            throw Error('Incorrect email')
        }

        const match = await bcrypt.compare(password, user.password)

        if(!match) {
            throw Error('Incorrect password')
}
    return user
}

module.exports = mongoose.model('User', userSchema)

