import { Award, Users, Target, Shield, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hizmetler() {
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
                  <Link href="/hizmetler" className="text-orange-500 font-medium">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Hizmetlerimiz</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Aplikasyon */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Aplikasyon</h2>
            <p className="text-gray-600 mb-4">
              Taşınmazların zeminde işaretlenmesi ve ölçüm işlemlerinin yapılması hizmetleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Parsel köşe noktalarının zeminde işaretlenmesi</li>
              <li>Yapı aplikasyonu</li>
              <li>Bağımsız bölüm planı</li>
            </ul>
          </div>

          {/* Cins Değişikliği */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cins Değişikliği</h2>
            <p className="text-gray-600 mb-4">
              Taşınmazların cins değişikliği işlemlerinin yapılması ve belgelendirilmesi.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Arsa - Arazi cins değişikliği</li>
              <li>Yapılı - Yapısız cins değişikliği</li>
              <li>Kat mülkiyeti tesisi</li>
            </ul>
          </div>

          {/* Birleştirme (Tevhit) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Birleştirme (Tevhit)</h2>
            <p className="text-gray-600 mb-4">
              Birden fazla parselin tek parsel haline getirilmesi işlemleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Parsel birleştirme</li>
              <li>İmar düzenlemesi</li>
              <li>Teknik rapor hazırlama</li>
            </ul>
          </div>

          {/* Ayırma (İfraz) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Ayırma (İfraz)</h2>
            <p className="text-gray-600 mb-4">
              Bir parselin birden fazla parsele bölünmesi işlemleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Parsel ayırma</li>
              <li>İmar planına göre ayırma</li>
              <li>Hisseli satış</li>
            </ul>
          </div>

          {/* Röperli Kroki */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Röperli Kroki</h2>
            <p className="text-gray-600 mb-4">
              Detaylı ölçüm ve kroki hazırlama hizmetleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Bina ve tesis ölçümü</li>
              <li>Detay alımı</li>
              <li>Kroki hazırlama</li>
            </ul>
          </div>

          {/* Diğer Hizmetler */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Diğer Hizmetler</h2>
            <p className="text-gray-600 mb-4">
              İhtiyaçlarınıza özel çözümler ve danışmanlık hizmetleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Teknik danışmanlık</li>
              <li>Proje kontrolü</li>
              <li>Özel ölçümler</li>
            </ul>
          </div>
        </div>
      </div>

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