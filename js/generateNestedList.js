export function generateNestedList(arr) {
  let list = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children.length !== 0) {
      list += `<li>${arr[i].name}<ul>`;
      list += generateNestedList(arr[i].children) + "</ul></li>";
    } else {
      list += `<li>${arr[i].name} (${arr[i].price} ₽)</li>`;
    }
  }

  return list;
}
