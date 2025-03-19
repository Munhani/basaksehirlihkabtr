import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Iletisim() {
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
                  <Link href="/iletisim" className="text-orange-500 font-medium">
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
        <h1 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-12">İletişim</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-orange-800 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm md:text-base">
                    Karlıbayır Mahallesi Selçuklu Caddesi No:5 D:11 Arnavutköy/İstanbul
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-orange-800 flex-shrink-0" />
                  <a href="tel:+902125979600" className="text-gray-600 hover:text-orange-800 text-sm md:text-base">
                    +90 212 597 9600
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-orange-800 flex-shrink-0" />
                  <a
                    href="mailto:bilgi@basaksehirlihkab.tr"
                    className="text-gray-600 hover:text-orange-800 text-sm md:text-base break-all"
                  >
                    bilgi@basaksehirlihkab.tr
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4">Çalışma Saatleri</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Pazartesi - Cuma:</span>
                  <span className="text-gray-600 text-sm md:text-base">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Cumartesi:</span>
                  <span className="text-gray-600 text-sm md:text-base">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Pazar:</span>
                  <span className="text-gray-600 text-sm md:text-base">Kapalı</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.471747225656!2d28.71661937587269!3d41.18321127131373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab2b6312b7e4b%3A0x9f0c7b0e7c75a7d2!2zS2FybMSxYmF5xLFyLCBTZWzDp3VrbHUgQ2QuIE5vOjUsIDM0Mjc1IEFybmF2dXRrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1710604844015!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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