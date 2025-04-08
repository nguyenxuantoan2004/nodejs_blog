import newsRouter from './news.router.js';
import sideRouter from './site.router.js';

function router(app) {
    app.use('/news', newsRouter); // GET /news

    app.use('/', sideRouter)
}

export default router;