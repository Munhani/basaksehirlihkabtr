import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/lihkab_logo.jpg"
                alt="LIHKAB Logo"
                width={60}
                height={60}
                className="rounded-full"
                priority
              />
              <div>
                <h1 className="text-xl font-bold text-orange-950">3402-398 Sayılı LİHKAB</h1>
                <p className="text-sm text-slate-600">Tayfur SİVRİ</p>
              </div>
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/" className="text-slate-600 hover:text-orange-500 transition-colors">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler" className="text-slate-600 hover:text-orange-500 transition-colors">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className="text-slate-600 hover:text-orange-500 transition-colors">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-slate-600 hover:text-orange-500 transition-colors">
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px]" />
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                  Profesyonel Kadastro ve Harita Hizmetleri
                </h2>
                <p className="text-lg text-slate-200 mb-8 animate-slide-up">
                  Lisanslı Harita Kadastro Mühendislik Büromuz ile tüm kadastro ve harita işlemlerinizde yanınızdayız.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/iletisim" className="btn-primary">
                    Bizimle İletişime Geçin
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/hizmetler" className="btn-secondary text-white font-bold hover:text-orange-500 transition-colors">
                    Hizmetlerimizi İnceleyin
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
                <Image
                  src="/istanbul-uydu.jpg"
                  alt="İstanbul Uydu Görüntüsü"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-orange-950 mb-4">Sunduğumuz Hizmetler</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Profesyonel ekibimiz ile size en iyi hizmeti sunmak için buradayız
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card group">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">Aplikasyon</h4>
                <p className="text-slate-600">Parsel sınırlarının arazide gösterilmesi ve ölçüm işlemleri</p>
              </div>
              <div className="card group">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">Cins Değişikliği</h4>
                <p className="text-slate-600">Tapu sicilinde kayıtlı taşınmazların cins ve nitelik değişikliği işlemleri</p>
              </div>
              <div className="card group">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">Parsellerin Birleştirilmesi</h4>
                <p className="text-slate-600">Birden fazla parselin tek parsel haline getirilmesi işlemleri</p>
              </div>
            </div>
          </div>
        </section>

        {/* İletişim Bilgileri */}
        <section className="section bg-orange-50">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="card">
                <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                <h4 className="font-semibold mb-2">Adres</h4>
                <a 
                  href="https://maps.google.com/?q=Karlıbayır+Mahallesi+Selçuklu+Caddesi+No:5+D:11+Arnavutköy+İstanbul" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-orange-500 transition-colors"
                >
                  Karlıbayır Mahallesi Selçuklu Caddesi No:5 D:11 Arnavutköy/İstanbul
                </a>
              </div>
              <div className="card">
                <Phone className="h-8 w-8 text-orange-500 mb-4" />
                <h4 className="font-semibold mb-2">Telefon</h4>
                <a 
                  href="tel:+902125979600"
                  className="text-slate-600 hover:text-orange-500"
                >
                  +90 212 597 9600
                </a>
              </div>
              <div className="card">
                <Mail className="h-8 w-8 text-orange-500 mb-4" />
                <h4 className="font-semibold mb-2">E-posta</h4>
                <a 
                  href="mailto:bilgi@basaksehirlihkab.tr" 
                  className="text-slate-600 hover:text-orange-500 transition-colors"
                >
                  bilgi@basaksehirlihkab.tr
                </a>
              </div>
              <div className="card">
                <Clock className="h-8 w-8 text-orange-500 mb-4" />
                <h4 className="font-semibold mb-2">Çalışma Saatleri</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>Pazartesi - Cuma: 09:00 - 18:00</li>
                  <li>Cumartesi: 09:00 - 13:00</li>
                  <li>Pazar: Kapalı</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-950 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-4">Hakkımızda</h4>
              <p className="text-slate-300">
                3402-398 Sayılı Lisanslı Harita Kadastro Mühendislik Bürosu olarak profesyonel hizmet sunmaktayız.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/hizmetler" className="text-slate-300 hover:text-white transition-colors">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className="text-slate-300 hover:text-white transition-colors">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-slate-300 hover:text-white transition-colors">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-slate-300 mt-0.5" />
                  <a 
                    href="https://maps.google.com/?q=Karlıbayır+Mahallesi+Selçuklu+Caddesi+No:5+D:11+Arnavutköy+İstanbul" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Karlıbayır Mahallesi Selçuklu Caddesi No:5 D:11 Arnavutköy/İstanbul
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-slate-300" />
                  <a 
                    href="tel:+902125979600"
                    className="text-slate-300 hover:text-orange-500"
                  >
                    +90 212 597 9600
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-slate-300" />
                  <span className="text-slate-300">bilgi@basaksehirlihkab.tr</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-800 mt-8 pt-8 text-center">
            <p className="text-slate-300">&copy; 2025 3402-398 Sayılı LİHKAB Bürosu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
