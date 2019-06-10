'use strict'

module.exports = function(_, passport, userValid) {

    return {
        SetRouting: function(router){
            router.get('/', this.indexPage);
            router.get('/signup', this.getSignUp);
            
            router.post('/', userValid.logInValidation, this.postLogin)
            router.post('/signup', userValid.signUpValidation, this.postSignUp);
        },    

        indexPage: function(req, res) {
            const errors = req.flash('error');
            return res.render('index', {title: 'Footballk | Login', messages: errors, hasErrors: errors.length > 0});
            
        },

        getSignUp: function(req, res) {
            const errors = req.flash('error');
            return res.render('signup', {title: 'Footballk | Login', messages: errors, hasErrors: errors.length > 0});
        },
        
        postSignUp: passport.authenticate('local-signup', {
            successRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true

        }),

        postLogin: passport.authenticate('local-login', {
            successRedirect: '/home',
            failureRedirect: '/',
            failureFlash: true

        }),

    }
}