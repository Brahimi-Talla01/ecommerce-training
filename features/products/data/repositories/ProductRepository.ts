/**
 * MISSION 1 - ÉTAPE 2
 * 
 * Implémenter le ProductRepository qui :
 * - Utilise apiClient pour appeler l'API
 * - Transforme les données avec ProductMapper
 * - Retourne des instances de Product
 */

import { apiClient } from '@/core/api/client';
import { Product } from '../../domain/entities/Product';
import { IProductRepository } from '../../domain/repositories/IProductRepository';

export class ProductRepository implements IProductRepository {
    // TODO: Implémenter getProducts()
    async getProducts(): Promise<Product[]> {
        // Faire l'appel API avec apiClient.get('/products')
        // Mapper les données avec ProductMapper
        // Retourner les produits
        throw new Error('Not implemented');
    }

    // TODO: Implémenter getProductById()
    async getProductById(id: string): Promise<Product> {
        throw new Error('Not implemented');
    }
}

export const productRepository = new ProductRepository();