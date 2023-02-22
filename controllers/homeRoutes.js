const router = require('express').Router();
const { User, BlogPost, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true}));

        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in,
        });

    } catch(err) {
        res.status(500).json(err);
    }
});





router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;