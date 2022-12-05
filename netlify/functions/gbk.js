exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      "content-type": "text/html; charset=gbk"
    },
    body: '<h1>你好</h1>',
  };
};