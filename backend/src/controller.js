const pool = require('../db');
const queries = require('./queries');


//gets all articles
const getArticles = (req, res) => {
    pool.query(queries.getArticles, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
    
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
const addArticle = (req, res) => {
 /*()   try {
        const { articleName, articleContent, author, date} = req.body;
        const newArticle = await pool.query
        ("INSERT INTO articles (articleName, articleContent, author, date) VALUES ($1, $2, $3, $4)", 
        [ articleName, articleContent, author, date]);
        res.json(newArticle.rows[0]);
    } catch (err) {
        console.error(err.message);
    } */

const { articlename, author, date } = req.body;
        pool.query(queries.addArticle, [articlename, author, date], (error,results) =>
        {
            if(error) throw error;
            res.status(200).send("Article added");
        })
    
};


//remove article from database
const removeArticle = async(req, res) => {
    try {
        
    } catch (err) {
        console.error(err.message);
    }
};

const updateArticle = async(req, res) => {
try {
    const { articleContent } = req.body;
    const update = await pool.query()
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