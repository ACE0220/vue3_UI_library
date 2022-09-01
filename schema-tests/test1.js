const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
  type: 'string',
  minLength: 10,
};

const validate = ajv.compile(schema);
const valid = validate('ace');
const valid1 = validate(123);
// if (!valid) console.log(validate.errors);
// if (!valid1) console.log(validate.errors);

const objSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    isWorker: {
      type: 'boolean',
    },
  },
  required: ['name', 'age'],
};

const validate1 = ajv.compile(objSchema);
const valid2 = validate1({
  name: 'ace',
  age: 12,
  pets: ['hh', 'xx'],
  isWorker: false,
});

if (!valid2) console.log(validate1.errors);
