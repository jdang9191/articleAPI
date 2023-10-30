const pool = require('../db');
const queries = require('./queries');
module.exports = {};


//gets all articles
const getArticles = async(req, res) => {
    try {
        const allArticles = await pool.query("SELECT * FROM articles");
        res.json(allArticles.rows);
    } catch (err) {
        console.error(err.message);
    }
    
};


//gets specific article
const getArticleById = async(req, res) => {
    try {
        const { id }= req.params;
        const articles = await pool.query("SELECT * FROM articles WHERE id = $1");
        res.json(articles.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
};


//add article to database
const addArticle = async(req, res) => {
    try {
        const { articleName, articleContent, author, date} = req.body;
        const newArticle = await pool.query
        ("INSERT INTO articles (articleName, articleContent, author, date) values ($1, $2, $3, $4)");
        res.json(newArticle.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};


//remove article from database
const removeArticle = (req, res) => {
    try {
        
    } catch (err) {
        console.error(err.message);
    }
};

const updateArticle = (req, res) => {
try {
    
} catch (err) {
    console.error(err.message);
}
};



module.exports = {
    getArticles,
    getArticleById,
    addArticle,
    removeArticle,
    updateArticle,
};