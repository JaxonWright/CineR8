<img src="https://github.com/JaxonWright/CineR8/blob/master/public/images/logoMain.png?raw=true" width="200px" align="left"/><img src="https://www.themoviedb.org/assets/static_cache/bb45549239e25f1770d5f76727bcd7c0/images/v4/logos/408x161-powered-by-rectangle-blue.png" width="200px" align="right"/>
<br/><br/><br/><br/>
Description
-----------
CineR8 *(Pronounced Cine [like in Cinema]-Rate)* is an easy-to-use and very cleanly designed movie rating web application. The design tries to follow Google's Material Design guidelines as best as possible, which makes it look as clean as it does. There are no advertisements or obnoxious elements that hamper the user experience for what should be a simple web application. Check it out now at [CineR8.com](https://ciner8.com)!

Screenshots
----------
### Home Page
<img src="http://i.imgur.com/wQAyNnQ.jpg"/>

### Search Results Page
<img src="http://i.imgur.com/ThJ8PVW.png"/>

### Movie Listing Page
<img src="http://i.imgur.com/6777tp6.png"/>

### User Page
<img src="http://i.imgur.com/he1IsXT.png"/>

### Login Page
<img src="http://i.imgur.com/7FTCpHA.png"/>

Technical Details
-----------
The Web app is built using [Ember.js](https://www.emberjs.com/), a very robust Javascript framework. All of the movie information is pulled from [TheMovieDB](https://www.themoviedb.org/) via their API. User authentication and ratings are stored using Google's [Firebase](https://firebase.google.com) real-time database. The only personal information stored is the user's email, of which is not visible to others and is not shared by CineR8 anywhere.

### Ember Addons Used
* [ember-cli](https://ember-cli.com/) - Commandline Interface for Ember
* [emberfire](https://www.npmjs.com/package/emberfire) - Gives the ability to use Ember Models as Firebase database entries
* [emberfire-utils](https://www.npmjs.com/package/emberfire-utils) - Adds functionality on top of emberfire to make things easier
* [ember-cli-star-rating](https://www.npmjs.com/package/ember-cli-star-rating) - Adds easy star rating functionality for users
* [ember-moment](https://www.npmjs.com/package/ember-moment) - Easy way to format date strings
* [ember-cli-document-title](https://github.com/kimroen/ember-cli-document-title) - Easy way to dynamically change page title
* [ember-cli-head](https://github.com/ronco/ember-cli-head) - Easy way to dynamically change items in document head

### Other Addons
* [Bootstrap](http://getbootstrap.com/)
* [Material Bootstrap](http://fezvrasta.github.io/bootstrap-material-design/)

### Can I Use This Code?
Sure, you can use this code or any piece of the code. This project is licensed under MIT, allowing you to basically do whatever you want. However, what would be more beneficial is you can make improvements directly to this project by submitting a pull request.

Why This Project Was Created
-----------
I know that there are bigger and arguably better services that do the same thing as CineR8. My motivation behind creating this web application was mainly to learn Ember.js, but I also wanted something simpler than the well-known services. I think that I acheived both goals and look forward to what this project will become over time.
