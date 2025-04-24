const parseType = (type) => {
  return typeof type === 'string' && ['work', 'home', 'personal'].includes(type) ? type : undefined;
};

const parseIsFavourite = (value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  const filter = {};

  if (parsedType !== undefined) filter.contactType = parsedType;
  if (parsedIsFavourite !== undefined) filter.isFavourite = parsedIsFavourite;

  return filter;
};

