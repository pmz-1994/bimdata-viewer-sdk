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
  props: {
    active: Boolean // Listen to activation state
  },
  watch: {
    active: {
      handler(active) {
        if (active) { // Is plugin activated
          if (this.iframeUrl) {
            this.$plugins.modalManager.pushModal({
              template: `
                <div style="margin:10px; height:95vh; width:95vw;">
                  <iframe src="${this.iframeUrl}" height="100%" width="100%"></iframe>
                </div>`
            });
          }
          else {
            this.$hub.emit('alert', {
              type: 'error',
              message: 'This plugin should be used on Socotec models only'
            });
          }
        }
      }
    }
  },
  methods: {
  },
  created() {
    const cloudId = parseInt(this.$utils.getCloudId());
    this.iframeUrl = cloudUrlMap[cloudId] || "";
  }
};
</script>
