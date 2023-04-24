import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.scss';
import './styles/color.scss';
import './styles/fonts.scss';
import './styles/index.css';
import { RecoilRoot } from "recoil";
import './lang/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
)
