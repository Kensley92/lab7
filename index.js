import Express from "express";
const App = Express();
const port = 3002;
const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];
App.get('/names/:title', (req, res) => {
    let title = req.params.title;
    if (names.includes(title)){
        res.json({ Title: title});
    } else {
        res.json({ Title: "Not available"});
    }
});
App.get('/search/:title', (req, res) => {
    const result = names.filter(str => str.includes(req.params.title));

    if (result != 0) {
        res.json({ search: result});
    } else {
        res.json({ search: "Not available"});
    }
})
App.listen(port, () => {
});

   