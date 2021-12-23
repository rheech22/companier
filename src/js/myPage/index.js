import { mainTag } from "./main.js";
import { myComments } from "./myComments.js";
import { user } from "./dummyUser.js";
import { myPage } from "./myPage.js";
import { changeName } from "./userChange.js";
import { myPosts } from "./myPosts.js";

const run = () => {
	window.addEventListener("DOMContentLoaded", () => {
		mainTag();
		myPage();
		changeName();
		myPosts(user);
		myComments(user);
	});
};

run();
