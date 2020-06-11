import Realiz3DComponent from './Realiz3D.vue';
import icon from '../assets/logo.png';

export default {
  name: 'Realiz3DPlugin', // The name of the plugin. this.$plugins.MyPluginName to access it from other plugins
  component: Realiz3DComponent,
  display: {
    iconPosition: 'right', // Add an icon in the left or right panel. Value can be "left" or "right"
    content: 'free' // How the viewer show the plugin content. Value can be "windowed", "simple" of "free"
  },
  tooltip: 'tooltip', // Can be an i18n path or a string shown in all languages
  keepActive: true, // If true, the window won't be closed if user click somewhere else.
  icon: {
    imgUri: icon,
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
