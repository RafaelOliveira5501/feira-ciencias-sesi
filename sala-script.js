// ========================================
// SALA-SCRIPT.JS - Interações das páginas de sala
// ========================================

// Dados detalhados dos projetos (atualizados a partir dos HTMLs das salas)
const projectsData = {
    // Mantém os três primeiros com descrições mais completas
    1: {
        title: "Energia Solar Sustentável",
        category: "Física",
        team: ["Ana Paula Silva", "Carlos Eduardo Santos", "Mariana Oliveira"],
        pitch: "Auditório Principal - 10h30",
        fullDescription: `<p>Desenvolvimento de um sistema acessível de captação de energia solar para pequenas residências, com ênfase em redução de custos e sustentabilidade.</p>`,
        images: []
    },
    2: {
        title: "Robótica e Automação",
        category: "Tecnologia",
        team: ["Pedro Henrique Costa", "Julia Fernandes", "Lucas Almeida", "Beatriz Rodrigues"],
        pitch: "Sala de Tecnologia - 14h00",
        fullDescription: `<p>Projeto de robô autônomo para tarefas simples, usando Arduino e sensores.</p>`,
        images: []
    },
    3: {
        title: "Purificação de Água",
        category: "Química",
        team: ["Rafaela Lima", "Gabriel Souza"],
        pitch: "Laboratório de Química - 11h15",
        fullDescription: `<p>Sistema de baixo custo para purificação de água com múltiplas camadas filtrantes.</p>`,
        images: []
    },

    // Sala 1º / 2º / 3º Ano (dados extraídos dos HTMLs)
    4:  { title: "Câmara Escura", category: "Feira do Conhecimento - 2º Ano", team: ["Manuella Vitoria de Oliveira da Silva","João Gustavo Augusto Bicudo","Lavinia Cristine de Souza Simões","Emanuely Maria Nunes Batista"], pitch: "Sala 11", fullDescription: `<p>Princípios da formação de imagens em óptica usando câmara escura.</p>`, images: [] },
    5:  { title: "Óptica", category: "Feira do Conhecimento - 2º Ano", team: ["Annelise Ramos Moreira","Lucas Gustavo de Oliveira Rosa"], pitch: "Sala 11", fullDescription: `<p>Estudo prático da reflexão, refração e formação de imagens.</p>`, images: [] },
    6:  { title: "Extração de DNA e Eletroforese", category: "Feira do Conhecimento - 2º Ano", team: ["Anna Lívia Rodrigues Vicente","Heloá Fonseca Trazzi","João Lucas de Almeida Rocha Silva","Maria Rafaela de Almeida Rocha Silva","Yasmin Pinesso dos Santos"], pitch: "Sala 12", fullDescription: `<p>Procedimentos de extração de DNA e visualização por eletroforese.</p>`, images: [] },
    7:  { title: "Estrelas", category: "Feira do Conhecimento - 2º Ano", team: ["Luis Felipe da Silva Xavier","Cássio Targino Borges","Guilherme Kenzo Shiromoto","Pedro Henrique de Souza Varella Faria"], pitch: "Sala 11", fullDescription: `<p>Conceitos sobre estrelas e fusão nuclear.</p>`, images: [] },
    8:  { title: "Resina Bactericida", category: "Feira do Conhecimento - 2º Ano", team: ["Gabriel Fernandes de Araújo","Gabriel Manfredine dos Santos","Kauã Henrique da Cruz","Lucas Martins Maria Barbosa","Brenda Ferreira Barreto"], pitch: "Sala 11", fullDescription: `<p>Desenvolvimento de resinas com propriedades bactericidas.</p>`, images: [] },
    9:  { title: "Levitação Clássica", category: "Feira do Conhecimento - 2º Ano", team: ["Manuella Anunciato Nobre","Victoria de Souza do Espírito Santo","Breno Douglas Carneiro Gomes","Matheus Augusto Euzébio de Souza"], pitch: "Sala 11", fullDescription: `<p>Experimentos demonstrando levitação por efeitos magnéticos/estáticos.</p>`, images: [] },
    10: { title: "Tratamento de Água e Esgoto", category: "Feira do Conhecimento - 2º Ano", team: ["Gabriella Dantas de Medeiros","Isabella Lima","Gabriel dos Santos Moraes","Miguel dos Santos Pereira","Gustavo Monteiro Bulhões"], pitch: "Sala 11", fullDescription: `<p>Soluções e processos para tratamento de água e esgoto.</p>`, images: [] },
    11: { title: "Pilhas", category: "Feira do Conhecimento - 2º Ano", team: ["Leonardo Henrique Ribeiro do Nascimento","Luiz Henrique de Macedo Campos","Higor Fernandes Cardin","Gabriel Lima Nepomuceno"], pitch: "Sala 11", fullDescription: `<p>Conceitos e montagem de pilhas elétricas.</p>`, images: [] },
    12: { title: "Pilhas e Baterias", category: "Feira do Conhecimento - 2º Ano", team: ["Kauê Arthur Santos","Kaiky Bryan dos Santos Martins","Lavínia Miguel de Melo","João Pedro de Paiva Campos","Gustavo Henrique dos Santos Martins","Miguel da Rocha Valada"], pitch: "Sala 11", fullDescription: `<p>Comparativo entre pilhas e baterias e aplicações.</p>`, images: [] },
    13: { title: "Projeto (sem título)", category: "Feira do Conhecimento - 2º Ano", team: ["Maria Eduarda Andrade de Bastos","Vitor Hugo França Silva","Adrielle de Siqueira Fernandes"], pitch: "Sala 12", fullDescription: `<p>Projeto sem título preenchido no HTML.</p>`, images: [] },
    14: { title: "Foguete", category: "Feira do Conhecimento - 2º Ano", team: ["Augusto Braz Hoelzle","Júlia Nojosa Querino","Leonardo Ferreira Yano","Leonardo Henrique Justo dos Santos","Matheus Fabiano da Silva Galvão"], pitch: "Sala 12", fullDescription: `<p>Construção e princípios de foguetes didáticos.</p>`, images: [] },
    15: { title: "Vulcão", category: "Feira do Conhecimento - 2º Ano", team: ["Bryan Vinícius Rafaeli Oliveira","Enzo Fernandes Amaro","João Pedro Dario Ribeiro","João Pedro Felix de Lara","Ricardo Morais Ribeiro Filho"], pitch: "Sala 12", fullDescription: `<p>Modelagem de vulcões e reações químicas demonstrativas.</p>`, images: [] },
    16: { title: "Atmosfera", category: "Feira do Conhecimento - 2º Ano", team: ["Anna Clara Benitez Erberelli","Clara de Cássia Vieira Rodrigues","Giovana Ramos de Oliveira","Rafaela Teles Simões de Freitas"], pitch: "Sala 12", fullDescription: `<p>Estudo sobre camadas e fenômenos atmosféricos.</p>`, images: [] },
    17: { title: "Sistema Circulatório", category: "Feira do Conhecimento - 2º Ano", team: ["Ana Clara Ribeiro Frota","Julianne Medeiros Sarte","Manuela Gonçalves Saquetti dos Santos"], pitch: "Sala 12", fullDescription: `<p>Apresentação sobre funcionamento do sistema circulatório.</p>`, images: [] },

    // Sala 3º Ano
    18: { title: "Eletrostática", category: "Feira do Conhecimento - 3º Ano", team: ["Richard Fernandes Barbosa e Silva","Henrique Aparecido Pereira","João Gabriel Marcelino Ferreira","Tiago Ferreira de Oliveira"], pitch: "Sala 17", fullDescription: `<p>Experimentos e conceitos de cargas elétricas e campo elétrico.</p>`, images: [] },
    19: { title: "Bioplástico", category: "Feira do Conhecimento - 3º Ano", team: ["Attílio Santana Minzoni","Ana Luísa Ferreira Ribeiro","Letícia Fani dos Santos Oliveira","Tiago Rodrigues de Moraes Godoy","Fernanda Gabrielly de Pádua Martins"], pitch: "Sala 17", fullDescription: `<p>Produção e propriedades de bioplásticos a partir de materiais orgânicos.</p>`, images: [] },
    21: { title: "Eletrólise", category: "Feira do Conhecimento - 3º Ano", team: ["Amanda Soares Sant’Ana","Ana Júlia Ferreira Sant’Ana","Giovana Lima de Souza","Giovanna Ayumi Fujiwara Zabinê"], pitch: "Sala 17", fullDescription: `<p>Processos de eletrólise e aplicações.</p>`, images: [] },
    22: { title: "Efeitos do Metanol no Organismo", category: "Feira do Conhecimento - 3º Ano", team: ["Gustavo Vieira Leite","Gabrielly Alessandra Gonçalves Xavier","Eduardo Henrique Neves de Castro Reis"], pitch: "Sala 17", fullDescription: `<p>Impactos do metanol no organismo humano.</p>`, images: [] },
    23: { title: "Biocombustível", category: "Feira do Conhecimento - 3º Ano", team: ["João Pedro de Oliveira Brandi Ribeiro Machado","Rafael Marcos Fróis de Oliveira","Maria Clara Caputo Matiotti"], pitch: "Sala 17", fullDescription: `<p>Produção de biocombustíveis a partir de resíduos.</p>`, images: [] },
    24: { title: "Obesidade e Sistema Digestório", category: "Feira do Conhecimento - 3º Ano", team: ["Elís Vitória Moreira da Silva","Julia Gabrielly Rodrigues","Milena Vitória Silva","Ruan Monteiro Brito"], pitch: "Sala 17", fullDescription: `<p>Relação entre dieta, digestão e obesidade.</p>`, images: [] },
    25: { title: "Hovercraft & Balão de Fermentação", category: "Feira do Conhecimento - 3º Ano", team: ["Giovanna Araujo Moreira","Larissa de Lima Moisés","Maria Eduarda Ferreira dos Santos","Matheus Henrique da Silva","Vinícius Matos Martins"], pitch: "Sala 15", fullDescription: `<p>Demonstrar propulsão por ar e processo de fermentação.</p>`, images: [] },
    26: { title: "Bioplástico (3º Ano B)", category: "Feira do Conhecimento - 3º Ano", team: ["Guilherme Gabriel da Silva","Luiz Guilherme Queiroz da Silva Oliveira","Raul Rodrigues Bicudo","Vinícius Thomas da Silva"], pitch: "Sala 15", fullDescription: `<p>Produção de plástico a partir da caseína do leite.</p>`, images: [] },
    27: { title: "Lâmpada de Lava", category: "Feira do Conhecimento - 3º Ano", team: ["Ana Clara Santos Ferreira","Ana Luíza de Oliveira Freitas","Ana Júlia Rodrigues Masson","Luiza Pereira Dantas","Maria Clara Marins Feitosa","Matheus de Oliveira Caramuru"], pitch: "Sala 15", fullDescription: `<p>Experimento demonstrativo de imiscibilidade e densidade.</p>`, images: [] },
    28: { title: "Análise Microbiológica", category: "Feira do Conhecimento - 3º Ano", team: ["Gabriela Santos da Silva","Isabelly Fofano","Lavínia Rocha de Oliveira Ribeiro","Lívia Grigorini Alves dos Santos","Yasmim de Andrade Lima","Elis Gonçalves Fidencio"], pitch: "Sala 15", fullDescription: `<p>Análises de bactérias em ambientes diversos.</p>`, images: [] },
    29: { title: "Biodiesel a partir do Óleo de Soja", category: "Feira do Conhecimento - 3º Ano", team: ["João Victor Vieira de Sousa","Kauã Guimarães da Silva","Leonardo Henrique Silva Tavares","Matheus de Almeida Rodrigues","Raí Guilherme Vilas Boas Gomes"], pitch: "Sala 15", fullDescription: `<p>Processo de produção de biodiesel e avaliação de eficiência.</p>`, images: [] },
    30: { title: "Criação do site", category: "Feira do Conhecimento - 3º Ano", team: ["Arthur Filipe dos Santos Pereira","Gabriel Prudente Magalhães","Guilheme Aparecido Nascimento","Júlio Cesar Carneiro Filho","Rafael Oliveira e Silva"], pitch: "Você está vendo agora!", fullDescription: `<p>Site desenvolvido para apresentar os projetos da feira.</p>`, images: [] },

    // Sala 9º Ano
    31: { title: "Reações Químicas", category: "Feira do Conhecimento - 9º Ano", team: ["Larissa De Paula","Mariana Elisa De Souza Vicente"], pitch: "Laboratório de Química ou Física", fullDescription: `<p>Demonstração de reações químicas controladas.</p>`, images: [] },
    32: { title: "Bola de Plasma", category: "Feira do Conhecimento - 9º Ano", team: ["Mariana Vitória Faria Dos Santos","Gabriel Godoy Costa","Kemelyn Keisy Dos Santos Cabral","Maria Luisa Barbosa","Sara Liz Silva Domingues"], pitch: "Laboratório de Química ou Física", fullDescription: `<p>Exploração do plasma e propriedades elétricas.</p>`, images: [] },
    33: { title: "Semáforo Inteligente", category: "Feira do Conhecimento - 9º Ano", team: ["Helena Marcondes Dos Santos","Ana Laura Dias Da Silva","Paulo Miguel Cabral Lima"], pitch: "Laboratório de Química ou Física", fullDescription: `<p>Sistema de semáforo com controle inteligente para otimizar o trânsito.</p>`, images: [] },
    34: { title: "Drone e sua Importância", category: "Feira do Conhecimento - 9º Ano", team: ["Thiago Nepomuceno Carvalho","Carlos Alexandre Oliveira Amaral","Igor Marcondes De Souza","Philipe Gabriel Machado Benedito"], pitch: "Laboratório de Química ou Física", fullDescription: `<p>Aplicações de drones na sociedade e tecnologia embarcada.</p>`, images: [] },
    35: { title: "Drones na Agricultura", category: "Feira do Conhecimento - 9º Ano", team: ["Vinícius Marcelino Da Silva","Gustavo Mendes De Moraes Souza","Arthur Ferreira Teixeira","Isac Marcelino Da Silva"], pitch: "Laboratório de Química ou Física", fullDescription: `<p>Uso de drones para monitoramento e aplicação agrícola.</p>`, images: [] },
    36: { title: "Energia Eólica", category: "Feira do Conhecimento - 9º Ano", team: ["Julia Teles Marques","Thamires Matias De Souza"], pitch: "Laboratório de Química ou Física", fullDescription: `<p>Modelos e princípios de geração eólica.</p>`, images: [] },
    37: { title: "Garra Mecânica", category: "Feira do Conhecimento - 9º Ano", team: ["Alice De Albuquerque Santos","Anna Júlia Souto","Eduarda Santos Braga","Gabriel Teixeira Silva Lisboa","Gabriel Leite Travnisk De Souza","Henrique Porcionato Neves Silva","Pedro Henrique De Moraes Justino","Taniara Sarah Coutinho Neves"], pitch: "Laboratório de Química ou Física", fullDescription: `<p>Projeto de garra mecânica com atuadores e controle.</p>`, images: [] },
    38: { title: "Água Furiosa", category: "Feira do Conhecimento - 9º Ano", team: ["Vitor Rodrigues Cunha De Moura","Cauã Miguel Flausino Da Cruz","Pedro Miguel Alves De Carvalho","Analu Pires Mariano","Ana Clara Moraes Idalgo","Lucas Henrique Soares Abdalla","Pietro Carvalho Augusto"], pitch: "Sala 19", fullDescription: `<p>Experimentos com dinâmica de fluidos e pressões.</p>`, images: [] },
    39: { title: "Sistema de Irrigação Automático / Carro Autônomo", category: "Feira do Conhecimento - 9º Ano", team: ["Romulo Victor Maia Faria","Luis Miguel Joia","João Vitor Santos Rodrigues","Rafael Oliveira Bucheri","Calebe Nogueira Santos","Saymon Sobrinho Ferreira"], pitch: "Sala 19", fullDescription: `<p>Sistemas autônomos aplicados à irrigação e mobilidade.</p>`, images: [] },
    40: { title: "Luz e Cor", category: "Feira do Conhecimento - 9º Ano", team: ["Yasmin Tomazini Santos","Maria Cecília Da Costa Crispim","Helena De Paula Bernardo Luqueti","Miguel Da Cunha Peres Rangel"], pitch: "Sala 19", fullDescription: `<p>Estudo das propriedades da luz e percepção de cores.</p>`, images: [] },
    41: { title: "Casa Inteligente", category: "Feira do Conhecimento - 9º Ano", team: ["Gabriel Ribeiro Frota","Isabela Mukaibata Gonçalves","Allana Riccielly Gregório Souza","Giovanna Bom Sucesso Cunha","Vitor Rodrigues Cunha De Moura","Felipe Tomaz Silva Freitas"], pitch: "Sala 19", fullDescription: `<p>Soluções e automações para uma casa inteligente.</p>`, images: [] },
    42: { title: "Labirinto", category: "Feira do Conhecimento - 9º Ano", team: ["Anna Júlia Jesus Da Silva","Sara Machado Silva","Beatriz Sayuri Tanaka","Gustavo Rodrigo Oliveira Gomes"], pitch: "Sala 19", fullDescription: `<p>Construção e lógica para resolução de labirintos.</p>`, images: [] },
    43: { title: "Energia e Sustentabilidade", category: "Feira do Conhecimento - 9º Ano", team: ["Maria Alice Moreno Balbino","Davi Macenas Duque Cés ar De Moraes","Carlos Eduardo Ravagnani Mariano","Giulya Raiane Aparecida Ribeiro Marcelino"], pitch: "Sala 19", fullDescription: `<p>Projetos de energia com foco em sustentabilidade.</p>`, images: [] },

    // Novos IDs atribuídos (substituem duplicatas anteriores)
    44: { title: "Usina Nuclear (2º Ano)", category: "Feira do Conhecimento - 2º Ano", team: ["Eric Hideyuki Tanaka"], pitch: "Sala 11", fullDescription: `<p>Informações sobre usinas nucleares e geração de energia.</p>`, images: [] },
    45: { title: "Roubando a Lua", category: "Feira do Conhecimento - 2º Ano", team: ["Pedro Santos","Mariana Ferreira Fernandes Pinto","Mariany Netto dos Santos Souza","Pedro Henrique dos Santos","Esthephany Cristine Borges da Silva","Rebeca Beatryz Pereira de Matos","Sarah Beatriz Machado Vicente"], pitch: "Sala 13", fullDescription: `<p>Maquete e estudo interdisciplinar sobre a Lua.</p>`, images: [] },
    46: { title: "Eletrofotossíntese", category: "Feira do Conhecimento - 2º Ano", team: ["Miguel Vinícius Rodrigues Barbosa"], pitch: "Sala 11", fullDescription: `<p>Combinação de fotossíntese e geração de eletricidade.</p>`, images: [] },
    47: { title: "Energia e Sustentabilidade (variação)", category: "Feira do Conhecimento - 9º Ano", team: ["Enzo Matias Silva De Oliveira","João Carlos Bastos Maraveli Lopes","Luiz Fernando Angelotti Neto","Rafael De Macedo Bueno","Pietro Luís Toledo Dos Santos"], pitch: "Laboratório de Química & Física", fullDescription: `<p>Variante do projeto de energia sustentável.</p>`, images: [] },
    48: { title: "Energia e Sustentabilidade (variação)", category: "Feira do Conhecimento - 9º Ano", team: ["Anny Beatrice Alves Rodrigues","Giovana Cristini Marins","Lívia Pinesso Dos Santos","Maria Luiza Morais Ribeiro"], pitch: "Laboratório de Química & Física", fullDescription: `<p>Outra apresentação sobre energia e sustentabilidade.</p>`, images: [] },
    49: { title: "Sensor de Frequência Cardíaca", category: "Feira do Conhecimento - 9º Ano", team: ["Ana Clara Gouvêa Santos","Ana Luiza Borges Rondel","Ericka Aparecida Dos Santos","Emily Vitória Lima Xavier","Giovana Souza Santos","Pedro Henrique Moraes Dos Santos"], pitch: "Laboratório de Química & Física", fullDescription: `<p>Sensor para medição de frequência cardíaca.</p>`, images: [] },
    50: { title: "Eclusa", category: "Feira do Conhecimento - 9º Ano", team: ["Ana Beatriz De Lima Cabral","Brenda Jesus Santana","Clarice Gallego Costa Dos Santos","Milena De Paiva Ferreira","Geovanna Victoria Dos Santos Domingues"], pitch: "Laboratório de Química & Física", fullDescription: `<p>Modelo de eclusa e princípios hidráulicos.</p>`, images: [] },
    51: { title: "Barco de Controle Remoto", category: "Feira do Conhecimento - 9º Ano", team: ["Laís Caroline Cardoso","Gabrielly Romao Fernandes De Souza","Ana Clara De Castro Bezdiguian","Laura Pereira Dantas"], pitch: "Laboratório de Química & Física", fullDescription: `<p>Construção e controle de barco RC.</p>`, images: [] },
    52: { title: "Pasta de Elefante", category: "Feira do Conhecimento - 9º Ano", team: ["Davi Lencioni De Souza","Felipe De Abreu Silva","Vitor Gonzaga Ferreira"], pitch: "Laboratório de Química & Física", fullDescription: `<p>Experimento químico conhecido como 'pasta de elefante'.</p>`, images: [] }
};

