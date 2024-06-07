import Modal from "react-modal";
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {
  const[isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

    function handleOpenNewTransactionsModal() {
        setIsNewTransactionsModalOpen(true)
    }
    
    function handleCloseNewTransactionsModal() {
        setIsNewTransactionsModalOpen(false)
    }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal}/>
      <DashBoard/>
      <NewTransactionModal isOpen={isNewTransactionsModalOpen} onRequestClose={handleCloseNewTransactionsModal}/>
      <GlobalStyle />
    </>
  );
}
