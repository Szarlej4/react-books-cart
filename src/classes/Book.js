class Book {
	constructor(title, author, price) {
		this.id = Date.now().toString(32) + Math.random().toString(16);
		this.title = title;
		this.author = author;
		this.price = price;
	}
}

export default Book;