// Função para verificar se uma imagem existe (tentando múltiplos formatos)
async function checkImageExists(baseUrl) {
    const formats = ['.jpg', '.jpeg', '.png', '.svg', '.webp'];
    const urlWithoutExt = baseUrl.replace(/\.[^/.]+$/, '');
    
    for (const format of formats) {
        try {
            const response = await fetch(urlWithoutExt + format, { method: 'HEAD' });
            if (response.ok) {
                return urlWithoutExt + format;
            }
        } catch (e) {
            continue;
        }
    }
    return null;
}

// Garantir pelo menos 4 imagens por projeto usando placeholders
Object.keys(projectsData).forEach(key => {
    const p = projectsData[key];
    if (!p.images) p.images = [];
    for (let i = 1; i <= 4; i++) {
        if (!p.images[i - 1]) {
            // Tenta JPG primeiro, depois SVG como fallback
            p.images[i - 1] = {
                url: `images/projects/p${key}-${i}.jpg`,
                caption: (p.title ? `${p.title} - Imagem ${i}` : `Projeto ${key} - Imagem ${i}`),
                fallback: `images/projects/p${key}-${i}.svg`
            };
        }
    }
});

// Garantir que cada projeto tenha ao menos uma imagem (placeholder) quando vazio.
Object.keys(projectsData).forEach(key => {
    const proj = projectsData[key];
    if (!proj) return;
    if (!Array.isArray(proj.images) || proj.images.length === 0) {
        // Tenta JPG primeiro, SVG como fallback
        proj.images = [{ 
            url: `images/projects/project-${key}.jpg`, 
            caption: proj.title || 'Imagem do projeto',
            fallback: `images/projects/project-${key}.svg`
        }];
    }
});

