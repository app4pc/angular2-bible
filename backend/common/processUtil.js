/**
 * Created by NB on 30-Jan-16.
 */
module.exports=function(express,app){
    process.on('uncaughtException', function(err) {
        console.log(err, err.stack.split("\n"))
    });
};
