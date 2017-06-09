require(["editor/app", "markdown"], function(App, markdown) {
  window.editorApp = App;

  $(function(){
    var options = {
      embed: $("title").html().indexOf("Tibetan") > -1
    };

    App.start(options);
  });

});
