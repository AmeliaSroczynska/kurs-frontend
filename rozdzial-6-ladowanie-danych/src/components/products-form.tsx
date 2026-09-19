'use client';

import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export default function AddProductForm() {
    const queryClient = useQueryClient();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const {mutate} = useMutation({
        mutationFn: (newProduct: any) =>
            fetch("https://dummyjson.com/products/add", {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {'Content-Type': 'application/json'}
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['products'],
            });
            setTitle('');
            setPrice('');
            setCategory('');
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate({ title, price: Number(price), category });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <h2 style={{ margin: '0' }}>Dodaj produkt</h2>

            <input
                placeholder="Tytuł"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required style={{ padding: '5px' }} />
            <input
                type="number"
                placeholder="Cena"
                value={price}
                onChange={e => setPrice(e.target.value)}
                required style={{ padding: '5px' }} />
            <input
                placeholder="Kategoria"
                value={category}
                onChange={e => setCategory(e.target.value)}
                required style={{ padding: '5px' }} />

            <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Dodaj</button>
        </form>
    );
}