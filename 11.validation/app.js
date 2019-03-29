const Joi = require('joi');

const arrayString = [ 'banana', 'bacon', 'cheese' ];
const arrayObjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];

const userInput = { personalInfo: {
    streetAdress: '123987987',
    city: 'imagineCity',
    state: 'fl'
}, preferences: arrayString };

const personalInfoSchema = Joi.object().keys({
    streetAdress: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
});

const preferencesSchema = Joi.array().items(Joi.string());

const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema,
});

Joi.validate(userInput, schema, (err, result) => {
    if(err) {
        console.log(err);
    } else {
        console.log(result);
    }
});