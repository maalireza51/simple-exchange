import React, { useState } from 'react'
import Convert from '../convert/Convert'
import Menu from './Menu'

export default function Main() {
    const [page, setPage] = useState("menu")
    const handlePage = (page) => {
        setPage(page)
    }

    return (
        <>
            {page==='menu' ? <Menu handleClick={handlePage}/> : <Convert handleBack={handlePage}/>}
        </>
    )
}
