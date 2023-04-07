/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function Chatting() {
  return (
    <div>
      <div>
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              "\n      .container {\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n      }\n\n      /* Then style the iframe to fit in the container div with full height and width */\n      .responsive-iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n      }\n    ",
          }}
        />
        <div className="container">
          <iframe className="responsive-iframe" src="https://d-communify.chatovod.com/" />
        </div>
      </div>
    </div>
  );
}

export default Chatting;
