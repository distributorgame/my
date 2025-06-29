
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Star, TrendingUp, Package, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data untuk produk featured
const featuredProducts = [
  {
    id: 1,
    name: "Smartphone Gaming Pro",
    price: 5999000,
    originalPrice: 6999000,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 1250,
    discount: 14,
    sold: 500,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Sepatu Sneakers Premium",
    price: 899000,
    originalPrice: 1299000,
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 890,
    discount: 31,
    sold: 320,
    category: "Fashion"
  },
  {
    id: 3,
    name: "Tas Ransel Laptop",
    price: 299000,
    originalPrice: 399000,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 650,
    discount: 25,
    sold: 180,
    category: "Accessories"
  },
  {
    id: 4,
    name: "Headphone Wireless",
    price: 799000,
    originalPrice: 999000,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 2100,
    discount: 20,
    sold: 750,
    category: "Electronics"
  }
];

const categories = [
  { name: "Electronics", icon: "📱", color: "bg-blue-100 text-blue-600" },
  { name: "Fashion", icon: "👕", color: "bg-pink-100 text-pink-600" },
  { name: "Home & Garden", icon: "🏠", color: "bg-green-100 text-green-600" },
  { name: "Sports", icon: "⚽", color: "bg-orange-100 text-orange-600" },
  { name: "Beauty", icon: "💄", color: "bg-purple-100 text-purple-600" },
  { name: "Books", icon: "📚", color: "bg-indigo-100 text-indigo-600" }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    // Animate on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 hover-scale">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MarketPlace
              </span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari produk, merek, atau toko..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-6 h-6 text-gray-600" />
              </Link>
              <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {cartItems}
                  </Badge>
                )}
              </Link>
              <Link to="/profile">
                <Button variant="outline" className="flex items-center space-x-2 hover-scale">
                  <User className="w-4 h-4" />
                  <span>Masuk</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Temukan Produk Terbaik
            <br />
            <span className="text-yellow-300">Dengan Harga Terbaik</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-fade-in">
            Jutaan produk berkualitas dari ribuan toko terpercaya
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <TrendingUp className="w-5 h-5 mr-2" />
              Jelajahi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Shield className="w-5 h-5 mr-2" />
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
      </section>

      {/* Categories */}
      <section className="py-16 fade-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Kategori Populer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover-scale cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Produk Unggulan</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 font-semibold story-link">
              Lihat Semua →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="hover-scale cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      -{product.discount}%
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-gray-800">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-3">
                    Terjual {product.sold}
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Tambah ke Keranjang
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 fade-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center hover-scale">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Aman & Terpercaya</h3>
              <p className="text-gray-600">Transaksi dijamin aman dengan sistem keamanan berlapis</p>
            </div>
            <div className="text-center hover-scale">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pengiriman ke seluruh Indonesia dengan berbagai pilihan kurir</p>
            </div>
            <div className="text-center hover-scale">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kualitas Terjamin</h3>
              <p className="text-gray-600">Produk berkualitas dengan sistem review dan rating dari pembeli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MarketPlace</span>
              </div>
              <p className="text-gray-300">
                Platform marketplace terpercaya untuk semua kebutuhan Anda
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kategori</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="#" className="hover:text-white transition-colors">Electronics</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Fashion</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Home & Garden</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Sports</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="#" className="hover:text-white transition-colors">Bantuan</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  ig
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  tw
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MarketPlace. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
