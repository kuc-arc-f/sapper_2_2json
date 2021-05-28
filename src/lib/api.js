const fetch = process.client ? window.fetch : require('node-fetch').default
export default fetch
