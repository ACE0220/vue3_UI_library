const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajv = new Ajv();

addFormats(ajv);

// const schema = {
//   type: 'string',
//   minLength: 10,
// };

// const validate = ajv.compile(schema);
// const valid = validate('ace');
// const valid1 = validate(123);
// if (!valid) console.log(validate.errors);
// if (!valid1) console.log(validate.errors);

ajv.addFormat('test', (data) => {
  return data === 'haha';
});

const objSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      format: 'test',
    },
    email: {
      type: 'string',
      format: 'email',
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
  name: 'hh',
  email: '123456789@qq.com',
  age: 12,
  pets: ['hh', 'xx'],
  isWorker: false,
});

if (!valid2) console.log(validate1.errors);
