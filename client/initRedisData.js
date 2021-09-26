const axios = require('axios');

const productID = 48445;

const InitData = (ID, count) => {
  const product = axios.get(`http://localhost:3000/api/products/${ID}`);
  const style = axios.get(`http://localhost:3000/api/products/${ID}/style`);
  // const meta = axios.get(`http://localhost:3000/api/reviews/meta/?product_id=${ID}`);

  axios.all([
    product, style,
  ])
    .then(axios.spread(() => {
      console.log(`Run ${count} is complete`);
      console.log(`Product Id ${ID} ran`);
    }))
    .catch((err) => {
      console.log(err);
    });
};

const getRelated = async () => {
  try {
    const related = await axios.get(`http://localhost:3000/api/products/${productID}/related`);
    const { data } = related;
    const products = [productID, ...data];

    await products.map((product_id, count) => InitData(product_id, count));
  } catch (err) {
    console.log(err);
  }
};

getRelated();
