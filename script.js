 <!-- 
    =======================================================================
                        AQUI COMEÇA O JAVASCRIPT (Lógica)
         (Se for separar, copie tudo daqui pra baixo para um script.js)
    ======================================================================= 
    -->
    <script>
        
        // --- 1. DADOS DE CONTEÚDO ---
        
        // Conteúdo Estático (O Projeto e Sobre o Curso)
        const staticContent = {
            projeto: {
                title: "O Projeto Vozes e Memórias",
                category: "Institucional",
                icon: "book-open",
                color: "amber",
                content: `
                    <p><strong>Resgatando raízes, fortalecendo identidades.</strong></p>
                    <p>O Projeto Vozes e Memórias nasceu da necessidade de conectar as novas gerações de José Gonçalves de Minas com sua história. Idealizado dentro da E. E. Dr. Tancredo Neves, a iniciativa transformou os alunos do curso Técnico em Agronegócio em verdadeiros pesquisadores e historiadores.</p>
                    <p>O objetivo principal foi documentar a "história oral" — aqueles saberes que não estão nos livros, mas na memória dos mais velhos. Da produção artesanal de queijo e cachaça aos "causos" de assombração que moldaram a cultura local, tudo foi registrado.</p>
                    <p>O resultado é um acervo riquíssimo que prova que o Agronegócio não é apenas técnica e produção, mas também gente, cultura e tradição.</p>
                `
            },
            curso: {
                title: "Sobre o Curso Técnico em Agronegócio",
                category: "Formação",
                icon: "graduation-cap",
                color: "emerald",
                content: `
                    <p><strong>Formando profissionais para o campo e para a vida.</strong></p>
                    <p>O Curso Técnico em Agronegócio da Escola Estadual Dr. Tancredo Neves é referência na região. Com uma grade curricular que une teoria e prática, o curso prepara os alunos para os desafios da agricultura moderna, sem esquecer a importância da agricultura familiar e da sustentabilidade.</p>
                    <p>Nossos alunos aprendem desde gestão rural e técnicas de cultivo até a valorização do patrimônio cultural do campo. O projeto "Vozes e Memórias" é um exemplo dessa abordagem multidisciplinar, mostrando que entender o passado da terra é essencial para planejar seu futuro.</p>
                    <p>A escola se orgulha de, desde 1952, contribuir para o desenvolvimento educacional de José Gonçalves de Minas.</p>
                `
            }
        };

        // Dados dos Posts (Blog)
        const postsData = [
            {
                id: 1,
                title: "O Mistério da Mulher de Branco e o Lobisomem",
                category: "Causos & Lendas",
                excerpt: "Nas margens do rio ou na escuridão da quaresma, as histórias de assombração moldaram o comportamento de uma geração.",
                fullContent: `Dona Nelcides nos contou um relato de arrepiar que aconteceu com ela e sua irmã, Nilda. Após a morte do pai, as irmãs brigavam muito, até que um dia, no rio, viram uma aparição: uma mulher de saia preta e blusa branca em cima da pedra que dizia 'não briga'. O medo foi tanto que nunca mais voltaram lá sozinhas.\n\nMas os mistérios não param por aí. As noites antigas eram iluminadas por fogueiras onde se contavam histórias de Lobisomem. A lenda do sétimo filho assombrava as crianças. Dizia-se que na Quaresma o menino virava bicho.`,
                author: "Relato de D. Nelcides",
                date: "04 Dez 2024",
                icon: "ghost",
                color: "purple"
            },
            {
                id: 2,
                title: "Camas de Couro e Salada de Mato: A Vida na Roça",
                category: "Raízes Rurais",
                excerpt: "Sr. Antônio Lago relembra os tempos difíceis, mas felizes, onde o trabalho era coletivo e a diversão era garantida.",
                fullContent: `A vida no campo antigamente era 'da água para o vinho' comparada a hoje, conta Sr. Antônio. Na Fazenda Lago, a comunidade era unida: para derrubar mato ou colher, juntavam-se até 50 pessoas num mutirão cantante.\n\nNão havia luxo. Dormia-se em 'catres' de couro. E quando a fome apertava? A solução estava na natureza: faziam a 'ganhaçaia', uma salada de mato temperada. Mas também havia alegria, festas com sanfona e respeito entre as pessoas.`,
                author: "Relato de Sr. Antônio",
                date: "04 Dez 2024",
                icon: "sun",
                color: "amber"
            },
            {
                id: 3,
                title: "A Luta pela Emancipação",
                category: "Nossa História",
                excerpt: "Como José Gonçalves de Minas deixou de ser distrito de Berilo para se tornar independente.",
                fullContent: `A identidade de um povo também se faz na política e na educação. Dona Daci, filha do primeiro tabelião da cidade, relembra com orgulho a luta pela emancipação. José Gonçalves de Minas era distrito de Berilo, mas o desejo de independência falou mais alto.\n\nEm 22 de dezembro de 1995, após um plebiscito onde o 'Sim' venceu, a cidade nasceu oficialmente.`,
                author: "Relato de D. Daci",
                date: "04 Dez 2024",
                icon: "map-pin",
                color: "emerald"
            }
        ];

        // Dados dos Vídeos
        const videosData = [
            { id: 'v1', title: 'Histórias do Vale: A Cultura da Cachaça', videoId: 'dQw4w9WgXcQ', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', duration: '12:30' },
            { id: 'v2', title: 'Memórias da D. Nelcides', videoId: '5qap5aO4i9A', thumbnail: 'https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg', duration: '08:45' },
            { id: 'v3', title: 'Emancipação Política', videoId: 'jfKfPfyJRdk', thumbnail: 'https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg', duration: '15:20' },
            { id: 'v4', title: 'A Vida na Roça Antigamente', videoId: '4xDzrJKXOOY', thumbnail: 'https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg', duration: '10:15' }
        ];

        // --- 2. FUNÇÕES DE RENDERIZAÇÃO ---

        // Renderizar os Cards do Blog
        function renderPosts() {
            const container = document.getElementById('posts-container');
            if (!container) return; // Segurança caso a ID mude

            postsData.forEach(post => {
                const article = document.createElement('div');
                article.className = `bg-white rounded-xl shadow-lg overflow-hidden border border-stone-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full`;
                article.innerHTML = `
                    <div class="h-2 bg-${post.color}-600 w-full"></div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="p-2 rounded-lg bg-${post.color}-100 text-${post.color}-700">
                                <i data-lucide="${post.icon}" width="20" height="20"></i>
                            </span>
                            <span class="text-sm font-semibold text-${post.color}-700 uppercase tracking-wider">
                                ${post.category}
                            </span>
                        </div>
                        <h3 class="text-2xl font-serif font-bold text-stone-800 mb-3 leading-tight">${post.title}</h3>
                        <p class="text-stone-600 mb-6 line-clamp-3 flex-1">${post.excerpt}</p>
                        <div class="mt-auto">
                            <button onclick="openTextModal(${post.id})" class="w-full py-2 px-4 rounded-lg bg-${post.color}-50 text-${post.color}-700 font-medium hover:bg-${post.color}-100 transition-colors flex items-center justify-center gap-2">
                                Ler história completa <i data-lucide="chevron-right" width="16" height="16"></i>
                            </button>
                        </div>
                    </div>
                `;
                container.appendChild(article);
            });
        }

        // --- 3. LÓGICA DOS MODAIS (JANELAS) ---

        const textModal = document.getElementById('modal-backdrop');
        const textWrapper = document.getElementById('text-modal-content-wrapper');
        const videoGalleryModal = document.getElementById('video-gallery-modal');
        const videoGrid = document.getElementById('video-grid');
        const mainPlayer = document.getElementById('main-player-container');

        // Função Genérica para fechar qualquer modal
        function closeModal(modalId) {
            const el = document.getElementById(modalId);
            if(el) {
                el.classList.add('hidden');
                el.classList.remove('flex');
            }
            // Se for vídeo, mata o player pra parar o som
            if(modalId === 'video-gallery-modal') {
                mainPlayer.innerHTML = '';
                mainPlayer.classList.add('hidden');
            }
        }

        // Configura botões de fechar
        document.getElementById('modal-close').addEventListener('click', () => closeModal('modal-backdrop'));
        
        // Clicar fora fecha o modal
        window.onclick = function(event) {
            if (event.target === textModal) closeModal('modal-backdrop');
            if (event.target === videoGalleryModal) closeModal('video-gallery-modal');
        }

        // Abrir Modal de Post (Blog)
        function openTextModal(id) {
            const post = postsData.find(p => p.id === id);
            if(!post) return;

            textWrapper.innerHTML = `
                <div class="flex items-center gap-3 mb-6">
                   <span class="p-2 rounded-lg bg-${post.color}-100 text-${post.color}-700">
                    <i data-lucide="${post.icon}" width="24" height="24"></i>
                  </span>
                  <span class="font-semibold text-${post.color}-700 uppercase tracking-wider">${post.category}</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">${post.title}</h2>
                <div class="prose prose-stone prose-lg max-w-none font-serif text-stone-700 leading-relaxed space-y-4">
                    ${post.fullContent.split('\n').map(p => `<p>${p}</p>`).join('')}
                </div>
                <div class="mt-8 pt-8 border-t border-stone-200 text-sm text-stone-500 italic">
                    Fonte: Projeto Vozes e Memórias
                </div>
            `;
            
            textModal.classList.remove('hidden');
            textModal.classList.add('flex');
            lucide.createIcons();
        }

        // NOVO: Abrir Modal de Conteúdo Estático (Projeto / Curso)
        function openStaticModal(type) {
            const data = staticContent[type];
            if(!data) return;

            textWrapper.innerHTML = `
                <div class="flex items-center gap-3 mb-6">
                   <span class="p-2 rounded-lg bg-${data.color}-100 text-${data.color}-700">
                    <i data-lucide="${data.icon}" width="24" height="24"></i>
                  </span>
                  <span class="font-semibold text-${data.color}-700 uppercase tracking-wider">${data.category}</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">${data.title}</h2>
                <div class="prose prose-stone prose-lg max-w-none font-serif text-stone-700 leading-relaxed space-y-4">
                    ${data.content}
                </div>
            `;

            textModal.classList.remove('hidden');
            textModal.classList.add('flex');
            lucide.createIcons();
        }

        // --- 4. LÓGICA DE VÍDEOS ---

        function openVideoGallery() {
            renderVideoGrid();
            videoGalleryModal.classList.remove('hidden');
            videoGalleryModal.classList.add('flex');
            mainPlayer.innerHTML = ''; 
            mainPlayer.classList.add('hidden');
        }

        function closeVideoGallery() {
            closeModal('video-gallery-modal');
        }

        function renderVideoGrid() {
            videoGrid.innerHTML = '';
            videosData.forEach(video => {
                const card = document.createElement('div');
                card.className = "video-card bg-stone-800 rounded-lg overflow-hidden cursor-pointer group shadow-lg border border-stone-700 hover:border-amber-500 transition-all";
                card.onclick = () => playVideo(video.videoId, video.title);
                
                card.innerHTML = `
                    <div class="relative w-full aspect-video bg-black">
                        <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
                        <div class="play-overlay absolute inset-0 flex items-center justify-center">
                            <div class="play-icon w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white backdrop-blur-sm border border-white/20 transition-transform">
                                <i data-lucide="play" width="20" height="20" fill="white"></i>
                            </div>
                        </div>
                        <span class="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">${video.duration}</span>
                    </div>
                    <div class="p-3">
                        <h4 class="text-stone-100 font-medium text-sm line-clamp-2 leading-snug group-hover:text-amber-400 transition-colors">${video.title}</h4>
                    </div>
                `;
                videoGrid.appendChild(card);
            });
            lucide.createIcons();
        }

        function playVideo(videoId, title) {
            mainPlayer.classList.remove('hidden');
            mainPlayer.scrollIntoView({ behavior: 'smooth' });
            
            mainPlayer.innerHTML = `
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                    title="${title}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        }

        // Inicialização quando a página carrega
        document.addEventListener('DOMContentLoaded', () => {
            renderPosts();
            lucide.createIcons();
        });

    </script>
    <!-- ================= FIM DO JAVASCRIPT ================= -->
