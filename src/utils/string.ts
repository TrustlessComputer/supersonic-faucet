const getAvatarName = (name: string): string => {
  let words = '';
  if (name && name.split(' ').length > 0) {
    name.split(' ').length = 21;
    const arrName = name.split(' ');
    if (arrName[0]) {
      words = arrName[0].charAt(0);
      if (arrName[1]) {
        words += arrName[1].charAt(0);
      } else if (arrName[0].charAt(1)) {
        words += arrName[0].charAt(1);
      }
      words = words.toUpperCase();
    }
  }
  return words;
};

const compareString = (a: unknown, b: unknown) => {
  return a?.toString?.()?.toLowerCase?.() === b?.toString?.()?.toLowerCase?.();
};

export const labelAmountOrNumberAdds = (amount: number | string) => {
  return Number(amount) !== 1 ? 's' : '';
};

const formatAddressCenter = (address: string, length = 4): string => {
  if (!address) return '';
  return address.length > length * 2
    ? address.substring(0, length) +
        '...' +
        address.substring(address.length - length, address.length)
    : address;
};

interface IEllipsis {
  str: string;
  limit?: number;
  dots?: string;
}

export const ellipsisCenter = (payload: IEllipsis) => {
  const { str, limit = 10, dots = '...' }: IEllipsis = payload;
  try {
    const size = str.length;
    if (size < limit * 2 + dots.length) {
      return str;
    }
    const leftStr = str.substring(0, limit);
    const rightStr = str.substring(size - limit, size);
    return leftStr + dots + rightStr;
  } catch {
    return str;
  }
};

export { getAvatarName, compareString, formatAddressCenter };
