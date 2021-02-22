// const blogs = [
//   { title: 'why mac and cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50 },
// ];

// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: [
//     { title: 'why mac and cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 },
//   ],
//   // add a method
//   login: function () {
//     console.log('The user logged in');
//   },
//   logout: function () {
//     console.log('The user logged out');
//   },
//   logBlogs: function () {
    // because 'this' will be used, arrow func not available for the logBlogs method because the value of the 'this' keyword doesn't change from the point at which it was invoked in the method ie. the window object. It would pass that in to the method.
    // to get 'blogs' from the object, we have to understand and use 'this' keyword.
    // this refers to this user object and now we can access 'this.blogs'
    // console.log(this.blogs)
    // console.log(this)
//     console.log('The user has written the following blogs:');
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
  // DRYing out the methods in the user object would look like this:
//   logging() {
//     console.log('The user has logged the following blogs:');
//     this.blogs.forEach((blog) => {
//       console.log(blog);
//     });
//   },
// };

// The 'this' keyword is a context object and it represents the context of where the current code is being executed. If we use 'this' in the root of the document it's going to refer to the 'window' object. The global object. If we log 'this' to the console from inside the function, 'this' will refer to the user object (in this case).

// When we call a method, JS sets the value of the this keyword to be the object the method was used on... in this case, the user object.

// user.logBlogs();
// console.log(this); really interesting
// user.logging();

// user.login();
// user.logout();

// const name = 'mario';
// name.toUpperCase();

// a regular function isn't defined inside an object, a method is.


// blogs
// console.log(blogs)