import Modal from "react-modal";
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

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

      <Modal 
        isOpen={isNewTransactionsModalOpen} 
        onRequestClose={handleCloseNewTransactionsModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
