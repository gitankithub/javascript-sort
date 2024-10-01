let menus = [
  'Menu11',
  'Menu1',
  'Menu2',
  'Menu3',
  'Menu4',
  'Menu5',
  'Menu6',
  'Menu7',
  'Menu8',
  'Menu9',
  'Menu10',
];
menus.sort();
console.log('lexicographical sort: \n', menus);
menus.sort((a, b) => {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
});
console.log('natural sort : \n', menus);
