import Client from '../core/Cliente'
import Button from '../components/Button'
import Form from '../components/form'
import { useEffect, useState } from 'react'
import { emit } from 'process'
import ClientRepository from '../core/ClientRepository'
import CollectionClient from '../backend/db/CollectionClient'
import useTableOrForm from './useTableOrForm'

export default function useClients() {
    const repo: ClientRepository = new CollectionClient()

    const {showForm, showTable, FormVisible, TableVisible} = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])
    

    useEffect((getAll), [])

    function getAll() {
        repo.getAllClients().then(clients => {
            setClients(clients)
            showTable()
        })

    }
    function selectedClient(client: Client) {
        setClient(client)
        showForm()
    }
    async function excludedClient(client: Client) {
        await repo.exclude(client)
        getAll()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    function newClient(client: Client) {
        console.log('Client ' + client + ' Saved')
        setClient(Client.empty)
        showForm()
    }

    return {
        client,
        clients,
        newClient,
        saveClient,
        excludedClient,
        selectedClient,
        getAll,
        TableVisible,
        showTable
    }
}