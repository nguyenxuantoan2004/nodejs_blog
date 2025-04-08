class NewsController {
    // GET /news
    index(req, res) {
        res.render("news");
    }

    // GET /news/:slug
    show(req, res) {
        res.send("News detail");
    }
}

export default new NewsController(); // nếu dùng ESM
// This code defines a NewsController class with an index method that is currently empty.
