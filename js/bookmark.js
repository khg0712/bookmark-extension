const Bookmark = class {
	constructor() {
		if (!document.getElementsByTagName("body")[0]) throw "body 없음";
		this.el = {
			body: document.getElementsByTagName("body")[0]
		};
	}
	renderBookmark() {
		const bookmark = document.createElement("div");
		bookmark.className = "bookmark";
		bookmark.innerText = "bookmark";
		this.el.body.appendChild(bookmark);
	}
};

const bookmark = new Bookmark();
bookmark.renderBookmark();
