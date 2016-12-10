/**
 * Created by arang on 10/12/2016.
 */
function User (args){
    var user={};
    user.userid = args.id || 'generated';
    user.memberId = args
    user.email = args.email || '';
    user.displayName = args.displayName || '';
    user.firstName = args.firstName || '';
    user.lastName = args.lastName || '';
    user.permission = args.permission||0;
}