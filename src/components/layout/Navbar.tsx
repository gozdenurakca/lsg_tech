'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type DropdownKey =
  | 'ssl'
  | 'web-guvenligi'
  | 'siber-guvenlik'
  | 'alan-adlari'
  | 'hosting'
  | 'kaynaklar'
  | 'destek'
  | null

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartCount] = useState(2)

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // ✅ menuRefs key’leri DropdownKey ile aynı olmalı
  const menuRefs: Record<Exclude<DropdownKey, null>, React.RefObject<HTMLDivElement>> = {
    'ssl': useRef<HTMLDivElement>(null),
    'web-guvenligi': useRef<HTMLDivElement>(null),
    'siber-guvenlik': useRef<HTMLDivElement>(null),
    'alan-adlari': useRef<HTMLDivElement>(null),
    'hosting': useRef<HTMLDivElement>(null),
    'kaynaklar': useRef<HTMLDivElement>(null),
    'destek': useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setIsSearchOpen(false)
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const clickedInside = Object.values(menuRefs).some((ref) => ref.current?.contains(target))
      if (!clickedInside) setActiveDropdown(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuRefs])

  const handleMouseEnter = (key: DropdownKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(key)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const closeAll = () => {
    setActiveDropdown(null)
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const MEGA_BASE =
    'absolute top-full mt-2 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden animate-fade-in-down z-50'
  const MEGA_CENTER = 'left-1/2 -translate-x-1/2'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white border-b border-gray-200'
        }`}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <span className="group-hover:rotate-12 transition-transform duration-300">L</span>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-primary to-indigo-700 bg-clip-text text-transparent">
                    LSG
                  </div>
                  <div className="text-xs text-gray-500 -mt-1">Teknoloji</div>
                </div>
              </div>
            </Link>

            {/* ✅ Desktop Nav (menülerin TAMAMI bunun içinde olacak) */}
            <div className="hidden lg:flex items-center gap-1">
              {/* SSL (placeholder) */}
              <div
                ref={menuRefs['ssl']}
                className="relative"
                onMouseEnter={() => handleMouseEnter('ssl')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                    activeDropdown === 'ssl'
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  SSL
                </button>
              </div>

              {/* Web Güvenliği (placeholder) */}
              <div
                ref={menuRefs['web-guvenligi']}
                className="relative"
                onMouseEnter={() => handleMouseEnter('web-guvenligi')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                    activeDropdown === 'web-guvenligi'
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  Web Güvenliği
                </button>
              </div>

              {/* Siber Güvenlik (placeholder) */}
              <div
                ref={menuRefs['siber-guvenlik']}
                className="relative"
                onMouseEnter={() => handleMouseEnter('siber-guvenlik')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                    activeDropdown === 'siber-guvenlik'
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  Siber Güvenlik
                </button>
              </div>

              {/* ALAN ADI */}
              <div
                ref={menuRefs['alan-adlari']}
                className="relative"
                onMouseEnter={() => handleMouseEnter('alan-adlari')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                    activeDropdown === 'alan-adlari'
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  Alan Adı
                  <svg
                    className={`inline-block w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeDropdown === 'alan-adlari' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'alan-adlari' && (
                  <div className={`${MEGA_BASE} ${MEGA_CENTER} w-[700px] max-w-[calc(100vw-32px)]`}>
                    <div className="grid grid-cols-2 gap-0">
                      <div className="p-6 border-r border-gray-100">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-green-500 rounded-full"></span>
                          Alan Adı İşlemleri
                        </h3>
                        <div className="space-y-1">
                          {[
                            { name: 'Alan Adı Sorgula', desc: 'Uygun domain bul', href: '/domain/sorgula' },
                            { name: 'Alan Adı Tescil', desc: 'Yeni domain kayıt', href: '/domain/tescil' },
                            { name: 'Alan Adı Transfer', desc: 'Mevcut domainini taşı', href: '/domain/transfer' },
                            { name: 'Alan Adı Yenileme', desc: 'Süre uzatma', href: '/domain/yenileme' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onMouseDown={closeAll}
                              className="block px-3 py-2 rounded-lg hover:bg-white hover:shadow-md transition-all group"
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500">{item.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-teal-500 rounded-full"></span>
                          Popüler Uzantılar
                        </h3>
                        <div className="space-y-1">
                          {[
                            { name: '.com.tr', desc: "Türkiye'nin tercihi", href: '/domain/com-tr' },
                            { name: '.com', desc: 'Global standart', href: '/domain/com' },
                            { name: '.net', desc: 'Teknoloji alanları', href: '/domain/net' },
                            { name: '.org', desc: 'Sivil kuruluşlar', href: '/domain/org' },
                            { name: '.io', desc: 'Tech startuplar', href: '/domain/io' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onMouseDown={closeAll}
                              className="block px-3 py-2 rounded-lg hover:bg-white hover:shadow-md transition-all group"
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500">{item.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-green-50/30 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href="/domain"
                        onMouseDown={closeAll}
                        className="text-primary font-semibold hover:underline text-sm flex items-center gap-2 group"
                      >
                        Tüm Alan Adlarını Gör <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                      <Link
                        href="/domain/sorgula"
                        onMouseDown={closeAll}
                        className="text-sm font-semibold bg-gradient-to-r from-green-600 to-teal-600 text-white px-5 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                      >
                        Domain Sorgula
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* HOSTİNG */}
              <div
                ref={menuRefs['hosting']}
                className="relative"
                onMouseEnter={() => handleMouseEnter('hosting')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                    activeDropdown === 'hosting'
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  Hosting
                  <svg
                    className={`inline-block w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeDropdown === 'hosting' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'hosting' && (
                  <div className={`${MEGA_BASE} ${MEGA_CENTER} w-[700px] max-w-[calc(100vw-32px)]`}>
                    <div className="grid grid-cols-2 gap-0">
                      <div className="p-6 border-r border-gray-100">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">LSG Hakkında</h3>
                        <div className="space-y-1">
                          {[
                            { name: 'Hakkımızda', href: '/hosting/hakkimizda' },
                            { name: 'Misyon & Vizyon', href: '/hosting/misyon-vizyon' },
                            { name: 'Yönetim Ekibi', href: '/hosting/yonetim-ekibi' },
                            { name: 'Referanslar', href: '/hosting/referanslar' },
                            { name: 'Kariyer', href: '/hosting/kariyer' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onMouseDown={closeAll}
                              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg font-medium transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">İş Ortaklığı</h3>
                        <div className="space-y-1">
                          {[
                            { name: 'Bayilik Programı', href: '/hosting/bayilik' },
                            { name: 'Hosting Partner', href: '/hosting/hosting-partner' },
                            { name: 'Teknoloji Partner', href: '/hosting/teknoloji-partner' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onMouseDown={closeAll}
                              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg font-medium transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* KAYNAKLAR */}
              <div
                ref={menuRefs['kaynaklar']}
                className="relative"
                onMouseEnter={() => handleMouseEnter('kaynaklar')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                    activeDropdown === 'kaynaklar'
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  Kaynaklar
                  <svg
                    className={`inline-block w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeDropdown === 'kaynaklar' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'kaynaklar' && (
                  <div className={`${MEGA_BASE} ${MEGA_CENTER} w-[800px] max-w-[calc(100vw-32px)]`}>
                    <div className="grid grid-cols-3 gap-0">
                      <div className="p-6 border-r border-gray-100">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Kaynak Merkezi</h3>
                        <div className="space-y-1">
                          {[
                            { name: 'Blog', href: '/blog' },
                            { name: 'Rehberler', href: '/kaynaklar/rehberler' },
                            { name: 'Whitepaperlar', href: '/kaynaklar/whitepaper' },
                            { name: 'E-Kitaplar', href: '/kaynaklar/e-kitaplar' },
                            { name: 'Videolar', href: '/kaynaklar/video' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onMouseDown={closeAll}
                              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg font-medium transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 border-r border-gray-100">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Öğrenin</h3>
                        <div className="space-y-1">
                          {[
                            { name: 'SSL Nedir?', href: '/kaynaklar/ssl-nedir' },
                            { name: 'DV / OV / EV Farkı', href: '/kaynaklar/dv-ov-ev-farklari' },
                            { name: 'Webinarlar', href: '/kaynaklar/webinar' },
                            { name: 'SSS', href: '/kaynaklar/sss' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onMouseDown={closeAll}
                              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg font-medium transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Araçlar</h3>
                        <div className="space-y-1">
                          {[
                            { name: 'SSL Checker', href: '/tools/ssl-checker' },
                            { name: 'CSR Oluşturucu', href: '/tools/csr' },
                            { name: 'Ürün Karşılaştır', href: '/karsilastir' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onMouseDown={closeAll}
                              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg font-medium transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <Link
                        href="/kaynaklar"
                        onMouseDown={closeAll}
                        className="text-primary font-semibold hover:underline text-sm flex items-center gap-2 group"
                      >
                        Tüm Kaynaklar <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* DESTEK */}
              <div
                ref={menuRefs['destek']}
                className="relative"
                onMouseEnter={() => handleMouseEnter('destek')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                    activeDropdown === 'destek'
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  Destek
                  <svg
                    className={`inline-block w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeDropdown === 'destek' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'destek' && (
                  <div className={`${MEGA_BASE} ${MEGA_CENTER} w-[900px] max-w-[calc(100vw-32px)]`}>
                    <div className="grid grid-cols-3 gap-0">
                      <div className="p-6 border-r border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Destek Merkezi</h3>
                        <div className="space-y-2">
                          {[
                            { name: 'Bilgi Bankası', href: '/bilgi-bankasi' },
                            { name: 'Dokümantasyon', href: '/dokumantasyon' },
                            { name: 'API Dokümantasyon', href: '/api-dokumantasyon' },
                            { name: 'Destek Talebi Aç', href: '/destek/talep' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onMouseDown={closeAll}
                              className="block text-gray-700 hover:text-primary font-medium transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                        <h3 className="text-lg font-bold mb-6">İletişim</h3>
                        <div className="space-y-4 text-sm">
                          <div>
                            <div className="font-semibold opacity-90">Telefon</div>
                            <div className="opacity-90">+90 (850) 000 00 00</div>
                            <div className="text-xs opacity-70 mt-1">Hafta içi 09:00–18:00</div>
                          </div>
                          <div>
                            <div className="font-semibold opacity-90">E-posta</div>
                            <div className="opacity-90">support@lsgtech.com</div>
                          </div>
                        </div>
                        <Link
                          href="/iletisim"
                          onMouseDown={closeAll}
                          className="mt-6 block text-center bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
                        >
                          Bizimle İletişime Geçin
                        </Link>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Hızlı Linkler</h3>
                        <div className="space-y-2">
                          {[
                            { name: 'SSL Kurulum Rehberi', href: '/tools/ssl-install' },
                            { name: 'Sertifika Doğrulama', href: '/sertifika-dogrulama' },
                            { name: 'Sistem Durumu', href: '/status' },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onMouseDown={closeAll}
                              className="block text-gray-700 hover:text-primary font-medium transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/iletisim"
                className="bg-gradient-to-r from-primary to-indigo-700 hover:from-indigo-700 hover:to-primary text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                İletişim
              </Link>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <Link
                href="/sepet"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center relative"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                href="/giris"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
                setActiveDropdown(null)
              }}
              className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div
                className="bg-white h-full w-80 max-w-[90%] p-6 shadow-2xl animate-slide-in-right overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-4">
                  {[
                    { name: 'SSL', href: '/ssl' },
                    { name: 'Web Güvenliği', href: '/web-guvenligi' },
                    { name: 'Siber Güvenlik', href: '/siber-guvenlik' },
                    { name: 'Alan Adları', href: '/domain' },
                    { name: 'Hosting', href: '/hosting' },
                    { name: 'Kaynaklar', href: '/kaynaklar' },
                    { name: 'Destek', href: '/destek' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-primary transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/iletisim"
                      className="block text-center bg-gradient-to-r from-primary to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      İletişim
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60] flex items-start justify-center pt-32 animate-fade-in"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 animate-slide-in-down"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="SSL sertifikası, güvenlik, domain, hosting..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                  autoFocus
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Popüler:{' '}
                <span className="text-primary cursor-pointer hover:underline">DV SSL</span>,{' '}
                <span className="text-primary cursor-pointer hover:underline">Wildcard</span>,{' '}
                <span className="text-primary cursor-pointer hover:underline">VPS Sunucu</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slide-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-down { animation: fade-in-down 0.3s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }
        .animate-slide-in-down { animation: slide-in-down 0.3s ease-out; }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
      `}</style>
    </>
  )
}