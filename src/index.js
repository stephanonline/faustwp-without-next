import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setConfig } from '@faustwp/core/dist/cjs/config/index'
import Page from './templates/Page'

export class OverrideGraphqlEndpointPlugin {
  apply(hooks) {
    const { addFilter } = hooks

    addFilter(
      'graphqlEndpoint',
      'reactonly',
      // eslint-disable-next-line no-unused-vars
      (graphqlEndpoint, context) => {
        console.log(process.env.REACT_APP_WORDPRESS_URL)
        return `${process.env.REACT_APP_WORDPRESS_URL}/graphql`
      }
    )
  }
}

setConfig({
  templates: {
    page: Page,
    single: Page,
    index: Page,
  },
  experimentalPlugins: [new OverrideGraphqlEndpointPlugin()]
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
