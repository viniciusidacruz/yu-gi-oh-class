export const sortByName = (options: string[]) => {
  return options.sort((a, b) => a.localeCompare(b));
};
