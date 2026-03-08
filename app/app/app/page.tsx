'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Search, Upload, Users, Shield, Zap, Sparkles } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setMounted(true);
    sdk.actions.ready();
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = async () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      alert('Search feature coming soon! This is a demo Mini App.');
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen p-4 pb-20">
      <div className="text-center mb-8 pt-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-nuwa-purple" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-nuwa-purple to-nuwa-blue bg-clip-text text-transparent">
            Nuwa Scanner
          </h1>
        </div>
        <p className="text-gray-400 text-sm">
          World's First Real World Social Scanner on Base
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8 max-w-2xl mx-auto">
        <div className="glass-effect rounded-xl p-4 text-center">
          <Search className="w-6 h-6 mx-auto mb-2 text-nuwa-blue" />
          <p className="text-xs text-gray-300">500+ Platforms</p>
        </div>
        <div className="glass-effect rounded-xl p-4 text-center">
          <Zap className="w-6 h-6 mx-auto mb-2 text-nuwa-purple" />
          <p className="text-xs text-gray-300">Instant Results</p>
        </div>
        <div className="glass-effect rounded-xl p-4 text-center">
          <Shield className="w-6 h-6 mx-auto mb-2 text-green-400" />
          <p className="text-xs text-gray-300">Privacy First</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="glass-effect rounded-2xl p-6">
          <label className="block mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Upload className="w-5 h-5 text-nuwa-purple" />
              <span className="font-semibold">Upload Face Photo</span>
            </div>
            <div className="border-2 border-dashed border-nuwa-purple/30 rounded-xl p-8 text-center cursor-pointer hover:border-nuwa-purple/60 transition-colors">
              {imagePreview ? (
                <div className="relative">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="max-h-64 mx-auto rounded-lg"
                  />
                  <button
                    onClick={() => setImagePreview(null)}
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <>
                  <Users className="w-12 h-12 mx-auto mb-3 text-nuwa-purple/50" />
                  <p className="text-sm text-gray-400 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG up to 10MB
                  </p>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </label>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-nuwa-blue" />
              <span className="font-semibold">Search by Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter name, username, or identifier..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-nuwa-blue focus:ring-2 focus:ring-nuwa-blue/20 transition-all"
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={!imagePreview && !searchQuery}
            className="w-full mt-6 py-4 bg-gradient-to-r from-nuwa-purple to-nuwa-blue rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSearching ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Scanning...
              </span>
            ) : (
              'Start Search'
            )}
          </button>
        </div>

        <div className="space-y-3">
          <div className="glass-effect rounded-xl p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              Privacy Protected
            </h3>
            <p className="text-sm text-gray-400">
              We only search public data. Your uploads are encrypted and never stored.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              How It Works
            </h3>
            <p className="text-sm text-gray-400">
              Our AI engine scans 500+ social platforms including Instagram, TikTok, LinkedIn, Twitter, and more to find matching profiles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="glass-effect rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-nuwa-purple">500+</p>
            <p className="text-xs text-gray-400 mt-1">Platforms</p>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-nuwa-blue">1M+</p>
            <p className="text-xs text-gray-400 mt-1">Searches</p>
          </div>
          <div className="glass-effect rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-green-400">95%</p>
            <p className="text-xs text-gray-400 mt-1">Accuracy</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>Powered by Nuwa AI Engine on Base</p>
        <p className="mt-2">Building the Human Layer of the Internet</p>
      </div>
    </main>
  );
                             }
