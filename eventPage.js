var contextMenuItem = {
	"id": "IMDbsearchContext",
	"title": "Search \"%s\" on IMDb",
	"contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId == "IMDbsearchContext" && clickData.selectionText){
		
		var url = "https://www.imdb.com/find?q="
		url += String(clickData.selectionText).split(' ').join('+').split('.').join('+');
		url += "&ref_=nv_sr_sm";
		
		var searchWindow = window.open(url);
		searchWindow.focus();
	}
})
