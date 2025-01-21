/**
 * @description 生成问卷列表
 * @author wzs
 */

const Mock = require("mockjs");
const Random = Mock.Random;

function getQuestionList(opt = {}) {
  const { len = 10, isDeleted = false, isStar = false } = opt;
  const list = [];
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      // Random.ctitle() 生成随机中文标题
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar,
      // Random.natural(50, 100) 生成 50-100 之间的随机数
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDeleted, // 假删除
    });
  }
  return list;
}

module.exports = getQuestionList;
