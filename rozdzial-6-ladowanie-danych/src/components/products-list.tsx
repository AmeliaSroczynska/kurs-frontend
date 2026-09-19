'use client'

import { useQuery } from "@tanstack/react-query";
import {useState} from "react";

interface ListaProps {
    initialData: any[];
}

function ProductsList({initialData}:ListaProps){
    const [search, setSearch] = useState('')

    const {data, isLoading, isError}=useQuery<any[]>({
        queryKey: ['products', search],
        queryFn: ()=>
            fetch(`https://dummyjson.com/products/search?q=${search}`).then(r=>r.json().then(dane => dane.products)),
        initialData: search ? undefined : initialData,
        staleTime: 60_000,
    });
    if(isLoading) return <p>Ładowanie...</p>;
    if(isError) return <p>Błąd!</p>;

    return <div>
        <div>
            <h1 style={{ marginBottom: '10px' }}>Katalog produktów</h1>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Szukaj..."
                style={{ padding: '5px', marginBottom: '15px' }}
            />

            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {data?.map(u => (
                    <li key={u.id}>
                        {u.title} - <b>{u.price}$</b>
                    </li>
                ))}
            </ul>
        </div>
    </div>;
}

export default ProductsList;