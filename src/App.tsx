import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { DashBoard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { useRouter } from 'next/router';
import { useAuthContext } from './context/AuthContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);
  const { userAuth } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    // Verifica o estado de autenticação ao carregar o componente
    if (!userAuth) {
      router.push("/signIn"); // Redireciona para a tela de login se não estiver autenticado
    }
  }, [userAuth, router]);

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsModalOpen(false);
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />
      <DashBoard />
      <NewTransactionModal isOpen={isNewTransactionsModalOpen} onRequestClose={handleCloseNewTransactionsModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
