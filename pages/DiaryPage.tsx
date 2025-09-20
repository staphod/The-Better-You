import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useUserCollection } from '@/hooks/useDiary';
import type { CollectionItem } from '@/types';
import PinModal from '@/components/PinModal';
import Modal from '@/components/Modal';
import { BookOpenIcon } from '@/components/icons/ModuleIcons';
import { TrashIcon, ClipboardIcon, CheckCircleIcon } from '@/components/icons/StatusIcons';

const APP_PIN_KEY = 'the-better-you-pin';

const UserCollectionPage: React.FC = () => {
    const { items, deleteItem } = useUserCollection();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState<string | null>(null);
    const [isPinModalOpen, setIsPinModalOpen] = useState(true);
    const [pinModalMode, setPinModalMode] = useState<'set' | 'enter'>('enter');

    const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    useEffect(() => {
        try {
            const storedPin = localStorage.getItem(APP_PIN_KEY);
            setPin(storedPin);
            if (!storedPin) {
                setPinModalMode('set');
            } else {
                setPinModalMode('enter');
            }
        } catch (e) {
            console.error("Could not read PIN from localStorage", e);
            setPinModalMode('set');
        }
    }, []);

    const handlePinSuccess = (newPin?: string) => {
        if (pinModalMode === 'set' && newPin) {
            try {
                localStorage.setItem(APP_PIN_KEY, newPin);
                setPin(newPin);
            } catch (e) { console.error("Could not save PIN to localStorage", e); }
        }
        setIsPinModalOpen(false);
        setIsAuthenticated(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this item from your collection? This action cannot be undone.")) {
            deleteItem(id);
        }
    };
    
    const handleCopy = (item: CollectionItem) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = item.content;
        const text = `Title: ${item.title}\n\n${tempDiv.textContent || tempDiv.innerText || ''}`;
        navigator.clipboard.writeText(text.trim());
        setCopiedId(item.id);
        setTimeout(() => setCopiedId(null), 2000);
    }
    
    if (!isAuthenticated) {
        return (
            <PinModal
                mode={pinModalMode}
                isOpen={isPinModalOpen}
                onClose={() => { /* Cannot close PIN for this page */ }}
                onSuccess={handlePinSuccess}
                storedPin={pin}
            />
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            {selectedItem && (
                 <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} title={selectedItem.title} size="3xl">
                    <div className="prose max-w-none prose-slate text-brand-text-muted prose-headings:text-brand-text prose-strong:text-brand-text" dangerouslySetInnerHTML={{ __html: selectedItem.content }} />
                     <div className="flex justify-end gap-4 mt-6 pt-4 border-t">
                         <button
                            onClick={() => {
                                handleCopy(selectedItem);
                                setSelectedItem(null);
                            }}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-text bg-white border border-slate-300 rounded-md shadow-sm hover:bg-slate-50"
                        >
                             <ClipboardIcon className="h-5 w-5" />
                             Copy Text
                         </button>
                         <button onClick={() => setSelectedItem(null)} className="px-4 py-2 text-sm font-medium text-white bg-brand-primary border border-transparent rounded-md shadow-sm hover:bg-brand-primary/90">
                            Close
                         </button>
                     </div>
                 </Modal>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-brand-text">My Collection</h1>
                    <p className="mt-2 text-lg text-brand-text-muted">
                        Your private collection of saved results. All data is stored only on this device.
                    </p>
                </div>
            </div>

            {items.length > 0 ? (
                <div className="space-y-4">
                    {items.map(item => (
                        <div key={item.id} className="bg-brand-surface p-4 rounded-lg shadow-sm border border-slate-200">
                            <div className="flex justify-between items-start">
                                <div className="flex-grow cursor-pointer" onClick={() => setSelectedItem(item)}>
                                    <h2 className="font-bold text-lg text-brand-primary">{item.title}</h2>
                                    <p className="text-sm text-brand-text-muted mt-1">
                                        Saved: {new Date(item.dateSaved).toLocaleString()}
                                    </p>
                                </div>
                                <div className="flex-shrink-0 flex items-center gap-2 ml-4">
                                     <button
                                        onClick={() => handleCopy(item)}
                                        className="p-2 text-slate-500 hover:text-brand-primary hover:bg-slate-100 rounded-full transition-colors"
                                        aria-label="Copy item text"
                                    >
                                        {copiedId === item.id ? <CheckCircleIcon className="h-5 w-5 text-brand-success" /> : <ClipboardIcon className="h-5 w-5" />}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="p-2 text-slate-500 hover:text-brand-danger hover:bg-red-50 rounded-full transition-colors"
                                        aria-label="Delete item"
                                    >
                                       <TrashIcon className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 px-6 bg-brand-surface rounded-lg shadow-sm border border-slate-200">
                    <BookOpenIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-brand-text">Your collection is empty.</h2>
                    <p className="text-brand-text-muted mt-2">Save results from tests and assessments to find them here.</p>
                </div>
            )}
        </div>
    );
};

export default UserCollectionPage;