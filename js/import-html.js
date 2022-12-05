// importing html file
const import_html = (path, destination) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", path);
  xhr.onload = () => {
    document.querySelector(destination).innerHTML = xhr.responseText;
  };
  xhr.send(null);
};
