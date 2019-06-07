'use strict'

module.exports = function() {
    return {
        signUpValidation: (req, res, next) => {
            req.checkBody('username', 'Username is required').notEmpty();
            req.checkBody('username', 'Username must not be less than 5 characters').isLength({min: 5});
            req.checkBody('email', 'email is required').notEmpty();
            req.checkBody('email', 'email is Invalid').isEmail();
            req.checkBody('password', 'Password is required').notEmpty();
            req.checkBody('password', 'Password must not be less than 5 characters').isLength({min: 5});

            req.getValidationResult()
                .then((result) => {
                    const errors = result.array();
                    const messages = [];
                    errors.forEach((error) => {
                        messages.push(error.msg)
                    });

                    req.flash('error', messages)
                    res.redirect('/signup');
                })
                .catch((error) => {
                    return next();
                })
        },


        logInValidation: (req, res, next) => {
            req.checkBody('email', 'email is required').notEmpty();
            req.checkBody('email', 'email is Invalid').isEmail();
            req.checkBody('password', 'Password is required').notEmpty();
            req.checkBody('password', 'Password must not be less than 5 characters').isLength({min: 5});

            req.getValidationResult()
                .then((result) => {
                    const errors = result.array();
                    const messages = [];
                    errors.forEach((error) => {
                        messages.push(error.msg)
                    });

                    req.flash('error', messages)
                    res.redirect('/');
                })
                .catch((error) => {
                    return next();
                })
        }
    }
}