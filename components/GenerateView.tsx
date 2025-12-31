import React, { useState } from 'react';
import { Sparkles, Loader2, Download, RefreshCw, AlertCircle } from 'lucide-react';
import { generateImage } from '../services/geminiService';
import { AspectRatio } from '../types';

const GenerateView: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('1:1');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageBase64 = await generateImage(prompt, aspectRatio);
      if (imageBase64) {
        setGeneratedImage(imageBase64);
      } else {
        setError("Failed to generate image. The model response was empty.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while generating the image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `gemini-generated-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-950 text-gray-100 overflow-y-auto">
      <header className="px-6 py-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <h2 className="text-xl font-semibold">Image Generation</h2>
        <p className="text-sm text-gray-400">Powered by gemini-2.5-flash-image</p>
      </header>

      <div className="flex-1 p-6 max-w-5xl mx-auto w-full flex flex-col lg:flex-row gap-8">
        
        {/* Controls Panel */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-gray-400 mb-2">Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A futuristic city with flying cars at sunset, cyberpunk style..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 resize-none h-40 text-gray-200"
            />
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-400 mb-3">Aspect Ratio</label>
              <div className="grid grid-cols-3 gap-2">
                {['1:1', '3:4', '4:3', '9:16', '16:9'].map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio as AspectRatio)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      aspectRatio === ratio
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-750'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isLoading}
              className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-900/30"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={24} />
                  Generate
                </>
              )}
            </button>
          </div>

           {/* Tips */}
           <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-sm text-gray-400">
              <p className="font-semibold text-gray-300 mb-2">Pro Tips:</p>
              <ul className="list-disc pl-5 space-y-1">
                  <li>Be descriptive with colors, lighting, and style.</li>
                  <li>Mention the medium (e.g., "oil painting", "photo").</li>
                  <li>The aspect ratio affects composition.</li>
              </ul>
           </div>
        </div>

        {/* Preview Panel */}
        <div className="w-full lg:w-2/3 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center relative min-h-[500px] overflow-hidden">
          {generatedImage ? (
            <div className="relative w-full h-full flex items-center justify-center bg-black/20">
              <img 
                src={generatedImage} 
                alt="Generated" 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                 <button 
                  onClick={downloadImage}
                  className="p-3 bg-black/60 hover:bg-black/80 backdrop-blur text-white rounded-xl transition-all border border-white/10"
                  title="Download"
                 >
                    <Download size={20} />
                 </button>
                 <button 
                  onClick={handleGenerate}
                  className="p-3 bg-black/60 hover:bg-black/80 backdrop-blur text-white rounded-xl transition-all border border-white/10"
                  title="Regenerate"
                 >
                    <RefreshCw size={20} />
                 </button>
              </div>
            </div>
          ) : (
            <div className="text-center p-8 max-w-md">
              {error ? (
                 <div className="flex flex-col items-center text-red-400">
                    <AlertCircle size={48} className="mb-4" />
                    <p>{error}</p>
                 </div>
              ) : isLoading ? (
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-6"></div>
                    <p className="text-gray-400 animate-pulse">Dreaming up your image...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-gray-600">
                        <Sparkles size={32} />
                    </div>
                    <h3 className="text-xl font-medium text-gray-300 mb-2">Ready to Imagine</h3>
                    <p className="text-gray-500">Enter a prompt and hit generate to see the magic happen.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateView;
