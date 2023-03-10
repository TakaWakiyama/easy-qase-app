import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/App.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

// TODO: .evnに記載する
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


// Note: concept of strict mode https://ja.reactjs.org/docs/strict-mode.html
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
