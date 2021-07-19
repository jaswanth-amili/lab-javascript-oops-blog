//
{
	/* <div class="article-card" id="flashcard">
	<!-- <img src="./assets/java card image.svg" alt="" /> -->
	<div class="card-text" id="card-text">
		<!-- <h1 id="blog-title">sda</h1> -->
		<!-- <p id="blog-description">da</p> -->
		<!-- <p>Posted on</p> -->
	</div>
	<div class="card-buttons">
		<!-- <a><button type="button" id="edit">EDIT</button></a> <span> | </span> -->
		<!-- <a><button id="delete">DELETE</button></a> -->
	</div>
</div> */
}
class Blog {
	constructor(title, detail) {
		this.title = title;
		this.detail = detail;
	}

	addTitle() {
		var title_card = document.createElement("h1");
		title_card.setAttribute("id", "blog-title");
		const card_img = document.createElement("img");
		card_img.setAttribute("src", "./assets/java card image.svg");
		console.log(title_card);
		document.getElementById("card-text").appendChild(card_img);
		document.getElementById("card-text").appendChild(title_card);
		title_card.innerHTML += this.title;
	}
	addDescription() {
		var description_card = document.createElement("p");
		description_card.setAttribute("id", "blog-title");
		// console.log(description_card);
		document.getElementById("card-text").appendChild(description_card);
		description_card.innerHTML += this.detail;
	}
}
//logic to close popup
function closePopup() {
	document.getElementById("popupContact").style.display = "none";
}
//eventListener to open the popup
document.getElementById("addBlog").addEventListener("click", function () {
	document.getElementById("popupContact").style.display = "inherit";
});
//eventListener to close the popup
document.getElementById("close").addEventListener("click", closePopup);

//eventListener to create the object
document.getElementById("post").addEventListener("click", function () {
	const titleEle = document.getElementById("title");
	const detailEle = document.getElementById("detail");
	//Getting  user input
	const titleText = titleEle.value;
	const detailText = detailEle.value;
	//create object with user input
	let blogObject = new Blog(titleText, detailText);
	blogObject.addTitle();
	blogObject.addDescription();
	//clear input fields and close popup
	titleEle.value = detailEle.value = "";
	closePopup();
});
