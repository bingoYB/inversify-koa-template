const {expect} = require('chai');
const request = require('supertest');

const host = "localhost:3000";

describe('user model test', function () {

  it('get user not empty', function (done) {
    request(host)
      .get('/get/1')
      .end(function (err, res) {
        const user = JSON.parse(res.text)
        expect(user.data).to.not.be.equal({})
        expect(user.data.name).to.be.equal('小w')
        // done(err) 这种用法写起来很鸡肋，是因为偷懒不想测 err 的值
        // 如果勤快点，这里应该写成
        /*
          should.not.exist(err);
          res.text.should.equal('55');
       */
        done(err);
      });
  });

  it('user add success', function(done){
      request(host)
          .post('/add')
          .type('json')
          .send({ name: 'zhangsan' })
          .send({ email: '123456' })
          .expect(200, done)
  })

});