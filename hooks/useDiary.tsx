import { useState, useEffect, useCallback } from 'react';
import type { CollectionItem } from '@/types';

const COLLECTION_STORAGE_KEY = 'the-better-you-user-collection';

const getStoredCollection = (): CollectionItem[] => {
    try {
        const storedJSON = localStorage.getItem(COLLECTION_STORAGE_KEY);
        if (!storedJSON) return [];
        const items = JSON.parse(storedJSON);
        return Array.isArray(items) ? items : [];
    } catch (error) {
        console.error("Failed to parse collection items from localStorage", error);
        return [];
    }
};

export const useUserCollection = () => {
    const [items, setItems] = useState<CollectionItem[]>(getStoredCollection);

    useEffect(() => {
        localStorage.setItem(COLLECTION_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addItem = useCallback((itemData: Omit<CollectionItem, 'id'|'dateSaved'>) => {
        const newItem: CollectionItem = {
            id: crypto.randomUUID(),
            ...itemData,
            dateSaved: new Date().toISOString(),
        };
        setItems(prev => [newItem, ...prev]);
        return newItem;
    }, []);
    
    const updateItem = useCallback((updatedItem: CollectionItem) => {
        const newItem = { ...updatedItem, dateSaved: new Date().toISOString() };
        setItems(prev => prev.map(item => item.id === updatedItem.id ? newItem : item));
    }, []);

    const getItemById = useCallback((id: string) => {
        return items.find(item => item.id === id);
    }, [items]);

    const deleteItem = useCallback((id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }, []);
    
    return { items, addItem, deleteItem, updateItem, getItemById };
};