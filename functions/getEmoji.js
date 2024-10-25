const getEmoji = require('fluentui-emoji-js');

exports.handler = async function(event) {
  try {
    function sendError(error) {
      return {
        statusCode: 200,
        body: JSON.stringify({error}),
      };
    }
    
    function getFinalUrl(file) {
      if (file) {
        const url = encodeURI(`https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets${file}`)
        return {
          statusCode: 200,
          body: JSON.stringify({url}),
        };
      } else {
        sendError("Emoji not found")
        return
      }
    }

    const { queryStringParameters } = event;
    const { mode, emoji, style } = queryStringParameters;

    if (mode || emoji || style) {
      if (mode == 'glyph') {
        const file = await getEmoji.fromGlyph(emoji, style);
        return getFinalUrl(file);
      } else if (mode == 'code') {
        const file = await getEmoji.fromCode(emoji, style);
        return getFinalUrl(file);
      } else {
        sendError("Mode not valid");
      }
    } else {
      sendError("Missing required values");
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({error}),
    };
  }
};
