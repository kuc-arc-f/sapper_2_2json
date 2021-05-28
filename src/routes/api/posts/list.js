import axios from 'axios'
//import fetch from 'node-fetch'
//import fetch from '../../../lib/api';

export async function get(req, res) {
  var url = process.env.MY_JSON_URL
//console.log("list=", json_url)
    const response = await axios.get(url)
    var data = await response.data
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
  res.end(JSON.stringify(data.items));
}