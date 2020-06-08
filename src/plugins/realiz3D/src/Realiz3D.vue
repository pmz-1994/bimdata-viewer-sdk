<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div></div>
</template>

<script>
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
    console.log(cloudId)
    if (cloudId === 3059 || cloudId === 129) {
      this.iframeUrl = "https://cloud.realiz3d.fr/dashboard/start/socotec";
    } else if (cloudId === 3311) {
      this.iframeUrl = "https://cloud.realiz3d.fr/dashboard/start/Socotec_rennes";
    }
  }
};
</script>

<style type="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>
