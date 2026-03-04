import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-xl font-bold">
                🔒
              </div>
              <span className="text-2xl font-bold">TRLSG</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-4">
              Türkiye'nin güvenilir SSL sertifikası ve web güvenlik çözümleri sağlayıcısı. 
              DigiCert, Sectigo ve Comodo yetkili partneri.
            </p>
            <div className="flex gap-4">
              {/* Social Media Icons - Placeholder */}
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xl">in</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <span className="text-xl">𝕏</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Ürünler</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/ssl/dv" className="text-gray-400 hover:text-white transition-colors">
                  DV SSL
                </Link>
              </li>
              <li>
                <Link href="/ssl/ov" className="text-gray-400 hover:text-white transition-colors">
                  OV SSL
                </Link>
              </li>
              <li>
                <Link href="/ssl/ev" className="text-gray-400 hover:text-white transition-colors">
                  EV SSL
                </Link>
              </li>
              <li>
                <Link href="/ssl/wildcard" className="text-gray-400 hover:text-white transition-colors">
                  Wildcard SSL
                </Link>
              </li>
              <li>
                <Link href="/ssl/code-signing" className="text-gray-400 hover:text-white transition-colors">
                  Code Signing
                </Link>
              </li>
              <li>
                <Link href="/guvenlik/imunify360" className="text-gray-400 hover:text-white transition-colors">
                  Imunify360
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kurumsal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/kurumsal/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/kurumsal/referanslar" className="text-gray-400 hover:text-white transition-colors">
                  Referanslar
                </Link>
              </li>
            
              <li>
                <Link href="/kurumsal/sss" className="text-gray-400 hover:text-white transition-colors">
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/kurumsal/kariyer" className="text-gray-400 hover:text-white transition-colors">
                  Kariyer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">İletişim</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">📞</span>
                <div>
                  <div className="font-medium text-white">Telefon</div>
                  <a href="tel:+902162858578" className="hover:text-white transition-colors">
                    0216 285 85 78
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">✉️</span>
                <div>
                  <div className="font-medium text-white">E-posta</div>
                  <a href="mailto:info@trlsg.com" className="hover:text-white transition-colors">
                    info@trlsg.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">📍</span>
                <div>
                  <div className="font-medium text-white">Adres</div>
                  <p className="leading-relaxed">
                    Yapı Kredi Plaza C Blok<br />
                    No:40-41, Levent<br />
                    İstanbul, Türkiye
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 LSG Teknoloji. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/gizlilik" className="text-gray-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kvkk" className="text-gray-400 hover:text-white transition-colors">
                KVKK
              </Link>
              <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-white transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
