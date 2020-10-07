import Realiz3DComponent from './Realiz3D.vue';
import icon from '../assets/logo.png';

export default {
  name: 'Realiz3DPlugin', // The name of the plugin. this.$plugins.MyPluginName to access it from other plugins
  component: Realiz3DComponent,
  addToWindows: ["3d"],
  button: {
    position: "right",
    content: "free",
    keepOpen: true,
    tooltip: "Realiz3DPlugin.tooltip",
    icon: {
      imgUri: icon,
    },
  },
  i18n: {
    en: {
      tooltip: 'Open Realiz3D'
    },
    fr: {
      tooltip: 'Ouvrir Realiz3D'
    }
  }
};
