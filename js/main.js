// hover over profile to make toggle
(() => {
  const img_profile = document.querySelector(".nav-bar img.profile");
  let _i = 0;
  img_profile.onclick = () => {
    if (!_i) {
      document.querySelector(
        ".profile-popovers"
      ).style.display = 'block';
      _i = 1;
    } else {
      document.querySelector(
        ".profile-popovers"
      ).style.display = 'none';
      _i = 0;
    }
  };
})();
