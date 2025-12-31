import React, { useState, useRef } from 'react';
import { Upload, X, Loader2, Send, Image as ImageIcon, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { analyzeImage } from '../services/geminiService';

const VisionView: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResult(null); // Clear previous result
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage || isLoading) return;

    setIsLoading(true);
    setResult(''); // Reset result but keep container visible if needed

    try {
      const analysisText = await analyzeImage(selectedImage, prompt);
      setResult(analysisText || "No response generated.");
    } catch (error) {
      console.error("Analysis error:", error);
      setResult("Error analyzing image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setResult(null);
    setPrompt('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="flex flex-col h-full bg-gray-950 text-gray-100 overflow-y-auto">
      <header className="px-6 py-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <h2 className="text-xl font-semibold">Vision Analysis</h2>
        <p className="text-sm text-gray-400">Powered by gemini-3-flash-preview</p>
      </header>

      <div className="flex-1 p-6 max-w-4xl mx-auto w-full flex flex-col gap-6">
        
        {/* Upload Area */}
        {!selectedImage ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 min-h-[400px] border-2 border-dashed border-gray-700 hover:border-blue-500/50 hover:bg-gray-900/50 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all group"
          >
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Upload className="text-gray-400 group-hover:text-blue-400" size={32} />
            </div>
            <h3 className="text-lg font-medium text-gray-300">Upload an image to analyze</h3>
            <p className="text-sm text-gray-500 mt-2">JPG, PNG, WebP supported</p>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*"
              className="hidden" 
            />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
             {/* Image Preview */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-xl max-h-[60vh] flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="max-w-full max-h-[60vh] object-contain"
              />
              <button 
                onClick={clearImage}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500/80 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Analysis Controls */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 flex gap-4 items-center">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Ask something about this image (optional)..."
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                    />
                </div>
                <button
                    onClick={handleAnalyze}
                    disabled={isLoading}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg font-medium flex items-center gap-2 transition-colors min-w-[120px] justify-center"
                >
                    {isLoading ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>Analyzing...</span>
                        </>
                    ) : (
                        <>
                            <ImageIcon size={18} />
                            <span>Analyze</span>
                        </>
                    )}
                </button>
            </div>

            {/* Results */}
            {result && (
                <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 animate-fade-in">
                    <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                        <Bot size={20} />
                        Gemini Analysis
                    </h3>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-200">
                        <ReactMarkdown>{result}</ReactMarkdown>
                    </div>
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VisionView;