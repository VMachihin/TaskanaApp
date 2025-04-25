const charts = 'abcdefghijklmnopqrstuvwxyz0123456789!#@$%&*^';

export const generateId = (length = 8) => {
  let id = '';
  for (let i = 0; i < length; i++) {
    id += charts.charAt(Math.floor(Math.random() * charts.length));
  }
  return id;
};
