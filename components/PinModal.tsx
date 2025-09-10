import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';

interface PinModalProps {
    mode: 'set' | 'enter';
    isOpen: boolean;
    onClose: () => void;
    onSuccess: (pin: string) => void;
    storedPin: string | null;
}

const PinModal: React.FC<PinModalProps> = ({ mode, isOpen, onClose, onSuccess, storedPin }) => {
    const [pin, setPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');
    const [error, setError] = useState('');
    const [isSettingConfirm, setIsSettingConfirm] = useState(false);

    useEffect(() => {
        // Reset state when modal opens/closes or mode changes
        setPin('');
        setConfirmPin('');
        setError('');
        setIsSettingConfirm(false);
    }, [isOpen, mode]);

    const handleNumberClick = (num: string) => {
        setError('');
        if (isSettingConfirm) {
            if (confirmPin.length < 4) setConfirmPin(prev => prev + num);
        } else {
            if (pin.length < 4) setPin(prev => prev + num);
        }
    };

    const handleDelete = () => {
        setError('');
        if (isSettingConfirm) {
            setConfirmPin(prev => prev.slice(0, -1));
        } else {
            setPin(prev => prev.slice(0, -1));
        }
    };

    const handleSubmit = () => {
        if (mode === 'set') {
            if (!isSettingConfirm) {
                if (pin.length === 4) {
                    setIsSettingConfirm(true);
                } else {
                    setError('PIN must be 4 digits.');
                }
            } else {
                if (pin === confirmPin) {
                    onSuccess(pin);
                } else {
                    setError('PINs do not match. Please try again.');
                    setPin('');
                    setConfirmPin('');
                    setIsSettingConfirm(false);
                }
            }
        } else { // mode === 'enter'
            if (pin === storedPin) {
                onSuccess(pin);
            } else {
                setError('Incorrect PIN. Please try again.');
                setPin('');
            }
        }
    };
    
    const getTitle = () => {
        if (mode === 'set') {
            return isSettingConfirm ? 'Confirm Your New PIN' : 'Set a 4-Digit PIN';
        }
        return 'Enter Your PIN';
    };

    const currentPin = isSettingConfirm ? confirmPin : pin;
    const numberPad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={getTitle()}>
            <div className="flex flex-col items-center">
                <div className="flex space-x-4 my-4">
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className={`w-10 h-10 rounded-full border-2 ${currentPin.length > i ? 'bg-brand-primary border-brand-primary' : 'bg-transparent border-slate-300'}`}></div>
                    ))}
                </div>
                {error && <p className="text-brand-danger text-sm mb-4 h-5">{error}</p>}
                {!error && <div className="h-5 mb-4"></div>}
                
                <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
                    {numberPad.map((num, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (num === '⌫') handleDelete();
                                else if (num !== '') handleNumberClick(num);
                            }}
                            className={`text-2xl font-semibold rounded-full h-16 w-16 flex items-center justify-center transition-colors ${num === '' ? 'cursor-default' : 'bg-slate-100 hover:bg-slate-200'}`}
                            disabled={num === ''}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={(mode === 'enter' && pin.length < 4) || (mode === 'set' && !isSettingConfirm && pin.length < 4) || (mode === 'set' && isSettingConfirm && confirmPin.length < 4)}
                    className="mt-6 w-full max-w-xs bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-primary/90 transition-opacity disabled:opacity-50"
                >
                    {mode === 'set' && !isSettingConfirm ? 'Next' : 'Confirm'}
                </button>
            </div>
        </Modal>
    );
};

export default PinModal;