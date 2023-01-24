import Client from "../core/Cliente"
import { EditIcon } from "./icons"
import { TrashIcon } from "./icons"

interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    excludedClient?: (client: Client) => void
}


export default function Table(props: TableProps) {

    const displayActions = props.excludedClient || props.selectedClient
    function renderHeader() {
        return (

            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                {displayActions ? <th className="text-center p-4">Actions</th> : false}

            </tr>

        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {displayActions ? renderButtons(client) : false}

                </tr>
            )

        })
    }

    function renderButtons(client: Client) {

        return (
            <td className="flex justify-center">
                {props.selectedClient ? (
                    <button onClick={() => props.selectedClient?.(client)}className={`flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m1 `}>
                        {EditIcon}
                    </button>

                ): false}
                {props.excludedClient ? (
                    <button  onClick={() => props.excludedClient?.(client)} className={`flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m1`}>{TrashIcon}</button>

                ): false}
            </td>
        )
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>


    )
}