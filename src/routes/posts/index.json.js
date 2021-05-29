import axios from 'axios'

export async function get(req, res) {
  var url = process.env.MY_JSON_URL + '?a1'
//console.log("list =", url )
    const response = await axios.get(url)
    var data = await response.data
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
  res.end(JSON.stringify(data.items));
}