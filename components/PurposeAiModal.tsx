import React from 'react';
import Modal from '@/components/Modal';

interface PurposeAiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurposeAiModal: React.FC<PurposeAiModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Purpose AI: Your Personal Growth Companion" size="5xl">
      <div className="w-full h-[80vh] bg-slate-100 flex items-center justify-center rounded-md overflow-hidden">
        <iframe
          src="https://purposeai.vercel.app/"
          title="Purpose AI"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms"
        ></iframe>
      </div>
    </Modal>
  );
};

export default PurposeAiModal;
