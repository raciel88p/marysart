import React, { useState } from 'react';
import { coursesData } from './CourseDetailPage';
import { Sparkles, ArrowRight, BookOpen, Clock, MapPin } from 'lucide-react';

export const bestSellers = [
  coursesData['pintura-basico'],
  coursesData['velas-basico'],
  coursesData['patinas']
].filter(Boolean);

export default function NotFoundPage({ onNavigateHome, onNavigateCatalog, onSelectCourseDetail }) {
  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 404 Hero Banner */}
      <div className="text-center bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#f0e6e0] mb-16">
        <span className="inline-block px-4 py-1.5 bg-[#fceee9] text-[#8c483b] text-sm font-semibold rounded-full mb-4">
          Error 404 • Página No Encontrada
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#3d2e2a] font-bold mb-4">
          ¡Ups! Esta pieza o página no existe.
        </h1>
        <p className="text-lg text-[#6e5d59] max-w-2xl mx-auto mb-8">
          Parece que la dirección que buscas no está disponible. Explora nuestros cursos más vendidos o regresa a la página principal.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onNavigateHome}
            className="px-6 py-3 bg-[#8c483b] hover:bg-[#733a2f] text-white font-medium rounded-xl shadow-md transition-all"
          >
            Ir al Inicio
          </button>
          <button
            onClick={onNavigateCatalog}
            className="px-6 py-3 bg-[#f5ede8] text-[#8c483b] hover:bg-[#eedfd7] font-medium rounded-xl transition-all"
          >
            Ver Catálogo Completo
          </button>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="mt-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-[#8c483b] font-medium text-sm mb-2">
            <Sparkles className="w-4 h-4" />
            <span>LO MÁS POPULAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3d2e2a] font-bold">
            Cursos Más Vendidos
          </h2>
          <p className="text-[#6e5d59] mt-2">
            Descubre los talleres preferidos por nuestros alumnos en Costa Rica para iniciar en arte y velas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#f0e6e0] flex flex-col group cursor-pointer"
              onClick={() => onSelectCourseDetail(course.id)}
            >
              <div className="relative h-52 overflow-hidden bg-[#f7f2ef]">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#8c483b] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  ¡Más Vendido!
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-[#3d2e2a] mb-2 group-hover:text-[#8c483b] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#6e5d59] text-sm mb-4 line-clamp-2">
                  {course.subtitle}
                </p>

                <div className="space-y-2 text-xs text-[#6e5d59] mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#8c483b]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#8c483b]" />
                    <span>{course.location}</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-[#f7f2ef] flex items-center justify-between">
                  <span className="font-bold text-lg text-[#8c483b]">
                    {course.price}
                  </span>
                  <span className="text-xs font-semibold text-[#8c483b] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Ver Taller <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
