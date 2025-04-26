import { useEffect, useState } from "react"

export default function ItemList(){

	let [apiResult, setApiResult] = useState([]);

	useEffect(() => {

		const checkApi = async () => {
			let response = await fetch("http://localhost:3000/items");
			let data = await response.json();

			console.log(data);

			setApiResult(data);
		}

		checkApi();

	}, []);

	return (
		<div>
			{apiResult.map((item, index) => {
				return <ul key={"item-" + index}>
					<li>{item.name}</li>
					
				</ul>
			})}
		</div>
	)
}