// Função para lidar com erro de carregamento de imagem e tentar fallback
function handleImageError(imgElement) {
    const fallbackUrl = imgElement.getAttribute('data-fallback');
    if (fallbackUrl && imgElement.src !== fallbackUrl) {
        imgElement.src = fallbackUrl;
    } else {
        // Placeholder genérico se tudo falhar
        imgElement.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e0e0e0"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%23999" text-anchor="middle" dy=".3em"%3EImagem não disponível%3C/text%3E%3C/svg%3E';
    }
}

// Menu mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
}

// Modal functionality
const modal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Abrir modal
document.querySelectorAll('.project-card__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const projectId = e.target.getAttribute('data-project');
        const project = projectsData[projectId];
        
        if (project) {
            modalTitle.textContent = project.title;
            // Montar galeria (se houver imagens) e conteúdo
            let galleryHTML = '';
            if (project.images && project.images.length > 0) {
                const firstImg = project.images[0];
                galleryHTML = `
                    <div class="modal__gallery" id="modal-gallery">
                        <div class="modal__gallery-main">
                            <button class="modal__gallery-btn modal__gallery-btn--prev" aria-label="Imagem anterior">‹</button>
                            <img src="${firstImg.url}" 
                                 alt="${firstImg.caption}" 
                                 class="modal__gallery-img" 
                                 id="modal-gallery-main-img" 
                                 loading="lazy"
                                 data-fallback="${firstImg.fallback || ''}"
                                 onerror="handleImageError(this)">
                            <button class="modal__gallery-btn modal__gallery-btn--next" aria-label="Próxima imagem">›</button>
                        </div>
                        <div class="modal__gallery-thumbs" id="modal-gallery-thumbs">
                            ${project.images.map((img, i) => `
                                <button class="modal__gallery-thumb" data-index="${i}" aria-label="Ver imagem ${i+1}">
                                    <img src="${img.url}" 
                                         alt="${img.caption}" 
                                         loading="lazy"
                                         data-fallback="${img.fallback || ''}"
                                         onerror="handleImageError(this)">
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            modalBody.innerHTML = `
                <div class="modal__content-grid">
                    ${galleryHTML}
                    <div class="modal__info">
                        <p class="modal__category"><strong>Categoria:</strong> ${project.category}</p>
                        <div class="modal__team">
                            <p><strong>Integrantes:</strong></p>
                            <ul>
                                ${project.team.map(member => `<li>${member}</li>`).join('')}
                            </ul>
                        </div>
                        <p class="modal__pitch"><strong>📍 Local do Pitch:</strong> ${project.pitch}</p>
                    </div>
                    <div class="modal__description">
                        ${project.fullDescription}
                    </div>
                </div>
            `;

            // Inicializar comportamento da galeria
            if (project.images && project.images.length > 0) {
                initModalGallery(project.images);
            }
            
            modal.removeAttribute('hidden');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Foco no botão de fechar para acessibilidade
            modalClose.focus();
        }
    });
});

