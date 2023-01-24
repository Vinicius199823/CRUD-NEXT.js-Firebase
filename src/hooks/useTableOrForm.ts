import { useState } from "react";

export default function useTableOrForm(){
    const [visible, setVisible] = useState<'Table' | 'Form'>('Table')
    const showTable = () => setVisible('Table')
    const showForm = () => setVisible('Form')
    return{
        FormVisible: visible === 'Form',
        TableVisible: visible === 'Table',
        showForm,
        showTable
    }
}