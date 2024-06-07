import React from 'react';
import ReactDOM from 'react-dom/client';
import { Model, createServer } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          amount: 6000 ,
          category: 'Dev',
          createdAt: new Date('2024-06-06 10:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          amount: 1000 ,
          category: 'Casa',
          createdAt: new Date('2024-06-06 11:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = "api"

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

