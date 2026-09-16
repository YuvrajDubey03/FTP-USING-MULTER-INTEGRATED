const create = async (req, res) => {
    console.log(req.body);
console.log(req.files)
    res.send('User created successfully');
}
module.exports = create;