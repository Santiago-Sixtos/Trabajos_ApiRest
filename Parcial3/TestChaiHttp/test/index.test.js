const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
const url = 'http://localhost:3002';

describe('Conjunto de pruebas', () => {
    it('Revisar que servidor me de 200', (done) => {
        chai.request(url)
            .get('/empleado')
            .end((err, res) => {
                if (err) {
                    console.error(err);
                    return done(err);
                }
                expect(res).to.have.status(200);
                done();
            });
    });
});

