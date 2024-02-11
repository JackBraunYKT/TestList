export function convertToNestedArray(originalArr) {
  const sortedArr = originalArr.sort((a, b) => a.sorthead - b.sorthead);
  const nestedArr = [];

  const idMap = {};
  sortedArr.forEach((item) => {
    item.children = [];
    idMap[item.id] = item;
  });

  sortedArr.forEach((item) => {
    if (item.head !== null) {
      const parent = idMap[item.head];
      parent.children.push(item);
    } else {
      nestedArr.push(item);
    }
  });

  return nestedArr;
}
