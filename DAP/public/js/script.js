document
  .getElementById("generator-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var url = document.getElementById("iframe-url").value;
    // var width = document.getElementById("iframe-width").value;
    // var height = document.getElementById("iframe-height").value;

    var iframeCode = `<iframe id="iFrame-window" src=${url} width="1000px" height="1000px"></iframe>`;

    document.getElementById("generated-iframe").innerHTML = iframeCode;
    document.getElementById("result-container").style.display = "block";
    setTimeout(myGreeting, 1000);
  });

function printDOM() {
  console.log(document.getElementsByTagName('body')[0].innerHTML) ;
}

function myGreeting() {
  printDOM()
  var iFrameTextArea = document.getElementById("iFrame-window");
  // console.log("iFrameTextArea:" + iFrameTextArea);
  iFrameTextArea.style.backgroundColor = "#34ebd8";
  // var iframeBody = document.getElementById("iFrame-window").contentWindow;
  document.getElementById("iFrame-window").contentWindow.postMessage("hey", "http://localhost:3001/");
  // console.log(iframeBody.document.getElementsByTagName('body')[0].innerHTML) ;
  // iframeBody.document.getElementById("search-box").focus();
}
