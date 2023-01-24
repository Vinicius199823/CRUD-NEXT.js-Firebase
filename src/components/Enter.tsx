interface EnterProps {
    text: string,
    type_?: 'text' | 'number'
    value_: any
    onlyReading?: boolean
    className?:string
    onChange?: (value_: any) => void
}




export default function Enter(props: EnterProps) {
    return (
        <div className={ `flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input type={props.type_ ?? 'text'} value={props.value_}
                readOnly={props.onlyReading}
                onChange = { e => props.onChange?.(e.target.value)}
                className={`
                border border-purple-500 rounded-lg
                bg-gray-50
                focus:outline-none
                px-4 py-2 

            `}>

            </input>
        </div>
    )
}