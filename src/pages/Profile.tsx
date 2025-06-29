
import { useState } from 'react';
import { User, ShoppingBag, Heart, Settings, LogOut, Edit, Package, Star, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data untuk riwayat transaksi
const orderHistory = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    items: 3,
    total: 1299000,
    status: "Delivered",
    products: [
      {
        name: "Smartphone Gaming Pro",
        price: 5999000,
        quantity: 1,
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    items: 2,
    total: 899000,
    status: "Shipped",
    products: [
      {
        name: "Sepatu Sneakers Premium",
        price: 899000,
        quantity: 1,
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    items: 1,
    total: 299000,
    status: "Processing",
    products: [
      {
        name: "Tas Ransel Laptop",
        price: 299000,
        quantity: 1,
        image: "/placeholder.svg"
      }
    ]
  }
];

const wishlistItems = [
  {
    id: 1,
    name: "Headphone Wireless Premium",
    price: 799000,
    originalPrice: 999000,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 2100
  },
  {
    id: 2,
    name: "Jam Tangan Smart Watch",
    price: 1299000,
    originalPrice: 1599000,
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 445
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-800';
    case 'Shipped':
      return 'bg-blue-100 text-blue-800';
    case 'Processing':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Sudirman No. 123, Jakarta Selatan",
    joinDate: "Januari 2023",
    totalOrders: 25,
    totalSpent: 15750000
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" alt={user.name} />
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  <Badge variant="outline" className="mt-2">
                    Member sejak {user.joinDate}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profil Saya
                  </Button>
                  <Button
                    variant={activeTab === "orders" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("orders")}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Riwayat Pesanan
                  </Button>
                  <Button
                    variant={activeTab === "wishlist" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Wishlist
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Pengaturan
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:text-red-700"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Keluar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "profile" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{user.totalOrders}</h3>
                      <p className="text-gray-600">Total Pesanan</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CreditCard className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{formatPrice(user.totalSpent)}</h3>
                      <p className="text-gray-600">Total Pembelian</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">4.8</h3>
                      <p className="text-gray-600">Rating Rata-rata</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Profile Information */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Informasi Profil</CardTitle>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Nama Lengkap</label>
                        <p className="text-gray-800 mt-1">{user.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Email</label>
                        <p className="text-gray-800 mt-1">{user.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Nomor Telepon</label>
                        <p className="text-gray-800 mt-1">{user.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Tanggal Bergabung</label>
                        <p className="text-gray-800 mt-1">{user.joinDate}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Alamat</label>
                      <p className="text-gray-800 mt-1">{user.address}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Riwayat Pesanan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orderHistory.map((order) => (
                        <Card key={order.id} className="border border-gray-200">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                              <div>
                                <h3 className="font-semibold text-gray-800">Order #{order.id}</h3>
                                <p className="text-sm text-gray-600">{order.date}</p>
                              </div>
                              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                                <Badge className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                                <span className="font-semibold text-gray-800">
                                  {formatPrice(order.total)}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <img
                                src={order.products[0].image}
                                alt={order.products[0].name}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-800">
                                  {order.products[0].name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {order.items} item{order.items > 1 ? 's' : ''}
                                </p>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  Lihat Detail
                                </Button>
                                {order.status === "Delivered" && (
                                  <Button size="sm">
                                    Beli Lagi
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Wishlist Saya</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {wishlistItems.map((item) => (
                        <Card key={item.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <div className="relative mb-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-lg"
                              />
                              <Button
                                size="sm"
                                variant="outline"
                                className="absolute top-2 right-2 bg-white/90"
                              >
                                <Heart className="w-4 h-4 text-red-500 fill-current" />
                              </Button>
                            </div>
                            
                            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                              {item.name}
                            </h3>
                            
                            <div className="flex items-center mb-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">
                                {item.rating} ({item.reviews})
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <span className="text-lg font-bold text-gray-800">
                                  {formatPrice(item.price)}
                                </span>
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  {formatPrice(item.originalPrice)}
                                </span>
                              </div>
                            </div>
                            
                            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                              <Package className="w-4 h-4 mr-2" />
                              Tambah ke Keranjang
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Pengaturan Akun</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">Notifikasi</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Email promosi</span>
                          <input type="checkbox" className="rounded" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Notifikasi pesanan</span>
                          <input type="checkbox" className="rounded" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>SMS updates</span>
                          <input type="checkbox" className="rounded" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Keamanan</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          Ubah Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          Verifikasi Dua Langkah
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          Download Data Saya
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
