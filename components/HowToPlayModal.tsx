import React from 'react';
import Modal from '@/components/Modal';

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Instruction: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
        <h3 className="font-bold text-brand-primary">{title}</h3>
        <p className="text-sm text-brand-text-muted mt-1">{children}</p>
    </div>
);

const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="How to Play Cognitive Clash">
        <div className="space-y-4">
            <p className="text-brand-text-muted">Read the instruction at the top and choose the correct option before the timer runs out. One mistake and the game is over!</p>
            
            <Instruction title='Instruction: "Red"'>
                This is a Stroop test. You must tap the button with the matching <strong className="text-brand-text">WORD</strong>, and ignore the color of the text.
            </Instruction>

            <Instruction title='Instruction: "Red Color"'>
                This is a color match test. You must tap the button that has the matching background <strong className="text-brand-text">COLOR</strong>, and ignore the word written on it.
            </Instruction>

            <Instruction title='Instruction: "Up" or "Down"'>
                Tap the button with the matching arrow icon.
            </Instruction>
            
            <Instruction title='Instruction: "NOT Red" or "NOT Up"'>
                You must tap any button <strong className="text-brand-text">EXCEPT</strong> the one mentioned in the instruction.
            </Instruction>

            <Instruction title='Instruction: "Any"'>
                You win by tapping <strong className="text-brand-text">ANY</strong> of the available choices before time runs out.
            </Instruction>

             <Instruction title='Instruction: "Nothing"'>
                You must <strong className="text-brand-text">DO NOTHING</strong>. Do not tap any buttons and let the timer run out to win.
            </Instruction>

            <Instruction title='Instruction: "Cow"'>
                This is a word association puzzle. Choose the word from the options that is most closely related to the prompt word. (e.g., Cow &rarr; Walk)
            </Instruction>

            <div className="flex justify-end pt-4">
                 <button onClick={onClose} className="bg-brand-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-primary/90 transition-opacity">
                    Got It!
                </button>
            </div>
        </div>
    </Modal>
  );
};

export default HowToPlayModal;