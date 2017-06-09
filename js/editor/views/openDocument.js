define(["jquery",
        "backbone",
        "marionette",
        "text!templates/open_document.html",
        "bootstrap",
        "bootstrap.select"],
function($, Backbone, Marionette, Template, Bootstrap, BootstrapSelect) {
  var template = Template;
  var OpenDocumentModalView = Backbone.Marionette.ItemView.extend({
    __name__: 'OpenDialogView',
    toString: function() {
      return this.__name__ + "(" + (this.attributes ? JSON.stringify(this.attributes) : "") + ")";
    },
    elId: "#openDocumentModal",
    ui: {
      cancelBtn: '#openDocumentModal button.btn-cancel',
      saveBtn: '#openDocumentModal button.btn-save'
    },
    events: {
      'click @ui.cancelBtn': 'onCancel',
      'click @ui.saveBtn': 'onSave'
    },
    getTemplate: function(){
      return _.template(template)
    },
    onRender: function() {
      $("body").append(this.el);
      $(this.elId).on('show.bs.modal', {}, this.onDisplay);
      $(this.elId).modal({show: true,keyboard: true});
    },
    onDisplay: function(event) {
      try {
        $("#documentSelector").selectpicker({
          style: 'btn-default',
          size: 7,
          mobile: true,
          showSubtext: true
        });
      }catch(e){
        console.log(e);
      }
    },
    onHidden: function(event) {
      event.data.view.destroy();
      $("body").removeClass("modal-open");
    },
    onSave: function(e) {
      try {
        var selected = $("#documentSelector option:selected");
        var file = selected.val();
        Backbone.Wreqr.radio.commands.execute( 'editor', 'navigate', "open", file.replace("_posts/", ""));
      } catch(e) {
        console.log(e);
      }
      finally {
        $(this.selector).modal('hide');
        $("body").removeClass("modal-open");
        this.destroy();
      }
    }
  });

  return OpenDocumentModalView;
});
