"use strict";(self.webpackChunkaem_maven_archetype=self.webpackChunkaem_maven_archetype||[]).push([[736],{"./stories/pageAuthoring/text.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Lists:function(){return text_stories_Lists},Standard:function(){return text_stories_Standard},Table:function(){return text_stories_Table},TypeFormatting:function(){return TypeFormatting},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return text_stories}});var text_namespaceObject=JSON.parse('{"jcr:primaryType":"nt:unstructured","policy_641562756958017":{"jcr:primaryType":"nt:unstructured","jcr:title":"Content Text","sling:resourceType":"wcm/core/components/policy/policy","jcr:content":{"jcr:primaryType":"nt:unstructured"},"rtePlugins":{"jcr:primaryType":"nt:unstructured","paraformat":{"jcr:primaryType":"nt:unstructured","features":"*","formats":{"jcr:primaryType":"nt:unstructured","override":"true","item0":{"jcr:primaryType":"nt:unstructured","description":"Paragraph","tag":"p"},"item1":{"jcr:primaryType":"nt:unstructured","description":"Quote","tag":"blockquote"},"item2":{"jcr:primaryType":"nt:unstructured","description":"Preformatted","tag":"pre"}}},"misctools":{"jcr:primaryType":"nt:unstructured","features":"-","specialCharsConfig":{"jcr:primaryType":"nt:unstructured","chars":{"jcr:primaryType":"nt:unstructured","override":"true","item0":{"jcr:primaryType":"nt:unstructured","entity":"&copy;","name":"copyright"},"item1":{"jcr:primaryType":"nt:unstructured","entity":"&euro;","name":"euro"},"item2":{"jcr:primaryType":"nt:unstructured","entity":"&reg;","name":"registered"},"item3":{"jcr:primaryType":"nt:unstructured","entity":"&trade;","name":"trademark"}}}},"edit":{"jcr:primaryType":"nt:unstructured","features":"-"},"findreplace":{"jcr:primaryType":"nt:unstructured","features":"-"},"undo":{"jcr:primaryType":"nt:unstructured","features":"-"},"spellcheck":{"jcr:primaryType":"nt:unstructured","features":"-"},"image":{"jcr:primaryType":"nt:unstructured","features":"-"},"table":{"jcr:primaryType":"nt:unstructured","features":"-"},"lists":{"jcr:primaryType":"nt:unstructured","features":"*"},"justify":{"jcr:primaryType":"nt:unstructured","features":"-"},"format":{"jcr:primaryType":"nt:unstructured","features":"bold,italic"},"links":{"jcr:primaryType":"nt:unstructured","features":"modifylink,unlink"},"subsuperscript":{"jcr:primaryType":"nt:unstructured","features":"-"}}}}'),text_stories={title:"pageAuthoring/Text",tags:["autodocs"],decorators:[],parameters:{myAddonParameter:{policy:text_namespaceObject}}};window.addEventListener("message",(function(detail){var _JSON_parse_event,detailsObj=(null==detail?void 0:detail.data)||{};if("storybook/style-system/change"===(null===(_JSON_parse_event=JSON.parse(detailsObj).event)||void 0===_JSON_parse_event?void 0:_JSON_parse_event.type)){var styleClasses=JSON.parse(detailsObj).event.args[0].selectedStyle,getHtml=document.querySelector("#storybook-root"),isWrapper=document.querySelector("#storybook-root .sb-wrapper"),updatedHTML='<div class="sb-wrapper '.concat(styleClasses,'">').concat(getHtml.innerHTML,"</div>");isWrapper?(document.querySelector("#storybook-root .sb-wrapper").classList.forEach((function(className){"sb-wrapper"!==className&&document.querySelector("#storybook-root .sb-wrapper").classList.remove(className)})),document.querySelector("#storybook-root .sb-wrapper").classList.add(styleClasses)):getHtml.innerHTML=updatedHTML}}));var text_stories_Lists=function(){return"".concat('<div data-cmp-data-layer="{&#34;text-d7f5d18c60&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/text&#34;,&#34;xdm:text&#34;:&#34;&lt;ul>&lt;li>List item&lt;/li>&lt;li>List item&lt;/li>&lt;li>List item&lt;/li>&lt;li>List item&lt;/li>&lt;/ul>&lt;p>&amp;nbsp;&lt;/p>&lt;ol>&lt;li>List Item 1&lt;/li>&lt;li>List Item 2&lt;/li>&lt;li>List item 3&lt;/li>&lt;li>List item 4&lt;/li>&lt;/ol>&#34;}}" id="text-d7f5d18c60" class="cmp-text"> <ul> <li>List item</li> <li>List item</li> <li>List item</li> <li>List item</li> </ul> <p> </p> <ol> <li>List Item 1</li> <li>List Item 2</li> <li>List item 3</li> <li>List item 4</li> </ol> </div> ')};text_stories_Lists.story={name:"Lists",parameters:{design:{}}};var text_stories_Standard=function(){return"".concat('<div data-cmp-data-layer="{&#34;text-2d9d50c5a7&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/text&#34;,&#34;xdm:text&#34;:&#34;&lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.&lt;/p>&#34;}}" id="text-2d9d50c5a7" class="cmp-text"> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. </p> </div> ')};text_stories_Standard.story={name:"Standard",parameters:{design:{}}};var text_stories_Table=function(){return"".concat('<div data-cmp-data-layer="{&#34;text-6ecfe1f00f&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/text&#34;,&#34;xdm:text&#34;:&#34;&lt;table cellpadding=\\&#34;5\\&#34; cellspacing=\\&#34;0\\&#34; border=\\&#34;1\\&#34;>&lt;tbody>&lt;tr>&lt;td>Column 1&lt;/td>&lt;td>Column 2&lt;/td>&lt;td>Column 3&lt;/td>&lt;td>Column 4&lt;/td>&lt;/tr>&lt;tr>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;/tr>&lt;tr>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;/tr>&lt;tr>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;/tr>&lt;tr>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;/tr>&lt;tr>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;td>&amp;nbsp;&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table>&#34;}}" id="text-6ecfe1f00f" class="cmp-text"> <table cellpadding="5" cellspacing="0" border="1"> <tbody> <tr> <td>Column 1</td> <td>Column 2</td> <td>Column 3</td> <td>Column 4</td> </tr> <tr> <td> </td> <td> </td> <td> </td> <td> </td> </tr> <tr> <td> </td> <td> </td> <td> </td> <td> </td> </tr> <tr> <td> </td> <td> </td> <td> </td> <td> </td> </tr> <tr> <td> </td> <td> </td> <td> </td> <td> </td> </tr> <tr> <td> </td> <td> </td> <td> </td> <td> </td> </tr> </tbody> </table> </div> ')};text_stories_Table.story={name:"Table",parameters:{design:{}}};var TypeFormatting=function(){return"".concat('<div data-cmp-data-layer="{&#34;text-6d91c6d9a4&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/text&#34;,&#34;xdm:text&#34;:&#34;&lt;p>&lt;b>Bold &lt;/b>can be used to emphasize a word or phrase, as can &lt;u>underline&lt;/u> and &lt;i>italics.&amp;nbsp;&lt;/i>&lt;sup>Superscript&lt;/sup> and &lt;sub>subscript&lt;/sub> are useful for mathematical (E = mc&lt;sup>2&lt;/sup>) or scientific (h&lt;sub>2&lt;/sub>O) expressions. Paragraph styles can provide alternative renderings, such as quote sections:&lt;/p>&lt;blockquote>&amp;quot;&lt;i>Be yourself; everyone else is already taken&amp;quot;&lt;/i>&lt;/blockquote>&lt;blockquote>- Oscar Wilde&lt;/blockquote>&#34;}}" id="text-6d91c6d9a4" class="cmp-text"> <p> <b>Bold </b>can be used to emphasize a word or phrase, as can <u>underline</u> and <i>italics. </i><sup>Superscript</sup> and <sub>subscript</sub> are useful for mathematical (E = mc<sup>2</sup>) or scientific (h<sub>2</sub>O) expressions. Paragraph styles can provide alternative renderings, such as quote sections: </p> <blockquote> &quot;<i>Be yourself; everyone else is already taken&quot;</i> </blockquote> <blockquote>- Oscar Wilde</blockquote> </div> ')};TypeFormatting.story={name:"Type Formatting",parameters:{design:{}}},text_stories_Lists.parameters={...text_stories_Lists.parameters,docs:{...text_stories_Lists.parameters?.docs,source:{originalSource:"() => `${Example_1_TemplatePath}`",...text_stories_Lists.parameters?.docs?.source}}},text_stories_Standard.parameters={...text_stories_Standard.parameters,docs:{...text_stories_Standard.parameters?.docs,source:{originalSource:"() => `${Example_2_TemplatePath}`",...text_stories_Standard.parameters?.docs?.source}}},text_stories_Table.parameters={...text_stories_Table.parameters,docs:{...text_stories_Table.parameters?.docs,source:{originalSource:"() => `${Example_3_TemplatePath}`",...text_stories_Table.parameters?.docs?.source}}},TypeFormatting.parameters={...TypeFormatting.parameters,docs:{...TypeFormatting.parameters?.docs,source:{originalSource:"() => `${Example_4_TemplatePath}`",...TypeFormatting.parameters?.docs?.source}}};const __namedExportsOrder=["Lists","Standard","Table","TypeFormatting"]}}]);