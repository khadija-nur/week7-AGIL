const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
    const user = req.user; 
    if (!user) {  // if user doesn't exist in database, throw error and ask user to log in
        res.status(401).send(`
        <h1>Please log in to view this page</h1>
        <a href="/log-in">Log in</a>
      `);
  
    } else { 
        next();
    }
}

module.exports = { checkAuth }