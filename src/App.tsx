import { useEffect, useState } from 'react';
import { ShoppingBag, Clock, Eye, Package, CheckCircle } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [viewers, setViewers] = useState(497);
  const [stock, setStock] = useState(20);
  const [notifications, setNotifications] = useState<Array<{ id: number; name: string; city: string }>>([]);

  const names = [
    { name: 'Helena', city: 'Maputo' },
    { name: 'Sandra', city: 'Nampula' },
    { name: 'Emília', city: 'Beira' },
    { name: 'Juliana', city: 'Matola' },
    { name: 'Rosa', city: 'Tete' },
    { name: 'Mariana', city: 'Quelimane' },
    { name: 'Catarina', city: 'Chimoio' },
    { name: 'Beatriz', city: 'Pemba' },
    { name: 'Ana', city: 'Maputo' },
    { name: 'Fernanda', city: 'Nampula' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);

    return () => clearInterval(viewerInterval);
  }, []);

  useEffect(() => {
    const stockInterval = setInterval(() => {
      setStock(prev => Math.max(1, prev - 1));
    }, 15000);

    return () => clearInterval(stockInterval);
  }, []);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      const randomPerson = names[Math.floor(Math.random() * names.length)];
      const newNotification = {
        id: Date.now(),
        name: randomPerson.name,
        city: randomPerson.city
      };

      setNotifications(prev => [...prev, newNotification]);

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 5000);
    }, 10000);

    return () => clearInterval(notificationInterval);
  }, []);

  const comments = [
    { name: 'Emília Yager', text: 'Perdi 18kg sem passar fome nem fazer dietas malucas! Obrigada, Dra Laura Gutiérrez — mudou a minha vida!', likes: 234, time: '2h', avatar: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Juliana Aparecida', text: 'Graças à receita da Dra Laura hoje consigo me sentir muito melhor com o meu corpo.', likes: 189, time: '3h', avatar: 'https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Maria do Rosário', text: 'Sou de Maputo, podem confirmar se funciona mesmo?', likes: 45, time: '4h', avatar: 'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Rosana Almeida', text: 'Sou de Maputo, usei durante 2 meses e perdi 15kg!', likes: 312, time: '5h', avatar: 'https://images.pexels.com/photos/8566506/pexels-photo-8566506.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Maira Laura', text: 'Muito obrigada, vou experimentar 🙏🙏', likes: 67, time: '6h', avatar: 'https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Fatima Silva', text: 'Recebi ontem e já comecei! Muito animada', likes: 98, time: '7h', avatar: 'https://images.pexels.com/photos/8846092/pexels-photo-8846092.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Teresa Macamo', text: 'Minha irmã perdeu 12kg, agora é a minha vez!', likes: 156, time: '8h', avatar: 'https://images.pexels.com/photos/8087336/pexels-photo-8087336.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Isabel Moiane', text: 'Funciona mesmo! Recomendo a todas', likes: 203, time: '9h', avatar: 'https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Lurdes António', text: 'Estou na segunda semana e já perdi 5kg 😍', likes: 178, time: '10h', avatar: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Graça Tembe', text: 'De Nampula com amor! Produto incrível', likes: 134, time: '11h', avatar: 'https://images.pexels.com/photos/8566529/pexels-photo-8566529.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Carla Nhantumbo', text: 'Finalmente algo que funciona de verdade', likes: 245, time: '12h', avatar: 'https://images.pexels.com/photos/8846087/pexels-photo-8846087.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Sofia Cossa', text: 'Meu marido não acredita na transformação!', likes: 289, time: '13h', avatar: 'https://images.pexels.com/photos/8566453/pexels-photo-8566453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Amélia Zandamela', text: 'Perdi 14kg em 8 semanas. Sem dieta restritiva!', likes: 367, time: '14h', avatar: 'https://images.pexels.com/photos/8613314/pexels-photo-8613314.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Benedita Uamusse', text: 'Sou de Beira, funciona perfeitamente aqui também', likes: 112, time: '15h', avatar: 'https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Diana Chissano', text: 'Produto de qualidade, entrega rápida!', likes: 89, time: '16h', avatar: 'https://images.pexels.com/photos/8613095/pexels-photo-8613095.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Elisa Mondlane', text: 'Já perdi 9kg e me sinto ótima!', likes: 201, time: '17h', avatar: 'https://images.pexels.com/photos/8566510/pexels-photo-8566510.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Flávia Sitoe', text: 'Recomendo para todas as minhas amigas', likes: 156, time: '18h', avatar: 'https://images.pexels.com/photos/8087349/pexels-photo-8087349.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Glória Mahanjane', text: 'Transformou minha autoestima completamente', likes: 278, time: '19h', avatar: 'https://images.pexels.com/photos/8471924/pexels-photo-8471924.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Helena Massinga', text: 'De Matola! Produto chegou certinho', likes: 145, time: '20h', avatar: 'https://images.pexels.com/photos/8566501/pexels-photo-8566501.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Iolanda Bila', text: 'Perdi 16kg sem sofrer, incrível!', likes: 334, time: '21h', avatar: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Joana Mahumane', text: 'Melhor compra que já fiz este ano', likes: 198, time: '22h', avatar: 'https://images.pexels.com/photos/8846097/pexels-photo-8846097.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Laura Chiconela', text: 'Funcionou comigo, vai funcionar com você também!', likes: 267, time: '23h', avatar: 'https://images.pexels.com/photos/8566464/pexels-photo-8566464.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Marta Guambe', text: 'Sou enfermeira e aprovo este produto!', likes: 412, time: '1d', avatar: 'https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Nádia Muianga', text: 'Já encomendei mais para minha mãe', likes: 189, time: '1d', avatar: 'https://images.pexels.com/photos/8566507/pexels-photo-8566507.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Promotion */}
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w80/mz.png"
              alt="Bandeira de Moçambique"
              className="w-8 h-6 object-cover rounded"
            />
            <span className="font-semibold">Promoção válida para Moçambique por:</span>
          </div>
          <div className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-bold">
            <Clock className="w-4 h-4" />
            <span>{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            🚨 URGENTE: Nutricionista revela fórmula natural que elimina até 17kg
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Sem dieta. Sem exercícios. Sem sofrimento.
          </p>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mb-6">
          <div className="bg-gray-900 rounded-lg overflow-hidden mb-4">
            <div dangerouslySetInnerHTML={{ __html: `
              <script type="text/javascript">
                var s=document.createElement("script");
                s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js",
                s.async=!0,document.head.appendChild(s);
              </script>
              <div id="ifr_68e3ccf4dd351732e60561ce_wrapper" style="margin: 0 auto; width: 100%;">
                <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_68e3ccf4dd351732e60561ce_aspect">
                  <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68e3ccf4dd351732e60561ce" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload="this.onload=null, this.src='https://scripts.converteai.net/bf7b07ce-7f37-4cc0-baf1-0d1b3e8d08c7/players/68e3ccf4dd351732e60561ce/v4/embed.html'+(location.search||'?')+'&vl='+encodeURIComponent(location.href)"></iframe>
                </div>
              </div>
            `}} />
          </div>

          {/* Viewers Counter */}
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
            <Eye className="w-5 h-5 text-red-600" />
            <span className="font-semibold">{viewers} pessoas estão assistindo agora</span>
          </div>

          {/* CTA Button */}
          <a
            href="https://pay.lojou.app/p/Jtik1"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white text-xl sm:text-2xl font-bold py-4 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center mb-4"
          >
            <ShoppingBag className="inline-block w-6 h-6 mr-2" />
            Adiquir Agora
          </a>

          {/* Stock Counter */}
          <div className={`text-center py-3 px-4 rounded-lg ${stock < 5 ? 'bg-red-100 animate-pulse' : 'bg-yellow-100'}`}>
            <div className="flex items-center justify-center gap-2">
              <Package className={`w-5 h-5 ${stock < 5 ? 'text-red-600' : 'text-yellow-700'}`} />
              <span className={`font-bold ${stock < 5 ? 'text-red-600 text-lg' : 'text-yellow-700'}`}>
                Restam apenas {stock} produtos
              </span>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comentários ({comments.length})</h2>
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-start gap-3">
                  <img
                    src={comment.avatar}
                    alt={comment.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">{comment.name}</span>
                      <span className="text-gray-400 text-sm">{comment.time}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{comment.text}</p>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-lg">
              <CheckCircle className="w-6 h-6" />
              <span>Garantia de satisfação em até 30 dias</span>
            </div>
            <p className="text-gray-600">
              Pagamento seguro via métodos locais.
            </p>
            <div className="pt-4 border-t border-gray-200 text-sm text-gray-500">
              © 2025 - Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-green-500 p-4 z-50 sm:hidden">
        <a
          href="https://pay.lojou.app/p/Jtik1"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 rounded-xl shadow-lg text-center"
        >
          <ShoppingBag className="inline-block w-5 h-5 mr-2" />
          Adiquir Agora
        </a>
      </div>

      {/* Notifications */}
      <div className="fixed bottom-4 left-4 z-40 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className="bg-white rounded-lg shadow-2xl p-4 border-l-4 border-green-500 animate-slide-in max-w-xs"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <p className="text-sm font-semibold text-gray-800">
                {notification.name} de {notification.city} acabou de comprar 🎉
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
