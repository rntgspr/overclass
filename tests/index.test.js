/* eslint-disable no-undef */
const overclass = require('../index');

describe('index', () => {
  // smoke tests
  describe('smoke tests', () => {
    it('should exist the overclass function', () => {
      expect(overclass).not.toBeUndefined();
      expect(typeof overclass).toBe('function');
    });
  });

  describe('overclass', () => {
    it('should return another function when calling overclass', () => {
      expect(typeof overclass()).toBe('function');
    });

    it('should return the correct string depending on the tagged template arguments', () => {
      expect(overclass()`bastion`).toEqual('bastion');
      expect(overclass()`tracer`).toEqual('tracer');
      expect(overclass()`tracer bastion`).toEqual('tracer bastion');
    });

    it('should return the correct string depending on the object used', () => {
      const styles = {
        bastion: '__bastion__R0aDhoG',
        tracer: '__tracer__R0aDhoG',
      };
      expect(overclass(styles)`bastion`).toEqual(styles.bastion);
      expect(overclass(styles)`bastion tracer`).toEqual(
        `${styles.bastion} ${styles.tracer}`
      );
    });

    it('should include the true and do not include the false arguments', () => {
      expect(overclass()`bastion ${true && 'bastion--turret'}`).toEqual(
        'bastion bastion--turret'
      );
      expect(overclass()`bastion ${true && 'bastion--turret'} tracer`).toEqual(
        'bastion bastion--turret tracer'
      );

      expect(overclass()`bastion ${false && 'bastion--turret'}`).toEqual(
        'bastion'
      );
      expect(overclass()`bastion ${false && 'bastion--turret'} tracer`).toEqual(
        'bastion tracer'
      );
    });
  });

  describe('overclass, classnames', () => {
    it('should simple write classnames', () => {
      expect(overclass.classnames`bastion tracer`).toEqual('bastion tracer');
    });

    it('should simple write classnames, alternative scenario', () => {
      expect(overclass.cn`bastion ${true && 'tracer'}`).toEqual(
        'bastion tracer'
      );
    });

    it('should simple write classnames, complex scenario', () => {
      expect(
        overclass.cn`bastion ${true && 'tracer'} ${
          (false && 'hanzo') || 'genji'
        }`
      ).toEqual('bastion tracer genji');
    });
  });

  describe('overclass, joined', () => {
    it('should join classes as arguments', () => {
      expect(overclass.jn('bastion', 'tracer')).toEqual('bastion tracer');
    });

    it('should join classes as arguments, alternative scenario', () => {
      expect(overclass.joined('bastion', 'tracer')).toEqual('bastion tracer');
    });

    it('should join classes as arguments, alternative scenario with invalid spaces', () => {
      expect(overclass.joined('   ', 'bastion', 'tracer')).toEqual(
        'bastion tracer'
      );
    });

    it('should join classes as arguments, even if repetitive', () => {
      expect(
        overclass.jn(' bastion', 'bastion ', '  tracer', ' tracer', 'hanzo')
      ).toEqual('bastion tracer hanzo');
    });
  });
});
