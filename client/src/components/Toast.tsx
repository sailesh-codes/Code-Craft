import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export default function Toast({ message, duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 10);

    // Auto-close after duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade-out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[300px] border-2 border-cyan-300">
        <FaInfoCircle className="text-2xl flex-shrink-0" />
        <span className="font-semibold text-lg">{message}</span>
      </div>
    </div>
  );
}

// Hook to manage toast state
export function useToast() {
  const [toast, setToast] = useState<{ message: string; id: number } | null>(null);

  const showToast = (message: string) => {
    setToast({ message, id: Date.now() });
  };

  const hideToast = () => {
    setToast(null);
  };

  const ToastComponent = toast ? (
    <Toast key={toast.id} message={toast.message} onClose={hideToast} />
  ) : null;

  return { showToast, ToastComponent };
}
