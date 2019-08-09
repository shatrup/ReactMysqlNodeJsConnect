module.exports = function (app, conn) {
    app.get('/', function (req, res) {
        // res.send('hello this is a simple projets');
        conn.query('SELECT * FROM user', function (err, data) {
            (err) ? res.send(err) : res.json({ users: data });
        })
    });
};