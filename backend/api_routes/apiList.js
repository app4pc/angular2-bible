var path=require("path");
var createToken=function (user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
};
module.exports ={
    "get":[
		{
				"url":['/', '/login', '/dashboard','/admin/*'],
				"callback":function(req, res, next){
					console.log("__dirname",__dirname);
					res.sendFile(path.join(__dirname,'/../../dist/index.html'));
				}
		}
    ],
    "post":[
      {
        "url":'/api/login',
        "callback":function(req, res, next){
          res.send({
            'X-Auth-Token':"data.token",
            'username':"data.result.username",
            'user_type':"data.result['user_type']",
            'user_role':"data.result['user_role']",
            'name':" data.result.name",
            'email':" data.result.email",
            'clientname':" data.result.clientname",
            'algo_access':" data.result.algo_access",
            'jwt':" data.token",
            'loggedInAt':""+((new Date()).getTime())
          });
        }
      },
      {
        "url":'/api/forgotPassword',
        "callback":function(req, res, next){
          res.send({
            'X-Auth-Token':"data.token",
            'username':"data.result.username",
            'user_type':"data.result['user_type']",
            'name':" data.result.name",
            'email':" data.result.email",
            'clientname':" data.result.clientname",
            'algo_access':" data.result.algo_access",
            'jwt':" data.token",
            'loggedInAt':""+((new Date()).getTime())
          });
        }
      },
      {
        "url":'/api/user_register',
        "callback":function(req, res, next){
          res.send({
            'X-Auth-Token':"data.token",
            'username':"data.result.username",
            'user_type':"data.result['user_type']",
            'name':" data.result.name",
            'email':" data.result.email",
            'clientname':" data.result.clientname",
            'algo_access':" data.result.algo_access",
            'jwt':" data.token",
            'loggedInAt':""+((new Date()).getTime())
          });
        }
      }
    ]
};


