const Mock = require("mockjs")
let data = Mock.mock({
    "list|20": [{
        "id|+1": 1,
        "title": "@ctitle",
        "price|10-500.2": 200,
        "state|0": 1,
        "count|10-30": 10,
        "cword": "@cword(10)",
        "src": "@image(100x100)"
    }]
});
export default data;