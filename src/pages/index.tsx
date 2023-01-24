import Layout from '../components/Layout'
import Table from '../components/Table'
import Button from '../components/Button'
import Form from '../components/form'
import useClients from '../hooks/useClients'

export default function Home() {

  const {client, clients,
    newClient, excludedClient , selectedClient, saveClient,
    getAll, TableVisible, showTable  
  } = useClients()
  

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Simple Register">
        {TableVisible? (
          <>
            <div className='flex justify-end'>
              <Button color="green" className="mb-4" onClick={() => newClient(client)}>New Client</Button>
            </div>
            <Table clients={clients} selectedClient={selectedClient} excludedClient={excludedClient}></Table>
          </>
        ) : (
          <Form client={client} clientChange={saveClient} cancel={()=>showTable}></Form>
        )}
      </Layout>
    </div>
  )
}
