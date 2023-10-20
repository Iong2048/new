document.addEventListener("DOMContentLoaded", () => {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  let imgurl = '';
  const imagefile=document.getElementById("input-file")
  imagefile.addEventListener("change", (e) =>{
    const image = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    imgurl=reader.result;
  });

  if (image) {
    reader.readAsDataURL(image);
  }
  })
  if (document.querySelector("#create-post")) {
    document.querySelector("#create-post").addEventListener("submit", (e) => {
      e.preventDefault();
      const content = document.getElementById("hi").value;
      const img = imgurl
      // const inputfile = document.getElementById("input-file");
      // inputfile.onchange = function(){
      //   anh.src= URL.createObjectURL(inputfile.Files[0])
      // }
      const title =document.getElementById("tieude").value;

      posts.push({
        content,
        img,
        // inputfile,
        title,
      });
      localStorage.setItem("posts", JSON.stringify(posts));
      Toastify({
        text: "POSTED",
        duration: 1500,
        destination: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    });
  }

  

  if (document.querySelector("#feeds")) {
    const adminPostsContainer = document.querySelector("#feeds");
    adminPostsContainer.innerHTML = posts
      .map(
        (post, index) => `
            <div class="feed">
            <div class="head">
                <div class="user">
                    <div class="profile-photo">
                        <img src="empty-gas-station.avif">
                    </div>
                    <div class="admin-posts">
                        <h3>${post.title}</h3>
                        <small>${post.content}</small>
                    </div>
                    <span class="edit">
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </span>
                </div>
            </div>
            <div class="photo">
                <img src="${post.img}">
            </div>
            <button onclick="updatePost(${index})">Cập nhật</button>
            <button onclick="deletePost(${index})">Xóa</button>
        </div>
        `
      )
      .join("");
  }

  window.updatePost = (index) => {
    const title = prompt("Nhập tiêu đề mới:", posts[index].title);
    const content = prompt("Nhập nội dung mới:", posts[index].content);

    if (title && content) {
      posts[index] = { title, content };
      localStorage.setItem("posts", JSON.stringify(posts));
      window.location.reload();
    }
  };

  window.deletePost = (index) => {
    if (confirm("Bạn có chắc chắn muốn xóa bài đăng này?")) {
      posts.splice(index, 1);
      localStorage.setItem("posts", JSON.stringify(posts));
      window.location.reload();
    }
  };
});
