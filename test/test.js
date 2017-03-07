// Requried the dev-devpendencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let config = require('../config');
let should = chai.should();

chai.use(chaiHttp);

// Libraries
describe('Main', () => {
	describe('/GET testconnection', () => {
		it('Check the internet connection from device', (done) => {
			chai.request(config.server)
				.get('/testconnection')
				.end((err, res) => {
					res.should.have.status(200);					
					done();
				})
		});
	});
	describe('/GET libraries', () => {
		it('it should GET all the libraries', (done) => {
			chai.request(config.server)
				.get('/libraries')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					done();
				})
		});
	});
})

// Login
describe('Users', () => {
	describe('/GET login', () => {
		it('it should LOGIN the user to Admin UI.', (done) => {
			chai.request(config.server)
				.get('/login')
				.set('username', config.username)
				.set('password', config.password)
				.set('api_key', config.api_key)				
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.an('object');
					done();
				});
		});
	});

	describe('/Get v2 login', () => {
		it('it should login the user to apps', (done) => {
			chai.request(config.server)
				.get('/v2/login')
				.set('username', config.username)
				.set('password', config.password)
				.set('api_key', config.api_key)
				.set('device', config.device)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.an('object');
					done();
				});
		});
	});
})