import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Hakkimizda() {
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
                  <Link href="/hakkimizda" className="text-orange-500 font-medium">
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
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Hakkımızda</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Biz Kimiz?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                3402-398 Sayılı Lisanslı Harita Kadastro Mühendislik Bürosu olarak, 2021 yılından bu yana
                kadastro ve harita mühendisliği alanında profesyonel hizmetler sunmaktayız.
              </p>
              <p className="text-gray-600">
                Deneyimli ekibimiz ve modern teknolojik altyapımız ile müşterilerimize en kaliteli ve
                güvenilir hizmeti sunmayı hedefliyoruz.
              </p>
              <p className="text-gray-600">
                Lisanslı Harita Kadastro Mühendisleri Büroları (LİHKAB), 5368 sayılı kanun kapsamında
                Tapu ve Kadastro Genel Müdürlüğü'nün yetkilendirmesiyle hizmet vermektedir.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Neden Biz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Deneyim</h3>
                <p className="text-gray-600">
                  Sektördeki deneyimimiz ve uzmanlığımız ile profesyonel hizmet sunuyoruz.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Teknoloji</h3>
                <p className="text-gray-600">
                  En son teknolojik ekipmanlar ve yazılımlar ile çalışıyoruz. Firmamızın kullanımında olan yazılımlar: OpenRoads Designer, MicroStation, iTwin Capture Modeler, Netcad ve GeoCad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-4">Güvenilirlik</h3>
                <p className="text-gray-600">
                  Resmi lisanslı büro olarak güvenilir hizmet garantisi sunuyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Ekibimiz</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                Deneyimli ve uzman kadromuz ile tüm harita ve kadastro işlemlerinizde yanınızdayız.
                Ekibimiz, alanında uzman harita mühendisleri ve teknik personelden oluşmaktadır.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Lisanslı Harita Kadastro Mühendisi</li>
                <li>Harita Teknikerleri</li>
                <li>Ölçüm Ekibi</li>
                <li>İdari Personel</li>
              </ul>
            </div>
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
