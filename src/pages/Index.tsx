import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface HookahSet {
  id: string;
  name: string;
  price: number;
  dailyPrice: number;
  deposit: number;
  available: number;
  total: number;
  description: string;
  includes: string[];
}

const Index = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    address: '',
    set: '',
    duration: '',
    master: false,
    delivery: false
  });

  const [hookahSets, setHookahSets] = useState<HookahSet[]>([
    {
      id: '1',
      name: 'Минимальный',
      price: 300,
      dailyPrice: 900,
      deposit: 3000,
      available: 5,
      total: 8,
      description: 'Базовый набор для домашнего отдыха',
      includes: ['Кальян', 'Чаша', 'Калауд', 'Щипцы', '5 мундштуков']
    },
    {
      id: '2',
      name: 'Стандартный',
      price: 450,
      dailyPrice: 1200,
      deposit: 5000,
      available: 3,
      total: 6,
      description: 'Популярный выбор для вечеринок',
      includes: ['Кальян', 'Чаша', 'Калауд', 'Щипцы', '10 мундштуков', 'Сетка', 'Колпак', 'Горелка или плита']
    },
    {
      id: '3',
      name: 'Премиум',
      price: 0,
      dailyPrice: 1400,
      deposit: 8000,
      available: 2,
      total: 3,
      description: 'Премиум качество для особых случаев',
      includes: ['Премиум кальян', '2 чаши', 'Калауд', 'Щипцы', '10 мундштуков', 'Сетка', 'Колпак', 'Горелка или плита']
    }
  ]);

  const faqData = [
    {
      question: 'Как происходит доставка?',
      answer: 'Доставляем по всей Калуге. Стоимость от 200₽ в зависимости от района. Время доставки обговаривается индивидуально.'
    },
    {
      question: 'Что входит в услугу мастера?',
      answer: 'Мастер приезжает, собирает кальян, забивает чашу и следит за процессом. Стоимость 1000₽/час.'
    },
    {
      question: 'Какие способы оплаты залога?',
      answer: 'Для минимального и стандартного наборов - залог деньгами или паспорт. Для премиум - только деньгами.'
    },
    {
      question: 'Можно ли использовать свой табак?',
      answer: 'Да, конечно! Вы можете использовать свой табак или приобрести у нас.'
    },
    {
      question: 'Сколько длится аренда?',
      answer: 'Минимальная аренда - 1 час. Максимальная - сутки. Возможна почасовая или суточная оплата.'
    }
  ];

  const handleBooking = () => {
    // Здесь будет логика отправки в WhatsApp/Telegram
    const message = `Новая бронь:
Имя: ${bookingData.name}
Телефон: ${bookingData.phone}
Адрес: ${bookingData.address}
Набор: ${bookingData.set}
Длительность: ${bookingData.duration}
Мастер: ${bookingData.master ? 'Да' : 'Нет'}
Доставка: ${bookingData.delivery ? 'Да' : 'Нет'}`;
    
    alert('Заявка отправлена! Мы свяжемся с вами для подтверждения.');
  };

  const updateAvailability = (id: string, available: number) => {
    setHookahSets(sets => 
      sets.map(set => 
        set.id === id ? { ...set, available } : set
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-cyan-50 font-open-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white text-xl">💨</span>
            </div>
            <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Smokk Lab
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#sets" className="hover:text-primary transition-colors">Наборы</a>
            <a href="#booking" className="hover:text-primary transition-colors">Бронирование</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsAdmin(!isAdmin)}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Icon name="Settings" size={16} />
            Админ
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            🚀 Аренда кальянов в Калуге
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Smokk Lab – дымный комфорт для вашего праздника! Качественные кальяны с доставкой и мастером
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="text-lg px-4 py-2">✔ 3 варианта наборов</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">✔ Быстрая доставка</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">✔ Выезд мастера</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">✔ Гарантия чистоты</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать
            </Button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Hookah Sets */}
      <section id="sets" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            💨 Наши кальянные наборы
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {hookahSets.map((set) => (
              <Card key={set.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-bl-full"></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-montserrat font-bold text-gray-800">
                      {set.name}
                    </CardTitle>
                    <Badge variant={set.available > 0 ? "default" : "destructive"} className="ml-2">
                      {set.available}/{set.total}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{set.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-primary">
                        {set.price > 0 ? `${set.price}₽/час` : 'Только посуточно'}
                      </span>
                      <span className="text-lg font-semibold text-secondary">
                        {set.dailyPrice}₽/сутки
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      🔹 Залог: {set.deposit.toLocaleString()}₽ {set.id !== '3' && 'или паспорт'}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-700">В комплекте:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {set.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <Icon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {isAdmin && (
                    <div className="border-t pt-4 mt-4">
                      <Label htmlFor={`available-${set.id}`} className="text-sm font-medium">
                        Доступно наборов:
                      </Label>
                      <Input
                        id={`available-${set.id}`}
                        type="number"
                        min="0"
                        max={set.total}
                        value={set.available}
                        onChange={(e) => updateAvailability(set.id, parseInt(e.target.value))}
                        className="w-20 mt-1"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            📲 Бронирование
          </h3>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-center">Заказать кальян</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                    placeholder="8 (XXX) XXX-XX-XX"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="address">Адрес доставки *</Label>
                <Input
                  id="address"
                  value={bookingData.address}
                  onChange={(e) => setBookingData({...bookingData, address: e.target.value})}
                  placeholder="Улица, дом, квартира"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="set">Выберите набор *</Label>
                  <Select value={bookingData.set} onValueChange={(value) => setBookingData({...bookingData, set: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите набор" />
                    </SelectTrigger>
                    <SelectContent>
                      {hookahSets.map((set) => (
                        <SelectItem 
                          key={set.id} 
                          value={set.name}
                          disabled={set.available === 0}
                        >
                          {set.name} {set.available === 0 && '(нет в наличии)'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration">Длительность *</Label>
                  <Select value={bookingData.duration} onValueChange={(value) => setBookingData({...bookingData, duration: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1 час">1 час</SelectItem>
                      <SelectItem value="2 часа">2 часа</SelectItem>
                      <SelectItem value="3 часа">3 часа</SelectItem>
                      <SelectItem value="сутки">Сутки</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bookingData.master}
                    onChange={(e) => setBookingData({...bookingData, master: e.target.checked})}
                    className="rounded border-gray-300"
                  />
                  <span>Нужен мастер (+1000₽/час)</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bookingData.delivery}
                    onChange={(e) => setBookingData({...bookingData, delivery: e.target.checked})}
                    className="rounded border-gray-300"
                  />
                  <span>Доставка (от 200₽)</span>
                </label>
              </div>

              <Button 
                onClick={handleBooking} 
                className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                disabled={!bookingData.name || !bookingData.phone || !bookingData.address || !bookingData.set || !bookingData.duration}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Delivery & Contacts */}
      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-montserrat font-bold mb-8 text-gray-800">
                🚗 Доставка
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">По всей Калуге</h4>
                    <p className="text-gray-600">Доставляем в любую точку города</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Truck" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Стоимость от 200₽</h4>
                    <p className="text-gray-600">Точная цена зависит от района</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Быстрая доставка</h4>
                    <p className="text-gray-600">Время доставки обговаривается индивидуально</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="contacts">
              <h3 className="text-3xl font-montserrat font-bold mb-8 text-gray-800">
                📞 Контакты
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">8 (995) 328-71-52</h4>
                    <p className="text-gray-600">WhatsApp / Telegram</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Ежедневно 10:00 - 20:00</h4>
                    <p className="text-gray-600">Режим работы</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Путейская 23</h4>
                    <p className="text-gray-600">Наш офис</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <Button className="bg-green-500 hover:bg-green-600">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            ❓ Частые вопросы
          </h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-montserrat font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white text-xl">💨</span>
            </div>
            <h4 className="text-2xl font-montserrat font-bold">Smokk Lab</h4>
          </div>
          <p className="text-gray-400 mb-4">
            🎉 Кальян – в любую точку города! Для вечеринок, свиданий, корпоративов и просто отдыха
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>📌 Свой табак? Можем использовать ваш!</span>
            <span>📌 Аренда + мастер = идеальный дым без хлопот</span>
          </div>
          <div className="mt-8 text-gray-500 text-sm">
            © 2024 Smokk Lab. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;