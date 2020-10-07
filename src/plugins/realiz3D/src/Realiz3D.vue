<script>
const cloudUrlMap = {
  3059: "https://cloud.realiz3d.fr/dashboard/start/socotec",
  3311: "https://cloud.realiz3d.fr/dashboard/start/Socotec_rennes",
};

export default {
  // https://vuejs.org/v2/guide/components.html
  name: "realiz3D",
  data() {
    return {
      iframeUrl: "",
    }
  },
  onOpen() {
    if (this.iframeUrl) {
      this.$viewer.globalContext.modals.pushModal({
        template: `
          <div style="margin:10px; height:95vh; width:95vw;">
            <iframe src="${this.iframeUrl}" height="100%" width="100%"></iframe>
          </div>`
      })
    } else {
      this.$viewer.localContext.hub.emit("alert", {
        type: "error",
        message: 'This plugin should be used on Socotec models only',
      });
    }
  },
  created() {
    const cloudId = parseInt(this.$viewer.api.cloudId);
    this.iframeUrl = cloudUrlMap[cloudId] || "";
  }
};
</script>
