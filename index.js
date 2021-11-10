window.addEventListener("DOMContentLoaded", () => {
  $.get("controllers/indexController.php", (res) => {
    const accountActionsDiv = $(".account-actions");
    const data = JSON.parse(res);
    
    if (!isEmpty(data)) {
      return;
    }

    accountActionsDiv.html(`
        <div class="text-end">
            <a class="btn btn-outline-light me-2" href="account/login.php">Login</a>
            <a class="btn btn-warning" href="">Sign up</a>
        </div>
    `);
  });

  $('#app').load("views/home.html")
});
