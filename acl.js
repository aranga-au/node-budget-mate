var acl ={
    '/category/*':{
        'GET':['ADMIN'],
        'POST':['ADMIN']
    },
    '/user/profile':{
        'GET':['USER']
    }

};
module.exports = acl;