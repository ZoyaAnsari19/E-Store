// const getCategories = async () => {
//     const response = await fetch('https://fakestoreapi.com/products/category');

//     const data = await response.json();
//     return data.categories;
// }

// const getProducts = async (product_id = null) => {
//     try {
//         let API = 'https://fakestoreapi.com/products/category';
//         if (product_id != null) {
//             API += "/" + product_id;
//         }

//         const response = await fetch(API);

//         const data = await response.json();
//         return product_id == null ? data.products : data.product;

//     }catch(err) {
//         console.log(err.message);
//         return null;
//     }
// }

// export { getCategories, getProducts}

const getCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  return data; // Ye ek array of category strings hoga
}

const getProducts = async (category = null) => {
  try {
    let API = 'https://fakestoreapi.com/products';
    if (category != null) {
      API = `https://fakestoreapi.com/products/category/${category}`; // category specific products ke liye sahi endpoint
    }
    const response = await fetch(API);
    const data = await response.json();
    return data; // Ye array of products hoga ya sab products ka data jab category null ho
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

export { getCategories, getProducts }
