const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajv = new Ajv();

addFormats(ajv);

/**
 * 基础类型校验
 */
const schema = {
  type: 'string',
  minLength: 10,
};

const validate = ajv.compile(schema);
const valid = validate('ace');
const valid1 = validate(123);
// if (!valid) console.log(validate.errors);
// if (!valid1) console.log(validate.errors);

/**
 * 复杂数据校验，format类型支持string，自定义format
 */
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

// if (!valid2) console.log(validate1.errors);

/**
 * 自定义keyword
 */

const objSchema1 = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // keyTest: false,
    },
    name1: {
      type: 'string',
      keyTest1: false,
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

ajv.addKeyword({
  keyword: 'keyTest',
  validate(schema, data) {
    if (schema === true) return true;
    return schema.length === 6;
  },
});

ajv.addKeyword({
  keyword: 'keyTest1',
  compile(schema, parentSchema) {
    console.log(schema, parentSchema);
    return () => true;
  },
});

const validate3 = ajv.compile(objSchema1);
const valid3 = validate3({
  name: 'haha',
  email: '123456789@qq.com',
  age: 12,
  pets: ['hh', 'xx'],
  isWorker: false,
});
if (!valid3) console.log(validate3.errors);
