import "../style.css";
import { convertToNestedArray } from "./convertToNestedArray.js";
import { fetchData } from "./fetchData.js";
import { generateNestedList } from "./generateNestedList.js";

const URL = "http://localhost:3001/services";
const data = await fetchData(URL);
const nestedArr = convertToNestedArray(data);
const services = generateNestedList(nestedArr);

document.querySelector("#app").innerHTML = `
  <div class="container">
    <ul>
      ${services}
    </ul>
  </div>
`;
