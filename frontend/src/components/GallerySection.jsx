import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Maximize2, X, Sparkles } from 'lucide-react';
import { GALLERY_DATA } from '../data/hospitalData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Surgical Suites', 'Technology', 'Critical Care', 'In-Patient Care', 'Emergency', 'Rehabilitation'];

  const filteredGallery = activeCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-[#f6faf9] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#008277] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Sparkles size={14} />
            <span>Infrastructure & Clinical Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002e29] mb-3 tracking-tight">
            Hospital Gallery & Facilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore our world-class medical infrastructure, laminar airflow OTs, Da Vinci robotic surgery rooms, and executive patient recovery suites in Kankarbagh, Patna.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#008277] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-300 hover:text-[#008277]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 bg-white cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-16/10 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#005a52] text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-xs">
                    {item.category}
                  </span>

                  {/* Expand icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </div>

                  {/* Title Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="text-sm sm:text-base font-bold leading-snug drop-shadow-sm">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-cover"
              />
              <div className="p-5 bg-white flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#008277] uppercase tracking-wider block mb-1">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#002e29]">
                    {selectedImage.title}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-medium">KLC Hospitals Patna</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
