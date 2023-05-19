const {expect} = require('chai');
const overclass = require('../index');

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
      const styles = {
        bastion: '__bastion__R0aDhoG',
        tracer: '__tracer__R0aDhoG',
      };
      expect(overclass(styles)`bastion`).to.be.equal(styles.bastion);
      expect(overclass(styles)`bastion tracer`).to.be.equal(
        `${styles.bastion} ${styles.tracer}`
      );
    });

    it('should include the true and do not include the false arguments', () => {
      expect(overclass()`bastion ${true && 'bastion--turret'}`).to.be.equal(
        'bastion bastion--turret'
      );
      expect(
        overclass()`bastion ${true && 'bastion--turret'} tracer`
      ).to.be.equal('bastion bastion--turret tracer');

      expect(overclass()`bastion ${false && 'bastion--turret'}`).to.be.equal(
        'bastion'
      );
      expect(
        overclass()`bastion ${false && 'bastion--turret'} tracer`
      ).to.be.equal('bastion tracer');
    });
  });

  describe('overclass, classnames', () => {
    it('should simple write classnames', () => {
      expect(overclass.classnames`bastion tracer`).to.be.equal(
        'bastion tracer'
      );
    });

    it('should simple write classnames, alternative scenario', () => {
      expect(overclass.cn`bastion ${true && 'tracer'}`).to.be.equal(
        'bastion tracer'
      );
    });

    it('should simple write classnames, complex scenario', () => {
      expect(
        overclass.cn`bastion ${true && 'tracer'} ${!!1 ? 'genji' : 'hanzo'}`
      ).to.be.equal('bastion tracer genji');
    });
  });

  describe('overclass, joined', () => {
    it('should join classes as arguments', () => {
      expect(overclass.jn('bastion', 'tracer')).to.be.equal('bastion tracer');
    });

    it('should join classes as arguments, alternative scenario', () => {
      expect(overclass.joined('bastion', 'tracer')).to.be.equal(
        'bastion tracer'
      );
    });

    it('should join classes as arguments, alternative scenario with invalid spaces', () => {
      expect(overclass.joined('   ', 'bastion', 'tracer')).to.be.equal(
        'bastion tracer'
      );
    });

    it('should join classes as arguments, even if repetitive', () => {
      expect(
        overclass.jn(' bastion', 'bastion ', '  tracer', ' tracer', 'hanzo')
      ).to.be.equal('bastion tracer hanzo');
    });
  });
});
