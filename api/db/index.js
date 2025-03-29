const mongoose = require('mongoose');

const { MongoClient } = require('mongodb');

async function connectToDB() {
  const uri = process.env.ATLAS_URI;
  const client = new MongoClient(uri);
  try {
    console.log('eentre');
    await client.connect();
    const fetchTest = await client
      .db('sample_mflix')
      .collection('comments')
      .find({ name: 'John Bishop' })
      .limit(1)
      .toArray((err, result) => {
        console.log('--->', result);
        console.log('error arriba --->', err);
        return result;
      })
      .catch((err) => {
        console.log('fue al error');
        console.log(err);
      });

    return fetchTest;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { connectToDB };
