let server = 'http://devpagewerkz.pagewerkz.com/api';
let username = 'yelin@amdon.com';
let password = 'hello';
let api_key = 'c90fd48203f547808d900650983164d7';
let device = 'MOCHA-CHAI-UNIT-TESTING-APP';

mocha.setup('bdd');
chai.use(chaiHttp);
chai.should();

// Libraries
describe('Main', () => {
	describe('/GET testconnection', () => {
		it('Check the internet connection from device', (done) => {
			chai.request(server)
				.get('/testconnection')
				.end((err, res) => {
					res.should.have.status(200);					
					done();
				})
		});
	});
	describe('/GET libraries', () => {
		it('it should GET all the libraries', (done) => {
			chai.request(server)
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
			chai.request(server)
				.get('/login')
				.set('username', username)
				.set('password', password)
				.set('api_key', api_key)				
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.an('object');
					done();
				});
		});
	});

	describe('/Get v2 login', () => {
		it('it should login the user to apps', (done) => {
			chai.request(server)
				.get('/v2/login')
				.set('username', username)
				.set('password', password)
				.set('api_key', api_key)
				.set('device', device)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.an('object');
					done();
				});
		});
	});
})

mocha.run();