<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Viabilização de Corte de Árvores - Bombeiros</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../static/style.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    
    <!-- 📌 BIBLIOTECA PARA GERAR PDF -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
</head>
<body>
    <div class="app-container">
        <header class="app-header">
            <div class="header-content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bombeiros_do_Brasil.svg/1200px-Bombeiros_do_Brasil.svg.png" 
                     alt="Bombeiros" class="logo">
                <div class="header-text">
                    <h1>Formulário de Viabilização de Corte de Árvores</h1>
                    <p>Sistema de avaliação técnica para poda/corte</p>
                </div>
            </div>
        </header>

        <main class="form-section">
            <form id="tree-assessment-form" action="/" method="POST">
                <!-- Informações Iniciais -->
                <section class="form-card">
                    <div class="card-header">
                        <i class="fas fa-info-circle"></i>
                        <h2>Informações Iniciais</h2>
                    </div>
                    <div class="card-body grid-2-col">
                        <div class="input-group">
                            <label for="sdo"><i class="fas fa-hashtag"></i> SDO:</label>
                            <input type="text" id="sdo" name="sdo" placeholder="Digite o SDO" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="data-vistoria"><i class="far fa-calendar-alt"></i> Data da Vistoria:</label>
                            <input type="date" id="data-vistoria" name="data-vistoria" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="vistoriador"><i class="fas fa-user"></i> Vistoriador:</label>
                            <input type="text" id="vistoriador" name="vistoriador" placeholder="Nome completo" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="endereco"><i class="fas fa-map-marker-alt"></i> Endereço:</label>
                            <input type="text" id="endereco" name="endereco" placeholder="Digite o endereço" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="bairro"><i class="fas fa-map"></i> Bairro:</label>
                            <input type="text" id="bairro" name="bairro" placeholder="Digite o bairro" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="longitude"><i class="fas fa-globe-americas"></i> Longitude:</label>
                            <input type="text" id="longitude" name="longitude" placeholder="Digite a longitude" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="latitude"><i class="fas fa-globe-americas"></i> Latitude:</label>
                            <input type="text" id="latitude" name="latitude" placeholder="Digite a latitude" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="nome-cientifico"><i class="fas fa-leaf"></i> Nome Científico:</label>
                            <input type="text" id="nome-cientifico" name="nome-cientifico" placeholder="Nome científico" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="nome-popular"><i class="fas fa-tree"></i> Nome Popular:</label>
                            <input type="text" id="nome-popular" name="nome-popular" placeholder="Nome popular" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="altura"><i class="fas fa-ruler-vertical"></i> Altura (m):</label>
                            <input type="number" id="altura" name="altura" placeholder="Altura em metros" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="cap"><i class="fas fa-ruler-combined"></i> CAP (cm):</label>
                            <input type="number" id="cap" name="cap" placeholder="Circunferência" required>
                        </div>
                    </div>
                </section>

                <!-- Avaliação da Copa -->
                <section class="form-card">
                    <div class="card-header">
                        <i class="fas fa-tree"></i>
                        <h2>Avaliação da Copa</h2>
                    </div>
                    <div class="card-body">
                        <!-- Galhos e Rede Elétrica -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-bolt"></i> Galhos Interferindo na Rede:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-rede" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não há galhos em contato com a rede elétrica</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-rede" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco moderado</span>
                                        <p>Galhos em contato com rede de baixa tensão</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-rede" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level high">5 - Risco alto</span>
                                        <p>Galhos em contato com rede média/alta tensão</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Galhos Secos -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-tree"></i> Galhos Secos (podres):</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-secos" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem galhos secos ou podres</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-secos" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Galhos finos secos (Ø menor que 5cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-secos" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Galhos secos (Ø entre 5-10cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-secos" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Galhos secos (Ø entre 10-15cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-secos" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Galhos secos (Ø entre 15-20cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-secos" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Galhos secos (Ø maior que 20cm)</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Galhos Angulados -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-tree" style="transform: rotate(15deg)"></i> Galhos Angulados:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-angulados" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem galhos angulados</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-angulados" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Galhos finos angulados (Ø menor que 5cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-angulados" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Galhos angulados (Ø entre 5-10cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-angulados" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Galhos angulados (Ø entre 10-15cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-angulados" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Galhos angulados (Ø entre 15-20cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-angulados" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Galhos angulados (Ø maior que 20cm)</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Galhos Esguios -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-tree" style="transform: rotate(15deg)" ></i> Galhos Esguios:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-esguios" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem galhos esguios</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-esguios" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Presença galhos esguios &lt; 1m de comprimento</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-esguios" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Galhos esguios com comprimento em torno de 2m</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-esguios" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Galhos esguios com comprimento em torno de 3m</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-esguios" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Galhos esguios com comprimento em torno de 4m</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="galhos-esguios" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Galhos esguios com comprimento &gt; que 4m</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Lesões na Casca -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-first-aid"></i> Lesões na casca de galhos da copa:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-casca" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem lesões nos galhos</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-casca" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Lesões em galhos finos (Ø menor que 10cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-casca" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Lesões em galhos finos (Ø menor que 10cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-casca" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Lesões em galhos médios (Ø em torno de 15cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-casca" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Lesões em galhos médios (Ø em torno de 15cm)</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-casca" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Lesões em galhos grossos (Ø maior que 15cm)</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Fungos -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-shield-alt"></i> Fungos:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="fungos" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem fungos nos galhos</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="fungos" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Existem fungos nos galhos</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Insetos Perfuradores -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-bug"></i> Insetos Perfuradores:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="insetos" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem orifícios de insetos</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="insetos" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Existência de orifícios englobando até 10% dos galhos da copa</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="insetos" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Existência de orifícios englobando até 20% dos galhos da copa</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="insetos" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Existência de orifícios englobando até 30% dos galhos da copa</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="insetos" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Existência de orifícios englobando até 40% dos galhos da copa</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="insetos" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Existência de orifícios englobando cerca de 50% dos galhos da copa ou presente em galhos grossos (Ø &gt; 15 cm)</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Erva-de-Passarinho -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-seedling"></i> Erva-de-Passarinho:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="erva-de-passarinho" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem ervas</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="erva-de-passarinho" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Existência de ervas-de-passarinho englobando até 10% dos galhos da copa</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="erva-de-passarinho" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Existência de ervas-de-passarinho englobando até 20% dos galhos da copa</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="erva-de-passarinho" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Existência de ervas-de-passarinho englobando até 30% dos galhos da copa</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="erva-de-passarinho" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Existência de ervas-de-passarinho englobando até 40% dos galhos da copa</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="erva-de-passarinho" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Existência de ervas-de-passarinho englobando cerca de 50% dos galhos da copa</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Folhagem Rala -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-leaf"></i> Folhagem Rala / Coloração / Quantidade e Tamanho de Folhas:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="folhagem" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem problemas</span>
                                        <p>Não existem problemas evidentes na folhagem</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="folhagem" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Problemas mínimos</span>
                                        <p>Problemas em até 10% dos galhos da copa</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="folhagem" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Problemas moderados</span>
                                        <p>Problemas em até 20% dos galhos da copa</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="folhagem" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Problemas significativos</span>
                                        <p>Problemas em até 30% dos galhos da copa</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="folhagem" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Problemas graves</span>
                                        <p>Problemas em até 40% dos galhos da copa</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="folhagem" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Problemas críticos</span>
                                        <p>Problemas em 50% ou mais dos galhos da copa</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="risk-assessment">
                            <h3><i class="fas fa-scissors"></i> Poda Unilateral e Drástica:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="poda" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem poda problemática</span>
                                        <p>Não existe poda unilateral ou drástica</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="poda" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Poda unilateral</span>
                                        <p>Desequilíbrio nítido na árvore, com retirada de apenas um setor (até 50% dos galhos)</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="poda" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Poda drástica</span>
                                        <p>Mais de 50% dos galhos da copa retirados</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                <!-- Avaliação do Tronco -->
                <section class="form-card">
                    <div class="card-header">
                        <i class="fas fa-tree"></i>
                        <h2>Avaliação do Tronco</h2>
                    </div>
                    <div class="card-body">
                        <!-- Inclinação do tronco / Invasão da pista -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-tree" style="transform: rotate(15deg);"></i> Inclinação do Tronco (invasão da pista):</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="inclinacao" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem inclinação</span>
                                        <p>Tronco sem inclinação para o lado do calçamento</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="inclinacao" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Inclinação leve</span>
                                        <p>Tronco com inclinação &lt; 10°</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="inclinacao" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Inclinação moderada</span>
                                        <p>Tronco com inclinação entre 10° e 20°</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="inclinacao" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Inclinação acentuada</span>
                                        <p>Tronco com inclinação entre 20° e 30°</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="inclinacao" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Inclinação grave</span>
                                        <p>Tronco com inclinação entre 30° e 40°</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="inclinacao" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco de queda</span>
                                        <p>Tronco com inclinação ≥ 50°</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Cavidade no Tronco -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-circle-notch"></i> Cavidade no Tronco:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="cavidade" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem cavidade</span>
                                        <p>Tronco sem inclinação para o lado do calçamento</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="cavidade" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Cavidade pequena</span>
                                        <p>Tronco com inclinação &lt; 10°</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="cavidade" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Cavidade moderada</span>
                                        <p>Tronco com inclinação entre 20° e 30°</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="cavidade" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Cavidade grave</span>
                                        <p>Tronco com inclinação ≥ 50°</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Lesões Tronco -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-first-aid"></i> Lesões na Casca:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-tronco" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem lesões</span>
                                        <p>Não existem lesões na casca</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-tronco" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Lesões mínimas</span>
                                        <p>Lesões em &lt;25% do perímetro do tronco</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-tronco" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Lesões parciais</span>
                                        <p>Lesões em 25%-50% do perímetro</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-tronco" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Lesões extensas</span>
                                        <p>Lesões em 50%-75% do perímetro</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-tronco" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Lesões graves</span>
                                        <p>Lesões em &gt;75% do perímetro</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-tronco" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Lesões críticas</span>
                                        <p>Lesões profundas em &gt;75% do tronco</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Orifícios de Insetos -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-bug"></i> Orifícios de Insetos (Cupim):</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="orificios" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem vestígios</span>
                                        <p>Não existem vestígios de insetos</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="orificios" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Infestação mínima</span>
                                        <p>Orifícios em &lt;10% da área do tronco</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="orificios" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Infestação inicial</span>
                                        <p>Orifícios em 10%-20% da área</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="orificios" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Infestação moderada</span>
                                        <p>Orifícios em 20%-30% da área</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="orificios" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Infestação severa</span>
                                        <p>Orifícios em 30%-40% da área</p>
                                    </div>
                                </label>
                                
                                <label class="radio-card">
                                    <input type="radio" name="orificios" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Infestação crítica</span>
                                        <p>Orifícios em &gt;50% da área ou presença de Cupim</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Fungos Tronco -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-shield-virus"></i> Fungos no Tronco:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="fungos-tronco" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem fungos no tronco</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="fungos-tronco" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Presença de fungos no tronco</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Cancro no Tronco -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-exclamation-triangle"></i> Cancro no Tronco:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="cancro" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem cancros no tronco</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="cancro" value="1">
                            <div class="radio-content">
                                <span class="risk-level medium">1 - Risco baixo</span>
                                <p>Cancro com área de até 200cm²</p>
                            </div>
                                </label>
                            <label class="radio-card">
                                <input type="radio" name="cancro" value="2">
                            <div class="radio-content">
                                <span class="risk-level medium">2 - Risco moderado</span>
                                <p>Cancro com área entre 200cm² e 1000cm²</p>
                            </div>
                            </label>
                            <label class="radio-card">
                                <input type="radio" name="cancro" value="3">
                            <div class="radio-content">
                            <span class="risk-level high">3 - Risco alto</span>
                            <p>Cancro com área entre 1000cm² e 5000cm²</p>
                            </div>
                            </label>
                            <label class="radio-card">
                                <input type="radio" name="cancro" value="4">
                                <div class="radio-content">
                                    <span class="risk-level high">4 - Risco muito alto</span>
                                    <p>Cancro com área entre 5000cm² e 10000cm²</p>
                                </div>
                            </label>
                            <label class="radio-card">
                                <input type="radio" name="cancro" value="5">
                                <div class="radio-content">
                                    <span class="risk-level danger">5 - Risco extremo</span>
                                    <p>Cancro com área acima de 10000cm² ou 50% do tronco atingido</p>
                                </div>
                            </label>
                            </div>
                        </div>
                        <!-- Injúrias Mecânicas -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-first-aid"></i> Injúrias Mecânicas:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="injuria" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem injúrias mecânicas</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Desenhos ou escritos no tronco</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Ervas-de-passarinho em ~20% dos galhos</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Ervas-de-passarinho em ~30% dos galhos</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Ervas-de-passarinho em ~40% dos galhos</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Ervas-de-passarinho em 50% ou mais dos galhos</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                <!-- Avaliação do Tronco -->
                <section class="form-card">
                    <div class="card-header">
                        <i class="fas fa-tree"></i>
                        <h2>Avaliação do Tronco</h2>
                    </div>
                    <div class="card-body">
                        <!-- Brotação Epicórmica -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-seedling"></i> Brotação Epicórmica:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="brotacao" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existe brotação epicórmica</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="brotacao" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco moderado</span>
                                        <p>Presença de brotação epicórmica</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Lesões na Base do Tronco -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-first-aid"></i> Lesões na Base do Tronco:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-base" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem lesões na base</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-base" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Lesões em &lt;25% do perímetro da base</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-base" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Lesões entre 25%-50% do perímetro da base</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-base" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Lesões entre 50%-75% do perímetro da base</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-base" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Lesões em &gt;75% do perímetro da base</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="lesoes-base" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Lesões profundas em &gt;75% do perímetro da base</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Cavidades na Base do Tronco -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-circle-notch"></i> Cavidades na Base do Tronco:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="cavidade-base" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem cavidades na base</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="cavidade-base" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco moderado</span>
                                        <p>Cavidade comprometendo &lt;50% da área transversal</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="cavidade-base" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Cavidade comprometendo 50%-70% da área transversal</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="cavidade-base" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Cavidade comprometendo &gt;70% da área transversal</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Fungos na Base do Tronco -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-shield-virus"></i> Fungos na Base do Tronco:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="fungos-base" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem fungos na base do tronco</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="fungos-base" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Presença de fungos na base do tronco</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Raízes Adventícias Aparentes -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-tree"></i> Raízes Adventícias Aparentes:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="raizes-adventicias" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem raízes adventícias</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="raizes-adventicias" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Poucas raízes em uma região da base</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="raizes-adventicias" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Poucas raízes em todo o perímetro da base</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="raizes-adventicias" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Muitas raízes em uma região da base</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="raizes-adventicias" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Muitas raízes em até 50% do perímetro</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="raizes-adventicias" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Muitas raízes em todo o perímetro da base</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Injúrias Mecânicas -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-first-aid"></i> Injúrias Mecânicas:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="injuria-mecanica" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Não existem injúrias mecânicas</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria-mecanica" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco baixo</span>
                                        <p>Desenhos ou escritos no tronco</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria-mecanica" value="2">
                                    <div class="radio-content">
                                        <span class="risk-level medium">2 - Risco moderado</span>
                                        <p>Ervas-de-passarinho em ~20% dos galhos</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria-mecanica" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Ervas-de-passarinho em ~30% dos galhos</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria-mecanica" value="4">
                                    <div class="radio-content">
                                        <span class="risk-level high">4 - Risco muito alto</span>
                                        <p>Ervas-de-passarinho em ~40% dos galhos</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="injuria-mecanica" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Ervas-de-passarinho em ≥50% dos galhos</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Espaço Permeável -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-ruler-combined"></i> Espaço Permeável:</h3>
                            <div class="radio-options">
                                <label class="radio-card">
                                    <input type="radio" name="espaco-permeavel" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level safe">1 - Condição ideal</span>
                                        <p>Área permeável >1,5m²</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="espaco-permeavel" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level medium">3 - Condição regular</span>
                                        <p>Área permeável entre 1-1,5m²</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="espaco-permeavel" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Condição crítica</span>
                                        <p>Sem espaço permeável (área impermeável)</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Ausência de Neilóide -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-tree"></i> Ausência de Neilóide:</h3>
                            <div class="radio-options" required>
                                <label class="radio-card">
                                    <input type="radio" name="neiloide" value="0" required>
                                    <div class="radio-content">
                                        <span class="risk-level safe">0 - Sem risco</span>
                                        <p>Nenhuma evidência de raízes cortadas</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="neiloide" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level medium">1 - Risco moderado</span>
                                        <p>Pelo menos 2 raízes cortadas</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="neiloide" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level high">3 - Risco alto</span>
                                        <p>Mais de 2 raízes cortadas em uma região</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="neiloide" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco extremo</span>
                                        <p>Mais de 2 raízes cortadas em todo o perímetro</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                <!-- Avaliação do Índice de Risco de Queda -->
                <section class="form-card">
                    <div class="card-header">
                        <i class="fas fa-tree"></i>
                        <h2>Avaliação do Índice de Risco de Queda</h2>
                    </div>
                    <div class="card-body"> 
                        <!-- Índice de Risco para Rede Elétrica -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-bolt"></i> Índice de Risco para Rede Elétrica:</h3>
                            <div class="radio-options">
                                <label class="radio-card">
                                    <input type="radio" name="rede-eletrica" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level safe">1 - Sem Risco</span>
                                        <p>Árvores em locais sem rede elétrica</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="rede-eletrica" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level medium">3 - Risco Moderado</span>
                                        <p>Rede de baixa tensão próxima</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="rede-eletrica" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco Alto</span>
                                        <p>Rede de média tensão próxima</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <!-- Índice de Risco de Efeito Colateral -->
                        <div class="risk-assessment">
                            <h3><i class="fas fa-tree" style="transform: rotate(45deg)"></i> Índice de Risco de Efeito Colateral:</h3>
                            <div class="radio-options">
                                <label class="radio-card">
                                    <input type="radio" name="efeito-colateral" value="1">
                                    <div class="radio-content">
                                        <span class="risk-level safe">1 - Risco Baixo</span>
                                        <p>Área sem casas ou construções</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="efeito-colateral" value="3">
                                    <div class="radio-content">
                                        <span class="risk-level medium">3 - Risco Moderado</span>
                                        <p>Rua residencial</p>
                                    </div>
                                </label>
                                <label class="radio-card">
                                    <input type="radio" name="efeito-colateral" value="5">
                                    <div class="radio-content">
                                        <span class="risk-level danger">5 - Risco Alto</span>
                                        <p>Rua movimentada/comercial</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Totalizador de Risco -->
                <section class="risk-total">
                   <div class="total-header">
                       <i class="fas fa-calculator"></i>
                       <h3>Total de Pontos de Risco</h3>
                   </div>
                   <div class="total-body">
                       <div class="total-score total-safe" id="total-risk">0</div>
                       <p class="total-description">Soma de todos os índices de risco avaliados</p>
                       <div class="risk-levels-info">
                           <div class="risk-level-item"><span class="safe">3-6</span> - Risco de Menor Importância</div>
                           <div class="risk-level-item"><span class="medium">7-11</span> - Risco de Média Importância</div>
                           <div class="risk-level-item"><span class="high">12-15+</span> - Risco de Alta Importância </div>
                       </div>
                   </div>
                </section>
                
                <!-- 📌 BOTÕES DE AÇÃO (SUBSTITUA SEUS BOTÕES EXISTENTES POR ESTES) -->
                <div class="form-actions">
                    <button type="button" id="btn-preview" class="submit-btn" style="background-color: #17A2B8;">
                        <i class="fas fa-eye"></i> Visualizar Relatório
                    </button>
                    <button type="button" id="btn-pdf" class="submit-btn" style="background-color: #DC3545;">
                        <i class="fas fa-file-pdf"></i> Salvar PDF
                    </button>
                    <button type="submit" class="submit-btn">
                        <i class="fas fa-paper-plane"></i> Enviar Formulário
                    </button>
                </div>
            </form>
        </main>
    </div>

    <script src="../static/script.js"></script>
</body>
</html>
