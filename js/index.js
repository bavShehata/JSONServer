const searchBar = document.querySelector('form input[type="text"]');

const renderPosts = async (term) => {
  var uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
  if (term) {
    uri += `&q=${term}`;
  }
  try {
    const res = await axios.get(uri);
    const posts = res.data;

    let template = '';
    posts.forEach((post) => {
      template += `<div>
    <h2>${post.title}</h2>
    <p><small>${post.likes} likes</small></p>
    <p>${post.body}...</p>
    <a href="
        details.html?id=${post.id}">Learn more</a>
    </div></br>`;
    });
    const blogsHolder = document.querySelector('.blogs');
    blogsHolder.innerHTML = template;
  } catch (e) {
    console.log("Coldn't display blogs: ", e);
  }
};

renderPosts();

searchBar.addEventListener('keyup', () => {
  renderPosts(searchBar.value);
});
