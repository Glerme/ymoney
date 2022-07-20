import BigNumber from 'bignumber.js';

export const onlyDigits = (value: string) => value.replace(/\D/g, '');

export const cepMask = (value: string | null = '') =>
  (value || '').replace(/\D/g, '').replace(/(\d{5})(\d{3})/g, '$1-$2');

export const phoneMask = (value: string | null = '') =>
  (value || '')
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})$/, '$1-$2');

export const cnpjMask = (value: string | null = '') =>
  (value || '')
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');

export const cpfMask = (value: string | null = '') =>
  (value || '')
    .replace(/\D+/g, '')
    .replace(/^(\d{11}).*$/, '$1')
    .replace(/^(\d{3})(\d{1,3})$/, '$1.$2')
    .replace(/^(\d{3})(\d{3})(\d{1,3})$/, '$1.$2.$3')
    .replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');

const parseWholeNumber = (numbers = '') => {
  const characters = numbers.split('');

  const reversed = characters.reverse();

  const groups = [];

  let aux = '';

  for (const character of reversed) {
    aux = aux + character;

    if (aux.length === 3) {
      groups.push([...aux].reverse().join(''));
      aux = '';
    }
  }

  if (aux.length) {
    groups.push([...aux].reverse().join(''));
    aux = '';
  }

  return groups.reverse().join('.');
};

export const maskCurrency = (number = 0, decimalPlaces = 2) => {
  let value = new BigNumber(number)
    .multipliedBy(new BigNumber(10).pow(decimalPlaces))
    .integerValue(BigNumber.ROUND_DOWN)
    .toString();

  const signal = value[0] === '-' ? '-' : '';

  if (value[0] === '-') {
    value = value.slice(1);
  }

  const minimal = value.padStart(3, '0');

  const characters = minimal.split('');

  const decimals = characters.slice(characters.length - 2).join('');

  const wholes = characters.slice(0, characters.length - 2).join('');

  const formatedWholes = parseWholeNumber(wholes);

  return `${signal}${formatedWholes},${decimals}`;
};

export const unmaskCurrency = (value = '', decimalPlaces = 2) => {
  const parsed = value.replace(/[.,]+/g, '');

  const number = new BigNumber(parsed).dividedBy(
    new BigNumber(10).pow(decimalPlaces),
  );

  if (Number.isNaN(number.toNumber())) {
    return 0;
  }

  return number.toNumber();
};
