import ReactDOM from 'react-dom/client';
import 'src/index.css';
import {App} from 'src/App';
import { i18nInit } from 'src/i18n';

i18nInit()

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(<App/>)

