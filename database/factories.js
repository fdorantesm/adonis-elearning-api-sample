const Hash = use('Hash')
const uuid = require('uuid')

const defaults = {
  created_at: new Date(),
  updated_at: new Date(),
  is_enabled: 1
}

exports.categories = [{
  _id: uuid.v4(),
  code: 'programming',
  name: 'Programming',
  icon: 'programming',
  ...defaults
}]

exports.users = [{
  username: 'admin',
  email: 'admin@email.local',
  password: '$2a$10$VF0tu1yw.OwCcidVMnpVweZzoxaNJHS3LA1YZJ/qUZrvf7dJR1Jdu',
  created_at: new Date(),
  updated_at: new Date()
}]

exports.courses = [{
  _id: uuid.v4(),
  title: 'Start with programming',
  category_id: 1,
  user_id: 1,
  ...defaults
}]

exports.modules = [
  {
    _id: uuid.v4(),
    title: 'Introduction',
    course_id: 1,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'Conditional structures',
    course_id: 1,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'Loop structures',
    course_id: 1,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'OOP',
    course_id: 1,
    ...defaults
  }
]

exports.topics = [
  {
    _id: uuid.v4(),
    title: 'Data types',
    description: 'Primitive data types',
    module_id: 1,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'If and else',
    description: 'Conditional structures',
    module_id: 2,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'Switch',
    description: 'Conditional structures',
    module_id: 2,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'Ternary operator',
    description: 'Conditional structures',
    module_id: 2,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'For',
    description: 'Loop structures',
    module_id: 3,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'While',
    description: 'Loop structures',
    module_id: 3,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'Do while',
    description: 'Loop structures',
    module_id: 3,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'Class and object',
    description: 'OOP',
    module_id: 4,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'Constructors and Heritance',
    description: 'OOP',
    module_id: 4,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'Polimorfism and method overload',
    description: 'OOP',
    module_id: 4,
    ...defaults
  },
  {
    _id: uuid.v4(),
    title: 'Interfaces',
    description: 'OOP',
    module_id: 4,
    ...defaults
  }
]