const iconv = require('iconv-lite');
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      "content-type": "text/html; charset=gbk"
    },
    body: iconv.encode('<h1>你好</h1>', 'GBK'),
  };
};