class SiteController {
    // GET /
    index(req, res) {
        res.render("home");
    }

    // GET /search
    search(req, res) {
        res.send("News detail");
    }
}

export default new SiteController(); // nếu dùng ESM
// This code defines a NewsController class with an index method that is currently empty.
