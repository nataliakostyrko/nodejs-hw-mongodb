import { contactTypesList } from '../constants/contacts.js';

const parseType = (type) => {
  if (typeof type !== 'string') return;
  if (contactTypesList.includes(type)) return type;
};

const parseBoolean = (value) => {
  if (typeof value !== 'string') return;
  if (value === '1' || value === 'true') {
    return true;
  } else if (value === '0' || value === 'false') {
    return false;
  } else {
    return;
  }
};

export const parseFilterParams = (query) => {
  const { isFavourite, type } = query;

  const parsedIsFavourite = parseBoolean(isFavourite);
  const parsedContactType = parseType(type);

  return {
    isFavourite: parsedIsFavourite,
    type: parsedContactType,
  };
};
