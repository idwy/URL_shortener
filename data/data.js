

 
const {Datastore} = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = new Datastore();



module.exports=async function addURL(URL,shortURL) {
  const entity = {
    key:datastore.key('URL'),
    data: [
      {
        name: 'created',
        value: new Date().toJSON(),
      },
      {
        name: 'URL',
        value: URL,
      },
      {
        name: 'shortURL',
        value: shortURL,
      },
    ],
  };

  try {
    await datastore.save(entity);
    console.log(`URL created successfully.`);
  } catch (err) {
    console.error('ERROR:', err);
  }
}

