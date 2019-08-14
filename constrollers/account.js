const get = (req, res) => {
    console.log(req.url);
    res.status(200).json({ user: 'Miguel Curilén' });
};


module.exports = {
    get
}