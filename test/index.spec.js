/*eslint-disable */

const chai = require('chai');
const expect = chai.expect;
const cpfValidator = require('../lib/index');

describe('cpf lib', () => {

	it('Deveria retornar true para o CPF 86843572057', () => {
		expect(cpfValidator.cpfValidator('86843572057')).to.equal(true);
	});

		it('Deveria retornar true para o CPF 07692620075', () => {
		expect(cpfValidator.cpfValidator('07692620075')).to.equal(true);
	});

	it('Deveria retornar false para o CPF 1111111111', () => {
		expect(cpfValidator.cpfValidator('11111111111')).to.equal(false);
	});

	it('Deveria retornar false para o CPF -1111111111', () => {
		expect(cpfValidator.cpfValidator('-11111111111')).to.equal(false);
	});

	it('Deveria retornar false para o CPF a3b489358xx', () => {
		expect(cpfValidator.cpfValidator('3a3b489358xx')).to.equal(false);
	});

	it('Deveria retornar false para o CPF 33248936', () => {
		expect(cpfValidator.cpfValidator('33248936')).to.equal(false);
	});


}); 
