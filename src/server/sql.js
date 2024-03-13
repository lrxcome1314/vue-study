/**

* Created by LiRunxiang on 2020/05/06.

* 对操作不同表，sql语句的封装

*/

let test = {
  insert: 'INSERT INTO test(id, name, age) VALUES(?,?,?)',

  update: 'UPDATE test SET name=?, age=? WHERE id=?',

  delete: 'DELETE FROM test WHERE id=?',

  queryById: 'SELECT * FROM test WHERE id=?',

  queryAll: 'SELECT * FROM test',
}

let teacher = {
  insert: 'INSERT INTO teacher(id, name) VALUES(?,?)',

  update: 'UPDATE teacher SET name=? WHERE id=?',

  delete: 'DELETE FROM teacher WHERE id=?',

  queryById: 'SELECT * FROM teacher WHERE id=?',

  queryAll: 'SELECT * FROM teacher',
}

let goods = {
  insert: 'INSERT INTO Goods(id, name) VALUES(?,?)',

  update: 'UPDATE Goods SET name=? WHERE id=?',

  delete: 'DELETE FROM Goods WHERE id=?',

  queryById: 'SELECT * FROM Goods WHERE id=?',

  queryAll: 'SELECT * FROM Goods',
}

let order = {
  insert: 'INSERT INTO Order(id, name) VALUES(?,?)',

  update: 'UPDATE Order SET name=? WHERE id=?',

  delete: 'DELETE FROM Order WHERE id=?',

  queryById: 'SELECT * FROM Order WHERE id=?',

  queryAll: 'SELECT * FROM Order',
}

let user = {
  insert: 'INSERT INTO UserInfo(id, name) VALUES(?,?)',

  update: 'UPDATE UserInfo SET name=? WHERE id=?',

  delete: 'DELETE FROM UserInfo WHERE id=?',

  queryById: 'SELECT * FROM UserInfo WHERE id=?',

  queryAll: 'SELECT * FROM UserInfo',
}

module.exports = {
  teacher,
  test,
  goods,
  order,
}
