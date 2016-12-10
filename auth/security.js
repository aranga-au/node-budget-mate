/**
 * permison bitmask
 */
const PERMISSION = require('./security.js');
var _ = require('lodash');


function getBitmask(args){
    if (!args && args.length === 0){
        return;
    }
    var bit =0;
    _.forEach(args,function(i,v){
        if ( PERMISSION[v]){
            bit +=  PERMISSION[v];
        }
    });
}

function generatePermisionArray(bitmask){
    var ret = false;
    var ary=[];
    _.forEach( PERMISSION,function(k,v){
        if ((v & bitmask) === v){
            ary.push(k);
        }
    });
    return ary;
}


module.exports = function(bitmask){
    var _permissionArray = generatePermisionArray(bitmask);
    var security={};

    security.hasRights=function(permisionArray){
        _.intersection(permisionArray)
    };
    security.addPermission = function(p){
        if (PERMISSION[p]){
            var bit = PERMISSION[p];
            if (bit & bitmask){
                return;
            }
            bitmask +=bit;
        }
    }
    
};
