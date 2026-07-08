import React, { useState, useCallback, useRef } from 'react';
import Cropper from 'react-easy-crop';
import { X, ZoomIn, ZoomOut, Check, Loader } from '../config/icons';
import { getCroppedBlob } from '../utils/cropImage';
import { useFocusTrap } from '../hooks/useFocusTrap';

export default function CropPortraitModal({ file, onConfirm, onCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const modalRef = useRef(null);
  useFocusTrap(modalRef, true);

  const imageSrc = URL.createObjectURL(file);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const zoomMin = 1;
  const zoomMax = 3;
  const zoomStep = 0.05;

  const adjustZoom = (delta) => {
    setZoom((prev) => Math.min(zoomMax, Math.max(zoomMin, +(prev + delta).toFixed(2))));
  };

  const handleConfirm = async () => {
    if (!croppedAreaPixels) return;
    setIsProcessing(true);
    try {
      const blob = await getCroppedBlob(imageSrc, croppedAreaPixels, file.type || 'image/jpeg');
      const croppedFile = new File([blob], file.name, { type: file.type || 'image/jpeg' });
      URL.revokeObjectURL(imageSrc);
      onConfirm(croppedFile);
    } catch (err) {
      console.error('Crop error:', err);
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    URL.revokeObjectURL(imageSrc);
    onCancel();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4">
      <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="crop-modal-title" className="bg-[#fdfbf7] w-full max-w-lg rounded-2xl shadow-2xl border-4 border-amber-900/20 flex flex-col overflow-hidden">
        <div className="bg-stone-100 p-4 border-b border-stone-200 flex justify-between items-center">
          <h3 id="crop-modal-title" className="font-bold text-stone-800 flex items-center gap-2">
            <span className="text-lg">🖼️</span> Recadrer le portrait
          </h3>
          <button onClick={handleCancel} className="text-stone-400 hover:text-red-500" aria-label="Annuler le recadrage"><X size={20} /></button>
        </div>

        <div className="relative w-full h-80 bg-stone-900">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={3 / 4}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => adjustZoom(-zoomStep)} className="p-2 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors" aria-label="Dézoomer"><ZoomOut size={20} /></button>
            <input
              type="range"
              min={zoomMin}
              max={zoomMax}
              step={zoomStep}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="flex-1 accent-amber-600"
            />
            <button type="button" onClick={() => adjustZoom(zoomStep)} className="p-2 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors" aria-label="Zoomer"><ZoomIn size={20} /></button>
          </div>

          <div className="flex gap-3">
            <button onClick={handleCancel} className="flex-1 py-2.5 border border-stone-300 text-stone-600 font-bold rounded-xl hover:bg-stone-50 transition-colors">
              Annuler
            </button>
            <button
              onClick={handleConfirm}
              disabled={isProcessing || !croppedAreaPixels}
              className="flex-1 py-2.5 bg-amber-700 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isProcessing ? <Loader size={18} className="animate-spin" /> : <Check size={18} />}
              {isProcessing ? 'Recadrage...' : 'Appliquer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
