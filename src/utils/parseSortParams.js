import { SORT_ORDER } from '../constants/index.js';

const parseSortBy = (sortBy) => {
  const keysOfContacts = ['name', 'phoneNumber', 'email'];
  if (keysOfContacts.includes(sortBy)) {
    return sortBy;
  }
  return '_id';
};

const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  if (isKnownOrder) return sortOrder;
  return SORT_ORDER.ASC;
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};
