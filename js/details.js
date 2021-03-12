// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const deleteBtn = document.querySelector('.delete');
uri = `http://localhost:3000/posts/${id}`;

const renderDetails = async () => {
  const res = await axios.get(uri);
  const post = res.data;

  let template = '';

  template += `<div>
    <h2>${post.title}</h2>
    <p><small>${post.likes} likes</small></p>
    <p>${post.body}</p>
    </div>`;

  const detailsHolder = document.querySelector('.details');
  detailsHolder.innerHTML = template;
};

const deleteBlog = async () => {
  await axios.delete(uri);
  window.location.replace('index.html');
};

deleteBtn.addEventListener('click', deleteBlog());
renderDetails();
