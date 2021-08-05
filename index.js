import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './src/app.json';
import i18n from './languages/i18next';
AppRegistry.registerComponent(appName, () => App);
