const mongoose = require('mongoose');
const port = process.env.PORT;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

