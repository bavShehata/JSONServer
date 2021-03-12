// javascript for create.html
const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault();

  var doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };
  console.log(doc);
  doc = JSON.stringify(doc);
  console.log(doc);
  var uri = 'http://localhost:3000/posts';

  await axios.post(uri, doc, {
    headers: { 'Content-Type': 'application/json' },
  });

  try {
    const res = await axios.get(uri);
    const posts = res.data;
    window.location.replace('/index.html');
  } catch (err) {
    console.log("Coldn't add blog: ", err);
  }
};
form.addEventListener('submit', createPost);
