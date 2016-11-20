var config = require('./config-local');
var dbcon = require('./utils/dbcon')(config);
var category = require('./category')(dbcon);

c = {
    id: 1,
    name: "Category 26",
    code: 'cat26',
    description: "category 26 description",
    type:0

};
/*
category.findById(1, function (e, r) {
    console.log(r);
});

category.update(c,function(e,r){
   console.log(r);
});
*/
category.delete(6,function (r,r) {
    console.log(r);
});