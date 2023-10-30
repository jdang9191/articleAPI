const getArticles = "SELECT * FROM articles";
const getArticleById =  "SELECT * FROM articles WHERE id = $1";
const addArticle = "INSERT INTO articles (articlename, author, date) VALUES ($1, $2, $3)";

module.exports = {
    getArticles,
    getArticleById,
    addArticle
}
