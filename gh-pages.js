import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/hodgespodge/hodgespodge.github.io.git', // Update to point to your repository
  user: {
   name: 'Samuel Hodges', // update to use your name
   email: 'samuelhodges3000@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);