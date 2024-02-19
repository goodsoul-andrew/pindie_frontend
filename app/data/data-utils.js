//import {data} from "./games_data"
import data from "./data.json"


export function getGamesByCategory(categ) {
  return data.filter((item) => {
		return item.category.find((ctg) => {
			return ctg.name === categ;
		});
	});
}