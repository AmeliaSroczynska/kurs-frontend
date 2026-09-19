import ProductsList from '../../components/products-list';
import AddProductForm from "@/components/products-form";

export default async function Example(){
    const res=await fetch(
        "https://dummyjson.com/products",
        {next: {revalidate: 60}}
    );

    const products=await res.json();

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <ProductsList initialData={products.products} />

            <hr style={{ margin: '30px 0', maxWidth: '300px' }} />

            <AddProductForm />
        </div>
    );}