(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./client-side/sp-main.ts ***!
  \********************************/
function decodeHtmlEntities(encodedString) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(encodedString, 'text/html');
    return doc.documentElement.textContent || '';
}
var mfeConfigElement = document.getElementById('mfe-configs-json');
var mfeConfig = mfeConfigElement ? JSON.parse(decodeHtmlEntities(mfeConfigElement.textContent || '{}')) : [];
console.log('MFE Config:', mfeConfig);

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3AtbWFpbi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7QUNWQSxTQUFTLGtCQUFrQixDQUFDLGFBQXFCO0lBQy9DLElBQU0sTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFDL0IsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0QsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7QUFDL0MsQ0FBQztBQUdELElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBc0IsQ0FBQztBQUMxRixJQUFNLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQy9HLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVuZGVyZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3JlbmRlcmVyLy4vY2xpZW50LXNpZGUvc3AtbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZnVuY3Rpb24gZGVjb2RlSHRtbEVudGl0aWVzKGVuY29kZWRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhlbmNvZGVkU3RyaW5nLCAndGV4dC9odG1sJyk7XG4gIHJldHVybiBkb2MuZG9jdW1lbnRFbGVtZW50LnRleHRDb250ZW50IHx8ICcnO1xufVxuXG4vLyBSZXRyaWV2ZSBhbmQgZGVjb2RlIHRoZSBNRkUgY29uZmlnXG5jb25zdCBtZmVDb25maWdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21mZS1jb25maWdzLWpzb24nKSBhcyBIVE1MU2NyaXB0RWxlbWVudDtcbmNvbnN0IG1mZUNvbmZpZyA9IG1mZUNvbmZpZ0VsZW1lbnQgPyBKU09OLnBhcnNlKGRlY29kZUh0bWxFbnRpdGllcyhtZmVDb25maWdFbGVtZW50LnRleHRDb250ZW50IHx8ICd7fScpKSA6IFtdO1xuY29uc29sZS5sb2coJ01GRSBDb25maWc6JywgbWZlQ29uZmlnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==