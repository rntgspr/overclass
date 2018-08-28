import { expect } from 'chai';
import overclass from '../index';

describe('index', () => {
  // smoke tests
  describe('smoke tests', () => {
    it('should exist the overclass function', () => {
      expect(overclass).to.exist;
      expect(overclass).to.be.a('function');
    });
  });

  describe('overclass', () => {
    it('should return another function when calling overclass', () => {
      expect(overclass()).to.be.a('function');
    });

    it('should return the correct string depending on the tagged template arguments', () => {
      expect(overclass()`bastion`).to.be.equal('bastion');
      expect(overclass()`tracer`).to.be.equal('tracer');
      expect(overclass()`tracer bastion`).to.be.equal('tracer bastion');
    });

    it('should return the correct string depending on the object used', () => {
      const styles = { bastion: '__bastion', tracer: '__tracer', };
      expect(overclass(styles)`bastion`).to.be.equal(styles.bastion);
      expect(overclass(styles)`bastion tracer`).to.be.equal(`${styles.bastion} ${styles.tracer}`);
    });

    it('should include the true and do not include the false arguments', () => {
      expect(overclass()`bastion ${true && 'bastion--turret'}`).to.be.equal('bastion bastion--turret');
      expect(overclass()`bastion ${true && 'bastion--turret'} tracer`).to.be.equal('bastion bastion--turret tracer');

      expect(overclass()`bastion ${false && 'bastion--turret'}`).to.be.equal('bastion');
      expect(overclass()`bastion ${false && 'bastion--turret'} tracer`).to.be.equal('bastion tracer');
    });
  });
});