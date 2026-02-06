import { NextResponse } from "next/server";

// Mock data
const products = [
    {
        id: '1',
        name: 'iPhone 15 Pro',
        description: 'Smartphone Apple dernière génération',
        price: 850000,
        image_url: 'https://images.unsplash.com/photo-1696446702967-3a2f6d1f6b28?w=400',
        category: 'electronics',
        stock: 15,
        created_at: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'MacBook Pro 14"',
        description: 'Ordinateur portable professionnel',
        price: 1500000,
        image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
        category: 'electronics',
        stock: 8,
        created_at: new Date().toISOString(),
    },
    {
        id: '3',
        name: 'Nike Air Max',
        description: 'Chaussures de sport confortables',
        price: 45000,
        image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        category: 'fashion',
        stock: 30,
        created_at: new Date().toISOString(),
    },
];

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const product = products.find((p) => p.id === params.id);

    if(!product) {
        return NextResponse.json(
            { success: false, message: 'Produit non trouvé' },
            { status: 404 }
        );
    }

    return NextResponse.json({
        success: true,
        data: product,
    })
}