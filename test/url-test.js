/*
Mocha integration test from: url.html
The test was built on Thu Sep 19 2013 15:09:18 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('Expanding URLs in e-* properties (h-entry parsing test)', function() {
   var htmlFragment = "\n<div class=\"h-entry\">\n    <h1><a class=\"p-name\">Expanding URLs within HTML content</a></h1>\n    <div class=\"e-content\">\n        <ul>\n            <li><a href=\"http://www.w3.org/\">Should not change: http://www.w3.org/</a></li>\n            <li><a href=\"http://example.com/\">Should not change: http://example.com/</a></li>\n            <li><a href=\"test.html\">File relative: test.html = http://example.com/test.html</a></li>\n            <li><a href=\"/test/test.html\">Directory relative: /test/test.html = http://example.com/test/test.html</a></li>\n            <li><a href=\"/test.html\">Relative to root: /test.html = http://example.com/test.html</a></li>\n        </ul>\n        <img src=\"http://www.w3.org/2008/site/images/logo-w3c-mobile-lg\"><img src=\"/images/test.gif\">\n    </div>  \n</div>\n"
   var found = helper.parseHTML(htmlFragment,'http://example.com/')
   var expected = {"items":[{"type":["h-entry"],"properties":{"name":["Expanding URLs within HTML content"],"content":[{"value":"Should not change: http://www.w3.org/ Should not change: http://example.com/ File relative: test.html = http://example.com/test.html Directory relative: /test/test.html = http://example.com/test/test.html Relative to root: /test.html = http://example.com/test.html","html":"\n        <ul>\n            <li><a href=\"http://www.w3.org/\">Should not change: http://www.w3.org/</a></li>\n            <li><a href=\"http://example.com/\">Should not change: http://example.com/</a></li>\n            <li><a href=\"http://example.com/test.html\">File relative: test.html = http://example.com/test.html</a></li>\n            <li><a href=\"http://example.com/test/test.html\">Directory relative: /test/test.html = http://example.com/test/test.html</a></li>\n            <li><a href=\"http://example.com/test.html\">Relative to root: /test.html = http://example.com/test.html</a></li>\n        </ul>\n        <img src=\"http://www.w3.org/2008/site/images/logo-w3c-mobile-lg\"><img src=\"http://example.com/images/test.gif\">\n    "}]}}]}

   it("found.items[0].type[0]", function(){
      assert.equal(found.items[0].type[0].toString(), "h-entry");
   })

   it("found.items[0].properties['name'][0]", function(){
      assert.equal(found.items[0].properties["name"][0].toString(), "Expanding URLs within HTML content");
   })

   it("found.items[0].properties['content'][0].value", function(){
      assert.equal(found.items[0].properties["content"][0].value, "Should not change: http://www.w3.org/ Should not change: http://example.com/ File relative: test.html = http://example.com/test.html Directory relative: /test/test.html = http://example.com/test/test.html Relative to root: /test.html = http://example.com/test.html");
   })

})




