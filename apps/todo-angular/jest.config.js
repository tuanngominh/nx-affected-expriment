module.exports = {
  name: 'todo-angular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/todo-angular',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
