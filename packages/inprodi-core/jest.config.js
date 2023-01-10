module.exports = {
	verbose         : true,
	testEnvironment : "jsdom",
	transformIgnorePatterns : [
		//https://jaketrent.com/post/jest-unexpected-token-typescript/
		//https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
		"/node_modules/(?!(@inprodi/icons)/)",
	],
};
