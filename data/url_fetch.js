const {Datastore} = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = new Datastore();

module.exports=async function fetchURL(shortURL) {
    const query = datastore
        .createQuery('URL')
        .filter('shortURL', '=', shortURL).limit(1)
  
    try {
      var results = await datastore.runQuery(query);
      console.log(results[0][0].URL)
      return results;
    } catch (err) {
      console.error('ERROR:', err);
    }
  }
  

//fetchURL('BCn')