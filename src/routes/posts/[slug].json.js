import LibCms from '../../lib/LibCms'
import axios from 'axios'


//
export async function get(req, res, next) {
	const { slug } = req.params;
	var url = process.env.MY_JSON_URL
	const response = await axios.get(url)
	var data = await response.data
//console.log(data.items)
	data  = LibCms.get_show_item( data.items, String(slug) )
//console.log(data)
	if (data != null ) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(data));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
