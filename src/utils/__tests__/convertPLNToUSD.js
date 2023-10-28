import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is a string', () => {

    expect(convertPLNToUSD('2')).toBeNaN();
    expect(convertPLNToUSD('3')).toBeNaN();
    expect(convertPLNToUSD('4')).toBeNaN();
    expect(convertPLNToUSD('abc')).toBeNaN();
    expect(convertPLNToUSD('')).toBeNaN();

  });

    it('should return NaN when there is no argument', () => {

        expect(convertPLNToUSD()).toBeNaN();

    });

    it('should return error when argument is not a text or a number', () => {

        expect(convertPLNToUSD([])).toBe('Error');
        expect(convertPLNToUSD({})).toBe('Error');
        expect(convertPLNToUSD(function() {})).toBe('Error');
        expect(convertPLNToUSD(null)).toBe('Error');

    });

    it('should return zero when input is lower than zero', () => {
        expect(convertPLNToUSD(-1)).toBe('$0.00');
        expect(convertPLNToUSD(-20)).toBe('$0.00');
        expect(convertPLNToUSD(-100)).toBe('$0.00');
    });


  });
