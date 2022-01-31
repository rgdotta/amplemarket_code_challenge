const src = "http://localhost:3000";
let template;

window.addEventListener(
  "message",
  (event) => {
    if (event.origin !== src && !event.data?.template) {
      return;
    }

    template = event.data.template;
  },
  false
);

InboxSDK.load(2, "sdk_rafa_amp_id_013b91637a").then(function (sdk) {
  sdk.Compose.registerComposeViewHandler(function (composeView) {
    const modalHtml = `<div style='width: 300px; padding: 24px;'>
                         <p style='font-weight: 700;'>Templates</p>
                         <iframe src=${src}/templates title='Gmail templates options' style='border: 1px solid rgba(124, 124, 124, 0.31); border-radius: 7px;'></iframe>
                       </div>`;

    composeView.addButton({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/116/116340.png",
      title: "Templates",
      onClick: function (event) {
        const modal = sdk.Widgets.showModalView({
          el: modalHtml,
          chrome: false,
          buttons: [
            {
              type: "PRIMARY_ACTION",
              text: "Confirm",
              onClick: () => {
                event.composeView.setBodyHTML(template);
                modal.close();
              },
            },
            {
              text: "Cancel",
              onClick: () => {
                modal.close();
              },
            },
          ],
        });
      },
    });
  });
});
