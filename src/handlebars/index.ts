import Handlebars from "handlebars"

var source = `
	<div class="entry">
		<h1>{{title}}</h1>
		<div class="body">{{body}}</div>
	</div>
`;
var context = { title: "我的新文章", body: "这是我的第一篇文章！" };

var template = Handlebars.compile(source);
var html = template(context);

var target = document.getElementById("handlebars-app") as HTMLElement
target.innerHTML = html

export default {}
