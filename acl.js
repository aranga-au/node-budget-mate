var acl ={
    '/category/*':{
        'GET':['ADMIN'],
        'POST':['ADMIN']
    },

};
module.exports = acl;