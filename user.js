const postListElement = document.querySelector('.post-list');
function onSearchChange() {
  console.log('12354')
}
async function main() {
  const id = localStorage.getItem("id");

  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId`,
  );
  const postsData = await posts.json();
  console.log(postsData);

  postListElement.innerHTML = postsData
    .map(
      post =>
        `<div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`,
    )
    .join('');
}
main();