// Fechar modal
function closeModal() {
    modal.setAttribute('hidden', '');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
        closeModal();
    }
});

// Inicializar galeria dentro do modal
function initModalGallery(images) {
    const mainImg = document.getElementById('modal-gallery-main-img');
    const thumbsContainer = document.getElementById('modal-gallery-thumbs');
    const prevBtn = document.querySelector('.modal__gallery-btn--prev');
    const nextBtn = document.querySelector('.modal__gallery-btn--next');
    if (!mainImg || !thumbsContainer) return;

    let currentIndex = 0;

    function showImage(index) {
        index = (index + images.length) % images.length;
        currentIndex = index;
        mainImg.src = images[currentIndex].url;
        mainImg.alt = images[currentIndex].caption;
        if (images[currentIndex].fallback) {
            mainImg.setAttribute('data-fallback', images[currentIndex].fallback);
        }

        // Atualizar destaque nas miniaturas
        thumbsContainer.querySelectorAll('.modal__gallery-thumb').forEach((btn, i) => {
            btn.classList.toggle('active', i === currentIndex);
        });
    }

    // Event listeners miniaturas
    thumbsContainer.querySelectorAll('.modal__gallery-thumb').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.getAttribute('data-index'), 10);
            showImage(idx);
        });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

    // Suporte teclado (setas)
    document.addEventListener('keydown', function handler(e) {
        if (modal.hasAttribute('hidden')) return;
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });

    // Marcar primeira miniatura como ativa
    showImage(0);
}

// Dropdown no mobile
document.querySelectorAll('.nav__item--dropdown').forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('active');
        }
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});