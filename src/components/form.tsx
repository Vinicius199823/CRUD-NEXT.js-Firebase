import Enter from "./Enter"
import Client from "../core/Cliente"
import { useState } from "react"
import Button from "./Button"
interface FormProps {
    client: Client
    clientChange?: (client: Client) => void
    cancel?:() => void

}




export default function Form(props: FormProps){
    const id = props.client?.id ?? null
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    
    return(
        <div>
            {id ? (
                <Enter text="Code" value_={id} className="mb-4"></Enter>
             ): false}
            <Enter text="Name" value_={name} onChange={setName} className='mb-4'></Enter>
            <Enter text="Age" type_="number" value_={age} onChange={setAge}></Enter>
            <div className="flex justify-end m-3">
                <Button color="blue" className="mr-2" onClick={()=> props.clientChange?.(new Client(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button className="bg-gradient-to-r from-gray-400 to-gray-700" onClick={props.cancel}>
                    cancelar
                </Button>
            </div>
        </div>
    )
}