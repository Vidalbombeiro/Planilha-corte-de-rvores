<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>CBMPA - Viabilização de Corte de Árvores | Avaliação Técnica de Risco</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: linear-gradient(145deg, #1e2a3a 0%, #0f1a24 100%);
            min-height: 100vh;
            padding: 24px 20px;
        }

        .app-container {
            max-width: 1400px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 32px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
            overflow: hidden;
            transition: all 0.2s;
        }

        .app-header {
            background: #b22234;
            background: linear-gradient(95deg, #b22234 0%, #8b1a2c 100%);
            color: white;
            padding: 24px 32px;
            border-bottom: 3px solid #ffcd00;
        }

        .header-content {
            display: flex;
            align-items: center;
            gap: 24px;
            flex-wrap: wrap;
        }

        .logo {
            height: 85px;
            width: auto;
            object-fit: contain;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        .header-text h1 {
            font-size: 1.9rem;
            font-weight: 700;
            letter-spacing: -0.3px;
            margin-bottom: 6px;
        }

        .header-text p {
            opacity: 0.92;
            font-size: 1rem;
            font-weight: 500;
        }

        .form-section {
            padding: 32px 36px;
        }

        .form-card {
            background: #ffffff;
            border-radius: 24px;
            margin-bottom: 32px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
            border: 1px solid #eef2f6;
            transition: all 0.2s;
            overflow: hidden;
        }

        .card-header {
            background: #1e2f3f;
            color: white;
            padding: 16px 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 2px solid #ffcd00;
        }

        .card-header i {
            font-size: 1.6rem;
        }

        .card-header h2 {
            font-size: 1.45rem;
            font-weight: 600;
        }

        .card-body {
            padding: 28px 26px;
        }

        .grid-2-col {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
        }

        .input-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .input-group label {
            font-weight: 700;
            color: #1e2f3f;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
        }

        .input-group input, .input-group select {
            padding: 12px 14px;
            border: 2px solid #e2e8f0;
            border-radius: 14px;
            font-size: 0.95rem;
            transition: all 0.2s;
            background: #fefefe;
        }

        .input-group input:focus, .input-group select:focus {
            outline: none;
            border-color: #b22234;
            box-shadow: 0 0 0 3px rgba(178,34,52,0.2);
        }

        .risk-assessment {
            margin-bottom: 32px;
            border-bottom: 1px solid #edf2f7;
            padding-bottom: 20px;
        }

        .risk-assessment:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .risk-assessment h3 {
            margin-bottom: 18px;
            color: #0f2b3d;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.2rem;
        }

        .radio-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 14px;
        }

        .radio-card {
            position: relative;
            cursor: pointer;
        }

        .radio-card input {
            position: absolute;
            opacity: 0;
        }

        .radio-content {
            padding: 12px 16px;
            border: 2px solid #e2edf2;
            border-radius: 20px;
            transition: all 0.2s ease;
            background: white;
            cursor: pointer;
        }

        .radio-card input:checked + .radio-content {
            border-color: #b22234;
            background: #fff6f5;
            box-shadow: 0 5px 12px rgba(178,34,52,0.15);
            transform: scale(1.01);
        }

        .radio-content .risk-level {
            font-weight: 800;
            display: inline-block;
            padding: 4px 12px;
            border-radius: 40px;
            font-size: 0.75rem;
            margin-bottom: 8px;
            letter-spacing: 0.3px;
        }

        .risk-level.safe { background: #d1fae5; color: #065f46; }
        .risk-level.medium { background: #fed7aa; color: #9b4d00; }
        .risk-level.high { background: #ffe2b5; color: #b45309; }
        .risk-level.danger { background: #ffe4e2; color: #b91c1c; }

        .radio-content p {
            font-size: 0.8rem;
            color: #2d4a6e;
            margin-top: 6px;
            line-height: 1.3;
        }

        .risk-total {
            background: linear-gradient(115deg, #11212e 0%, #1b3a4b 100%);
            border-radius: 28px;
            padding: 28px 24px;
            margin: 28px 0 20px;
            color: white;
            box-shadow: 0 12px 20px -8px rgba(0,0,0,0.2);
        }

        .total-header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 20px;
            font-size: 1.2rem;
        }

        .total-score {
            font-size: 4.2rem;
            font-weight: 800;
            text-align: center;
            background: rgba(255,255,255,0.12);
            border-radius: 64px;
            padding: 20px 20px;
            margin: 15px 0;
            font-family: monospace;
            letter-spacing: 2px;
            backdrop-filter: blur(4px);
        }

        .total-description {
            text-align: center;
            margin: 12px 0 0px;
            font-weight: 500;
        }

        .risk-levels-info {
            display: flex;
            justify-content: center;
            gap: 28px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .risk-level-item {
            background: rgba(255,255,255,0.1);
            padding: 8px 18px;
            border-radius: 40px;
            font-size: 0.85rem;
            font-weight: 500;
        }

        .risk-level-item span {
            font-weight: 800;
        }

        .form-actions {
            display: flex;
            justify-content: center;
            margin-top: 32px;
            margin-bottom: 16px;
        }

        .submit-btn {
            background: #b22234;
            color: white;
            border: none;
            padding: 16px 44px;
            font-size: 1.2rem;
            border-radius: 60px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            transition: 0.2s;
            font-weight: 700;
            box-shadow: 0 6px 14px rgba(0,0,0,0.2);
        }

        .submit-btn:hover {
            background: #8b1a2c;
            transform: translateY(-2px);
            box-shadow: 0 12px 22px rgba(0,0,0,0.25);
        }

        @media (max-width: 760px) {
            .form-section {
                padding: 20px;
            }
            .card-body {
                padding: 18px;
            }
            .radio-options {
                grid-template-columns: 1fr;
            }
            .header-text h1 {
                font-size: 1.3rem;
            }
            .total-score {
                font-size: 2.8rem;
            }
            .logo {
                height: 60px;
            }
        }

        .toast-message {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: #1e2f3f;
            color: white;
            padding: 14px 28px;
            border-radius: 60px;
            font-weight: 600;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            backdrop-filter: blur(8px);
            transition: opacity 0.3s;
        }
    </style>
</head>
<body>
    <div class="app-container">
        <header class="app-header">
            <div class="header-content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Bras%C3%A3o_CBM_SP.PNG/250px-Bras%C3%A3o_CBM_SP.PNG" 
                     alt="Brasão do Corpo de Bombeiros de São Paulo" class="logo">
                <div class="header-text">
                    <h1>Formulário de Viabilização de Corte de Árvores</h1>
                    <p>Laudo técnico operacional - Análise de risco e segurança | CBMSP</p>
                </div>
            </div>
        </header>

        <main class="form-section">
            <form id="tree-assessment-form" action="#" method="POST">
                <!-- INFORMAÇÕES INICIAIS -->
                <section class="form-card">
                    <div class="card-header">
                        <i class="fas fa-clipboard-list"></i>
                        <h2>Dados da Vistoria</h2>
                    </div>
                    <div class="card-body grid-2-col">
                        <div class="input-group"><label><i class="fas fa-hashtag"></i> SDO / Protocolo:</label><input type="text" id="sdo" name="sdo" placeholder="Ex: 2025/00123" required></div>
                        <div class="input-group"><label><i class="far fa-calendar-alt"></i> Data da Vistoria:</label><input type="date" id="data-vistoria" name="data-vistoria" required></div>
                        <div class="input-group"><label><i class="fas fa-user-hard-hat"></i> Vistoriador (Responsável):</label><input type="text" id="vistoriador" name="vistoriador" placeholder="Nome Completo / Matrícula" required></div>
                        <div class="input-group"><label><i class="fas fa-map-marker-alt"></i> Endereço completo:</label><input type="text" id="endereco" name="endereco" placeholder="Rua, número, referência" required></div>
                        <div class="input-group"><label><i class="fas fa-map"></i> Bairro:</label><input type="text" id="bairro" name="bairro" placeholder="Bairro" required></div>
                        <div class="input-group"><label><i class="fas fa-globe-americas"></i> Longitude:</label><input type="text" id="longitude" name="longitude" placeholder="-46.6333"></div>
                        <div class="input-group"><label><i class="fas fa-globe-americas"></i> Latitude:</label><input type="text" id="latitude" name="latitude" placeholder="-23.5505"></div>
                        <div class="input-group"><label><i class="fas fa-leaf"></i> Nome Científico:</label><input type="text" id="nome-cientifico" name="nome-cientifico" placeholder="Ex: Ficus benjamina" required></div>
                        <div class="input-group"><label><i class="fas fa-tree"></i> Nome Popular:</label><input type="text" id="nome-popular" name="nome-popular" placeholder="Ex: Figueira" required></div>
                        <div class="input-group"><label><i class="fas fa-ruler-vertical"></i> Altura (m):</label><input type="number" step="0.1" id="altura" name="altura" placeholder="metros" required></div>
                        <div class="input-group"><label><i class="fas fa-ruler-combined"></i> CAP (cm) - Circunferência:</label><input type="number" step="0.1" id="cap" name="cap" placeholder="cm a 1,30m do solo" required></div>
                    </div>
                </section>

                <!-- AVALIAÇÃO DA COPA (todas as variáveis do risco) -->
                <section class="form-card">
                    <div class="card-header"><i class="fas fa-tree"></i><h2>Diagnóstico da Copa - Fatores de Risco</h2></div>
                    <div class="card-body">
                        <div class="risk-assessment"><h3><i class="fas fa-bolt"></i> Galhos interferindo na rede elétrica</h3><div class="radio-options" data-category="galhos-rede">
                            <label class="radio-card"><input type="radio" name="galhos-rede" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Sem risco</span><p>Não há contato com rede elétrica</p></div></label>
                            <label class="radio-card"><input type="radio" name="galhos-rede" value="1"><div class="radio-content"><span class="risk-level medium">1 - Risco moderado</span><p>Galhos em baixa tensão</p></div></label>
                            <label class="radio-card"><input type="radio" name="galhos-rede" value="5"><div class="radio-content"><span class="risk-level high">5 - Risco alto</span><p>Contato com rede média/alta tensão</p></div></label>
                        </div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-skull-crosswalk"></i> Galhos secos/podres</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="galhos-secos" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Sem risco</span><p>Ausentes</p></div></label><label class="radio-card"><input type="radio" name="galhos-secos" value="1"><div class="radio-content"><span class="risk-level medium">1 - Baixo</span><p>Ø &lt;5cm</p></div></label><label class="radio-card"><input type="radio" name="galhos-secos" value="2"><div class="radio-content"><span class="risk-level medium">2 - Moderado</span><p>Ø 5-10cm</p></div></label><label class="radio-card"><input type="radio" name="galhos-secos" value="3"><div class="radio-content"><span class="risk-level high">3 - Alto</span><p>Ø 10-15cm</p></div></label><label class="radio-card"><input type="radio" name="galhos-secos" value="4"><div class="radio-content"><span class="risk-level high">4 - Muito alto</span><p>Ø 15-20cm</p></div></label><label class="radio-card"><input type="radio" name="galhos-secos" value="5"><div class="radio-content"><span class="risk-level danger">5 - Extremo</span><p>Ø &gt;20cm</p></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-angle-double-right"></i> Galhos angulados (fenda aberta)</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="galhos-angulados" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Sem risco</span></div></label><label class="radio-card"><input type="radio" name="galhos-angulados" value="1"><div class="radio-content"><span class="risk-level medium">1 - Baixo (&lt;5cm)</span></div></label><label class="radio-card"><input type="radio" name="galhos-angulados" value="2"><div class="radio-content"><span class="risk-level medium">2 - Moderado (5-10cm)</span></div></label><label class="radio-card"><input type="radio" name="galhos-angulados" value="3"><div class="radio-content"><span class="risk-level high">3 - Alto (10-15cm)</span></div></label><label class="radio-card"><input type="radio" name="galhos-angulados" value="4"><div class="radio-content"><span class="risk-level high">4 - Muito alto (15-20cm)</span></div></label><label class="radio-card"><input type="radio" name="galhos-angulados" value="5"><div class="radio-content"><span class="risk-level danger">5 - Extremo &gt;20cm</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-feather-alt"></i> Galhos esguios (desproporção)</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="galhos-esguios" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Sem risco</span></div></label><label class="radio-card"><input type="radio" name="galhos-esguios" value="1"><div class="radio-content"><span class="risk-level medium">1 - &lt;1m compr.</span></div></label><label class="radio-card"><input type="radio" name="galhos-esguios" value="2"><div class="radio-content"><span class="risk-level medium">2 - ~2m</span></div></label><label class="radio-card"><input type="radio" name="galhos-esguios" value="3"><div class="radio-content"><span class="risk-level high">3 - ~3m</span></div></label><label class="radio-card"><input type="radio" name="galhos-esguios" value="4"><div class="radio-content"><span class="risk-level high">4 - ~4m</span></div></label><label class="radio-card"><input type="radio" name="galhos-esguios" value="5"><div class="radio-content"><span class="risk-level danger">5 - &gt;4m</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-burn"></i> Lesões na casca dos galhos</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="lesoes-casca" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Nenhuma lesão</span></div></label><label class="radio-card"><input type="radio" name="lesoes-casca" value="1"><div class="radio-content"><span class="risk-level medium">1 - Baixo (Ø&lt;10cm)</span></div></label><label class="radio-card"><input type="radio" name="lesoes-casca" value="2"><div class="radio-content"><span class="risk-level medium">2 - Moderado (Ø&lt;10cm prof)</span></div></label><label class="radio-card"><input type="radio" name="lesoes-casca" value="3"><div class="radio-content"><span class="risk-level high">3 - Alto (Ø~15cm)</span></div></label><label class="radio-card"><input type="radio" name="lesoes-casca" value="4"><div class="radio-content"><span class="risk-level high">4 - Muito alto (Ø~15cm)</span></div></label><label class="radio-card"><input type="radio" name="lesoes-casca" value="5"><div class="radio-content"><span class="risk-level danger">5 - Extremo (&gt;15cm)</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-fill-drip"></i> Fungos / Basidiocarpos</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="fungos" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Ausente</span></div></label><label class="radio-card"><input type="radio" name="fungos" value="5"><div class="radio-content"><span class="risk-level danger">5 - Presença</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-bug"></i> Insetos perfuradores (brocas/cupins)</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="insetos" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Sem orifícios</span></div></label><label class="radio-card"><input type="radio" name="insetos" value="1"><div class="radio-content"><span class="risk-level medium">1 - até 10% galhos</span></div></label><label class="radio-card"><input type="radio" name="insetos" value="2"><div class="radio-content"><span class="risk-level medium">2 - até 20%</span></div></label><label class="radio-card"><input type="radio" name="insetos" value="3"><div class="radio-content"><span class="risk-level high">3 - até 30%</span></div></label><label class="radio-card"><input type="radio" name="insetos" value="4"><div class="radio-content"><span class="risk-level high">4 - até 40%</span></div></label><label class="radio-card"><input type="radio" name="insetos" value="5"><div class="radio-content"><span class="risk-level danger">5 - 50% ou galhos grossos</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-seedling"></i> Erva-de-passarinho (parasita)</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="erva-de-passarinho" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Sem</span></div></label><label class="radio-card"><input type="radio" name="erva-de-passarinho" value="1"><div class="radio-content"><span class="risk-level medium">1 - até 10% copa</span></div></label><label class="radio-card"><input type="radio" name="erva-de-passarinho" value="2"><div class="radio-content"><span class="risk-level medium">2 - até 20%</span></div></label><label class="radio-card"><input type="radio" name="erva-de-passarinho" value="3"><div class="radio-content"><span class="risk-level high">3 - até 30%</span></div></label><label class="radio-card"><input type="radio" name="erva-de-passarinho" value="4"><div class="radio-content"><span class="risk-level high">4 - até 40%</span></div></label><label class="radio-card"><input type="radio" name="erva-de-passarinho" value="5"><div class="radio-content"><span class="risk-level danger">5 - ~50% ou mais</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-leaf"></i> Folhagem rala / descoloração</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="folhagem" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Normal</span></div></label><label class="radio-card"><input type="radio" name="folhagem" value="1"><div class="radio-content"><span class="risk-level medium">1 - leve (≤10%)</span></div></label><label class="radio-card"><input type="radio" name="folhagem" value="2"><div class="radio-content"><span class="risk-level medium">2 - moderado (≤20%)</span></div></label><label class="radio-card"><input type="radio" name="folhagem" value="3"><div class="radio-content"><span class="risk-level high">3 - significativo (≤30%)</span></div></label><label class="radio-card"><input type="radio" name="folhagem" value="4"><div class="radio-content"><span class="risk-level high">4 - grave (≤40%)</span></div></label><label class="radio-card"><input type="radio" name="folhagem" value="5"><div class="radio-content"><span class="risk-level danger">5 - crítico (≥50%)</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-cut"></i> Poda unilateral ou drástica</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="poda" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Nenhuma poda agressiva</span></div></label><label class="radio-card"><input type="radio" name="poda" value="4"><div class="radio-content"><span class="risk-level high">4 - Poda unilateral</span></div></label><label class="radio-card"><input type="radio" name="poda" value="5"><div class="radio-content"><span class="risk-level danger">5 - Poda drástica (>50%)</span></div></label></div></div>
                    </div>
                </section>

                <!-- TRONCO E BASE (resumido porém crítico) -->
                <section class="form-card">
                    <div class="card-header"><i class="fas fa-tree"></i><h2>Análise do Tronco e Sistema Radicular</h2></div>
                    <div class="card-body">
                        <div class="risk-assessment"><h3><i class="fas fa-tilt"></i> Inclinação do tronco</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="inclinacao" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Vertical</span></div></label><label class="radio-card"><input type="radio" name="inclinacao" value="1"><div class="radio-content"><span class="risk-level medium">1 - &lt;10°</span></div></label><label class="radio-card"><input type="radio" name="inclinacao" value="3"><div class="radio-content"><span class="risk-level high">3 - 20-30°</span></div></label><label class="radio-card"><input type="radio" name="inclinacao" value="5"><div class="radio-content"><span class="risk-level danger">5 - ≥50° (queda iminente)</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-circle-notch"></i> Cavidade / oco no tronco</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="cavidade" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Ausente</span></div></label><label class="radio-card"><input type="radio" name="cavidade" value="1"><div class="radio-content"><span class="risk-level medium">1 - &lt;25% perímetro</span></div></label><label class="radio-card"><input type="radio" name="cavidade" value="3"><div class="radio-content"><span class="risk-level high">3 - 50-70%</span></div></label><label class="radio-card"><input type="radio" name="cavidade" value="5"><div class="radio-content"><span class="risk-level danger">5 - &gt;70% área</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-drumstick-bite"></i> Orifícios de cupins / brocas</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="orificios" value="0" required><div class="radio-content"><span class="risk-level safe">0 - Sem vestígios</span></div></label><label class="radio-card"><input type="radio" name="orificios" value="2"><div class="radio-content"><span class="risk-level medium">2 - Infestação inicial</span></div></label><label class="radio-card"><input type="radio" name="orificios" value="5"><div class="radio-content"><span class="risk-level danger">5 - Crítico / cupins vivos</span></div></label></div></div>
                    </div>
                </section>

                <!-- ÍNDICE DE RISCO DE QUEDA E IMPACTO URBANO -->
                <section class="form-card">
                    <div class="card-header"><i class="fas fa-chart-line"></i><h2>Avaliação de Risco de Queda e Efeito Colateral</h2></div>
                    <div class="card-body">
                        <div class="risk-assessment"><h3><i class="fas fa-plug"></i> Proximidade com rede elétrica perigosa</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="rede-eletrica" value="1" required><div class="radio-content"><span class="risk-level safe">1 - Baixo (sem rede)</span></div></label><label class="radio-card"><input type="radio" name="rede-eletrica" value="3"><div class="radio-content"><span class="risk-level medium">3 - Moderado (BT)</span></div></label><label class="radio-card"><input type="radio" name="rede-eletrica" value="5"><div class="radio-content"><span class="risk-level danger">5 - Alto (MT/AT)</span></div></label></div></div>
                        <div class="risk-assessment"><h3><i class="fas fa-building"></i> Risco de efeito colateral (alvos)</h3><div class="radio-options"><label class="radio-card"><input type="radio" name="efeito-colateral" value="1" required><div class="radio-content"><span class="risk-level safe">1 - Baixo: área livre</span></div></label><label class="radio-card"><input type="radio" name="efeito-colateral" value="3"><div class="radio-content"><span class="risk-level medium">3 - Moderado: rua residencial</span></div></label><label class="radio-card"><input type="radio" name="efeito-colateral" value="5"><div class="radio-content"><span class="risk-level danger">5 - Alto: área comercial/movimento</span></div></label></div></div>
                    </div>
                </section>

                <!-- PLACAR DE RISCO TOTAL -->
                <section class="risk-total">
                    <div class="total-header"><i class="fas fa-chart-simple"></i><h3>Pontuação de Risco Consolidada</h3></div>
                    <div class="total-body">
                        <div class="total-score" id="total-risk">0</div>
                        <p class="total-description">Somatório dos pesos conforme critérios técnicos (Copa + Tronco + Urbano)</p>
                        <div class="risk-levels-info">
                            <div class="risk-level-item"><span style="color:#b9f6ca;">● 0-6 pontos</span> — Risco menor / viável mediante monitoramento</div>
                            <div class="risk-level-item"><span style="color:#ffe5b4;">● 7-11 pontos</span> — Risco médio / necessita poda corretiva ou corte se agravantes</div>
                            <div class="risk-level-item"><span style="color:#ffb5a7;">● ≥12 pontos</span> — Risco alto / recomenda-se corte imediato ou intervenção urgente</div>
                        </div>
                    </div>
                </section>

                <div class="form-actions">
                    <button type="submit" class="submit-btn"><i class="fas fa-file-signature"></i> Emitir Parecer Técnico</button>
                </div>
            </form>
        </main>
    </div>

    <script>
        function calculateTotalRisk() {
            const form = document.getElementById('tree-assessment-form');
            const checkedRadios = form.querySelectorAll('input[type="radio"]:checked');
            let total = 0;
            checkedRadios.forEach(radio => {
                let val = parseInt(radio.value);
                if (!isNaN(val)) total += val;
            });
            const totalEl = document.getElementById('total-risk');
            if (totalEl) {
                totalEl.innerText = total;
                if (total <= 6) totalEl.style.background = 'rgba(72,187,120,0.25)';
                else if (total <= 11) totalEl.style.background = 'rgba(237,137,54,0.3)';
                else totalEl.style.background = 'rgba(220,53,69,0.4)';
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('tree-assessment-form');
            const allRadios = form.querySelectorAll('input[type="radio"]');
            allRadios.forEach(radio => radio.addEventListener('change', calculateTotalRisk));
            
            const dateField = document.getElementById('data-vistoria');
            if (dateField) {
                const today = new Date().toISOString().split('T')[0];
                dateField.value = today;
            }
            
            const requiredGroups = ['galhos-rede', 'galhos-secos', 'galhos-angulados', 'galhos-esguios', 'lesoes-casca', 'fungos', 'insetos', 'erva-de-passarinho', 'folhagem', 'poda', 'inclinacao', 'cavidade', 'orificios', 'rede-eletrica', 'efeito-colateral'];
            requiredGroups.forEach(group => {
                const radios = document.querySelectorAll(`input[name="${group}"]`);
                if (radios.length && !Array.from(radios).some(r => r.checked)) {
                    radios[0].checked = true;
                }
            });
            
            calculateTotalRisk();
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const sdo = document.getElementById('sdo').value.trim();
                const endereco = document.getElementById('endereco').value.trim();
                if (!sdo || !endereco) {
                    alert('⚠️ Preencha SDO e Endereço antes de enviar.');
                    return;
                }
                const totalScore = document.getElementById('total-risk').innerText;
                let recomendacao = '';
                if (parseInt(totalScore) <= 6) recomendacao = 'VIABILIDADE RESTRITA A MONITORAMENTO, PODA SELETIVA.';
                else if (parseInt(totalScore) <= 11) recomendacao = 'RISCO MÉDIO: NECESSÁRIA INTERVENÇÃO COM PODA CORRETIVA OU CORTE ANÁLISE TÉCNICA.';
                else recomendacao = 'RISCO ALTO: RECOMENDADO CORTE IMEDIATO / INTERDIÇÃO PARCIAL.';
                
                const msgDiv = document.createElement('div');
                msgDiv.className = 'toast-message';
                msgDiv.innerHTML = `<i class="fas fa-check-circle"></i> Formulário registrado! Pontuação: ${totalScore} pts. ${recomendacao}`;
                document.body.appendChild(msgDiv);
                setTimeout(() => { msgDiv.style.opacity = '0'; setTimeout(() => msgDiv.remove(), 800); }, 4000);
                
                console.log('Dados enviados com sucesso', new FormData(form));
            });
        });
    </script>
</body>
</html>
