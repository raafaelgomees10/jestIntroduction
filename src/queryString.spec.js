import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const object = {
      name: 'Rafael',
      job: 'Developer',
    };
    expect(queryString(object)).toBe('name=Rafael&job=Developer');
  });

  it('should creat a valid queryString even when an array is passed as a value', () => {
    const object = {
      name: 'Rafael',
      abilities: ['js', 'tdd'],
    };

    expect(queryString(object)).toBe('name=Rafael&abilities=js,tdd');
  });

  it('should throw an error when an object is passed as a value', () => {
    const object = {
      name: 'Rafael',
      abilities: { first: 'js', second: 'tdd' },
    };

    expect(() => {
      queryString(object);
    }).toThrow();
  });
});

describe('Object to query string', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Rafael&job=developer';

    expect(parse(qs)).toEqual({
      name: 'Rafael',
      job: 'developer',
    });
  });

  it('should convert a query string of a single key value to object', () => {
    const qs = 'name=Rafael';

    expect(parse(qs)).toEqual({
      name: 'Rafael',
    });
  });

  it('should convert a query string to an object taking care of comma separated value', () => {
    const qs = 'name=Rafael&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Rafael',
      abilities: ['JS', 'TDD'],
    });
  });
});
