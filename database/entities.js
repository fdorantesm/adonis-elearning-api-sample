module.exports = {
  keys: {
    primaryKey: 'id',
    privateId: '_id',
    enabled: 'is_enabled'
  },
  events: {
    cascade: 'CASCADE',
    restrict: 'RESTRICT'
  },
  defaults: {
    enabled: true    
  },
  user: 'users',
  token: 'tokens',
  course: 'courses',
  category: 'categories',
  topic: 'topics',
  module: 'modules',
  question: 'questions',
  response: 'responses',
  exam: 'exams',
  moduleTopic: 'module_topics'
}
