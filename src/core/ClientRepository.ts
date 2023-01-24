import Client from "./Cliente"


export default interface ClientRepository{
    save(client: Client): Promise<Client>
    exclude(client: Client): Promise<void>
    getAllClients(): Promise<Client[]>
}