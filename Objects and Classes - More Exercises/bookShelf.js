function bookShelf(input) {
  let shelvesList = new Map();
  let bookList = new Map();
  for (let line of input) {
    if (line.includes("->")) {
      let [id, genre] = line.split("->").map((str) => str.trim());
      if (![...shelvesList.values()].includes(id)) {
        shelvesList.set(genre, id);
        bookList.set(genre, []);
      }
    } else {
      let [bookTitle, bookAuthor, genre] = line
        .split(/[:,]+/)
        .map((str) => str.trim());
      if (bookList.has(genre)) {
        bookList.get(genre).push({
          bookTitle: bookTitle,
          bookAuthor: bookAuthor,
        });
      }
    }
  }

  [...bookList.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .forEach((shelf) => {
      let [genre, books] = shelf;
      books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
      console.log(`${shelvesList.get(genre)} ${genre}: ${books.length}`);
      for (let book of books) {
        console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
      }
    });
}
bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
bookShelf([
  "1 -> mystery",
  "2 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Lions and Rats: Gabe Roads, history",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
]);
