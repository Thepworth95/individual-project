const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../server');

chai.use(chaihttp);

describe('server', () => {
    it('weeeeee', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(res.text).to.eq('hello');
                done();
            });
    })
});