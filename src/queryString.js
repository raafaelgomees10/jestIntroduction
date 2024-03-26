const queryString = (object) => {
  const entries = Object.entries(object).map(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      throw new Error('please, checkout your params');
    }
    return `${key}=${value}`;
  });

  return entries.join('&');
};

const parse = (string) =>
  Object.fromEntries(
    string.split('&').map((item) => {
      const [key, valueString] = item.split('=');
      let value = valueString; // Mudança aqui
      if (value.includes(',')) {
        value = value.split(',');
      }

      return [key, value];
    })
  );
module.exports = { queryString, parse };
