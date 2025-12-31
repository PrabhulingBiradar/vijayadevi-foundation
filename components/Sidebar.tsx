import React from 'react';
import { MessageSquare, Eye, Image as ImageIcon, Bot } from 'lucide-react';
import { AppMode } from '../types';

interface SidebarProps {
  currentMode: AppMode;
  onModeChange: (mode: AppMode) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentMode, onModeChange }) => {
  const navItems = [
    { mode: AppMode.CHAT, label: 'Chat', icon: <MessageSquare size={20} /> },
    { mode: AppMode.VISION, label: 'Vision', icon: <Eye size={20} /> },
    { mode: AppMode.GENERATE, label: 'Imagine', icon: <ImageIcon size={20} /> },
  ];

  return (
    <div className="w-20 md:w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-full transition-all duration-300">
      <div className="p-6 flex items-center justify-center md:justify-start gap-3 border-b border-gray-800">
        <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white shrink-0">
          <Bot size={20} />
        </div>
        <h1 className="text-xl font-bold text-white hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Gemini
        </h1>
      </div>

      <nav className="flex-1 py-6 px-2 md:px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.mode}
            onClick={() => onModeChange(item.mode)}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group
              ${currentMode === item.mode 
                ? 'bg-blue-600/10 text-blue-400 shadow-sm border border-blue-600/20' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
              }`}
          >
            <div className={`shrink-0 ${currentMode === item.mode ? 'text-blue-400' : 'group-hover:text-gray-200'}`}>
              {item.icon}
            </div>
            <span className="hidden md:block font-medium">{item.label}</span>
            {currentMode === item.mode && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 hidden md:block" />
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="text-xs text-gray-600 text-center md:text-left">
          <p className="hidden md:block">Powered by Google Gemini</p>
          <p className="md:hidden">Gemini</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
