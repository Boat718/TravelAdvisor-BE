const passport = require("passport");
const {Strategy, ExtractJwt} = require('passport-jwt');
const secrectKey = process.env.secrectKey;

const option = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:secrectKey
}

const JWTStrategy = new Strategy(option, async (payload, done)=>{
    const targetUser = payload;
    // console.log(payload);
    if(targetUser){
        done(null,targetUser);
    }else{
        done(null, false);
    }
})

passport.use("jwt",JWTStrategy);