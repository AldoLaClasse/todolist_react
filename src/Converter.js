import { useState } from 'react'
import Display from './Display'
import CurrencySwitcher from './CurrencySwitcher'

const Converter = () => {

    // Hook useState
    const [currency, setCurrency] = useState('€')

    const handleChangeCurrency = () => {
        const change = currency === '€' ? '$' : '€'
        setCurrency(change)
    }

    return (
        <div>
            <Display currency={currency} />
            <CurrencySwitcher currency={currency} handleChangeCurrency={handleChangeCurrency} />
        </div>
    )

}

export default Converter;