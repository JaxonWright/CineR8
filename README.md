<img src="https://github.com/JaxonWright/CineR8/blob/master/public/images/logoDark.png?raw=true" width="200px" align="left"/><img src="https://www.themoviedb.org/assets/static_cache/bb45549239e25f1770d5f76727bcd7c0/images/v4/logos/408x161-powered-by-rectangle-blue.png" width="200px" align="right"/>
<br/><br/><br/><br/>
Description
-----------
CineR8 *(Pronounced Cine [like in Cinema]-Rate)* is an easy-to-use and very cleanly designed movie rating web application. The design tries to follow Google's Material Design guidelines as best as possible, which makes it look as clean as it does. There are no advertisements or obnoxious elements that hamper the user experience for what should be a simple web application.

Technical Details
-----------
The Web app is built using [Ember.js](https://www.emberjs.com/), a very robust Javascript framework. All of the movie information is pulled from [TheMovieDB](https://www.themoviedb.org/) via their API. User authentication and ratings are stored using Google's [Firebase](https://firebase.google.com) real-time database. The only personal information stored is the user's email, of which is not visible to others and is not shared by CineR8 anywhere.

### Ember Addons Used
* [ember-cli](https://ember-cli.com/) - Commandline Interface for Ember
* [emberfire](https://www.npmjs.com/package/emberfire) - Gives the ability to use Ember Models as Firebase database entries

### Other Addons
* [Bootstrap](http://getbootstrap.com/)
* [Material Bootstrap](http://fezvrasta.github.io/bootstrap-material-design/)

