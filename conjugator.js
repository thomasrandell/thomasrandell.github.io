
$(document).ready(function () {

//BEGIN regular verb dictionaries
// 1013 verbs ordered by frequency from Davies and Preto-Bay (2008) NOTE: 7 alternate spellings listed as separate array elements bring array length to 1020
var allVerbsByFrequency = ["ser", "ter", "estar", "fazer", "poder", "haver", "ir", "dizer", "dar", "ver", "ficar", "dever", "passar", "saber", "querer", "vir", "chegar", "levar", "deixar", "começar", "falar", "encontrar", "partir", "conseguir", "chamar", "pensar", "conhecer", "existir", "tornar", "parecer", "entrar", "viver", "pôr", "sair", "acabar", "continuar", "voltar", "tomar", "trabalhar", "apresentar", "criar", "considerar", "receber", "sentir", "acontecer", "tratar", "perder", "achar", "escrever", "usar", "contar", "mostrar", "seguir", "procurar", "tentar", "trazer", "aparecer", "manter", "colocar", "pedir", "morrer", "entender", "ganhar", "esperar", "definir", "abrir", "servir", "pagar", "permitir", "cair", "acreditar", "precisar", "ler", "nascer", "descobrir", "ouvir", "ligar", "mudar", "olhar", "resolver", "estudar", "formar", "surgir", "lembrar", "representar", "explicar", "perceber", "ajudar", "defender", "ocorrer", "aceitar", "realizar", "tirar", "lançar", "correr", "crescer", "aumentar", "andar", "acompanhar", "escolher", "responder", "pretender", "gostar", "vender", "matar", "sofrer", "decidir", "compreender", "produzir", "fechar", "transformar", "comprar", "referir", "levantar", "mandar", "reconhecer", "dirigir", "tocar", "construir", "valer", "afirmar", "terminar", "atingir", "interessar", "discutir", "significar", "buscar", "julgar", "evitar", "casar", "participar", "envolver", "marcar", "cumprir", "morar", "exigir", "provocar", "garantir", "jogar", "assumir", "oferecer", "preparar", "constituir", "aprender", "comer", "fugir", "obrigar", "publicar", "ocupar", "bater", "aproveitar", "depender", "parar", "assistir", "cortar", "pertencer", "obter", "apoiar", "funcionar", "estabelecer", "subir", "desenvolver", "prestar", "dividir", "reunir", "supor", "determinar", "verificar", "preferir", "entregar", "revelar", "desejar", "repetir", "imaginar", "avançar", "observar", "reduzir", "propor", "resultar", "admitir", "indicar", "juntar", "impedir", "possuir", "faltar", "iniciar", "dedicar", "apontar", "abandonar", "notar", "concluir", "retirar", "vencer", "incluir", "prever", "viajar", "especializar", "esquecer", "adquirir", "cantar", "melhorar", "atender", "pesar", "aplicar", "conduzir", "preocupar", "afastar", "respeitar", "cuidar", "completar", "causar", "aproximar", "pegar", "fixar", "importar", "caber", "concordar", "impor", "substituir", "lutar", "compor", "costumar", "cobrir", "refletir", "anunciar", "dispor", "virar", "exercer", "durar", "perguntar", "utilizar", "citar", "alcançar", "desaparecer", "ensinar", "enfrentar", "convidar", "separar", "atravessar", "salvar", "atrair", "limitar", "permanecer", "centrar", "estender", "visitar", "bastar", "crer", "acrescentar", "eleger", "baixar", "comparar", "recusar", "demonstrar", "regressar", "dominar", "acusar", "negar", "identificar", "transmitir", "corresponder", "guardar", "instalar", "gerar", "praticar", "diminuir", "montar", "alterar", "descer", "destacar", "agir", "proteger", "atribuir", "analisar", "destruir", "atacar", "avaliar", "trocar", "custar", "enviar", "declarar", "conversar", "contribuir", "organizar", "carregar", "sugerir", "alimentar", "voar", "recuperar", "empregar", "justificar", "apanhar", "prometer", "informar", "comentar", "inventar", "sustentar", "quebrar", "encarar", "merecer", "provar", "conquistar", "confirmar", "pintar", "cometer", "suceder", "gastar", "decorrer", "ajustar", "reagir", "votar", "integrar", "manifestar", "esconder", "dormir", "amar", "assinar", "gravar", "expor", "traduzir", "libertar", "mover", "promover", "controlar", "adoptar", "adotar", "restar", "distribuir", "calcular", "demorar", "sentar", "interpretar", "recolher", "deter", "ceder", "ultrapassar", "concentrar", "comunicar", "actuar", "atuar", "unir", "desenhar", "descrever", "errar", "explorar", "deitar", "limpar", "retomar", "prender", "assegurar", "misturar", "espalhar", "ameaçar", "operar", "opor", "fornecer", "puxar", "recorrer", "necessitar", "prejudicar", "conceder", "caminhar", "executar", "percorrer", "modificar", "investir", "satisfazer", "escapar", "combater", "beber", "insistir", "cobrar", "invadir", "convencer", "afectar", "afetar", "experimentar", "distinguir", "proibir", "criticar", "governar", "resistir", "inspirar", "acumular", "deslocar", "medir", "reclamar", "colher", "estimar", "acordar", "suportar", "encher", "meter", "recordar", "frequentar", "prosseguir", "tender", "rever", "temer", "implicar", "facilitar", "repousar", "variar", "atirar", "negociar", "derrubar", "transportar", "esclarecer", "sobreviver", "arranjar", "introduzir", "encaminhar", "proceder", "condenar", "visar", "adaptar", "romper", "comandar", "interromper", "roubar", "adiantar", "denunciar", "encerrar", "intervir", "ferir", "ignorar", "assentar", "queimar", "conservar", "disputar", "corrigir", "forçar", "elevar", "exibir", "reforçar", "contemplar", "orientar", "rir", "comprometer", "pairar", "projectar", "confiar", "colaborar", "aprovar", "constar", "apreciar", "abordar", "despertar", "arrancar", "desistir", "confundir", "carecer", "retornar", "lavar", "obedecer", "fabricar", "prolongar", "render", "soltar", "cultivar", "caracterizar", "ordenar", "armar", "absorver", "estimular", "optar", "sujeitar", "apurar", "influenciar", "combinar", "emitir", "divulgar", "mexer", "alargar", "consumir", "arrastar", "superar", "travar", "eliminar", "reparar", "competir", "concorrer", "agarrar", "proporcionar", "fundar", "registrar", "desviar", "submeter", "dobrar", "pronunciar", "animar", "conferir", "converter", "registar", "brincar", "tecer", "perseguir", "emprestar", "antecipar", "desempenhar", "segurar", "vestir", "convocar", "recomendar", "jantar", "saltar", "demitir", "surpreender", "conceber", "acelerar", "ampliar", "reservar", "residir", "situar", "preencher", "rejeitar", "devolver", "acentuar", "classificar", "apertar", "sonhar", "chorar", "localizar", "botar", "erguer", "falhar", "consistir", "avisar", "adorar", "contrariar", "abranger", "investigar", "resumir", "recuar", "requerer", "pregar", "solicitar", "escutar", "agradar", "associar", "liderar", "autorizar", "encarregar", "enganar", "desfazer", "suspender", "aguardar", "rodear", "beneficiar", "destinar", "lidar", "desconhecer", "basear", "evoluir", "consultar", "celebrar", "cruzar", "designar", "confessar", "descartar", "captar", "largar", "reproduzir", "presidir", "apagar", "relatar", "agravar", "esgotar", "derivar", "dispensar", "aquecer", "examinar", "depositar", "disparar", "treinar", "plantar", "girar", "violar", "habitar", "exprimir", "acertar", "rodar", "aderir", "preservar", "admirar", "calar", "movimentar", "improvisar", "excluir", "aguentar", "efectuar", "efetuar", "traçar", "abalar", "favorecer", "falecer", "guiar", "sobrar", "alegar", "financiar", "arriscar", "partilhar", "enterrar", "expulsar", "empurrar", "mergulhar", "transferir", "constatar", "aconselhar", "descansar", "renovar", "incomodar", "relacionar", "gritar", "debater", "incorporar", "somar", "queixar", "firmar", "multiplicar", "inaugurar", "elaborar", "apostar", "chover", "salientar", "formular", "herdar", "passear", "acolher", "cercar", "processar", "gozar", "protestar", "argumentar", "penetrar", "concretizar", "administrar", "conviver", "finalizar", "reter", "valorizar", "planejar", "divertir", "inserir", "circular", "extrair", "convir", "motivar", "comprovar", "isolar", "originar", "lamentar", "articular", "estrear", "fumar", "nomear", "expressar", "assustar", "aperceber", "ressaltar", "abrigar", "punir", "abater", "questionar", "comportar", "poupar", "compensar", "agradecer", "caçar", "abraçar", "defrontar", "desencadear", "assinalar", "iluminar", "arrumar", "depor", "possibilitar", "aliviar", "impressionar", "seleccionar", "selecionar", "interrogar", "renunciar", "alternar", "enriquecer", "arder", "expandir", "respirar", "persistir", "coincidir", "empenhar", "ilustrar", "agitar", "desafiar", "adiar", "cessar", "rolar", "apelar", "interferir", "duvidar", "enrolar", "figurar", "contrair", "consolidar", "semear", "perdoar", "esfregar", "ingressar", "dificultar", "implantar", "prevenir", "despedir", "ocultar", "explodir", "imitar", "anular", "dotar", "capturar", "tapar", "revestir", "comemorar", "deparar", "denominar", "editar", "esmagar", "ousar", "desconfiar", "derrotar", "extinguir", "calhar", "acender", "desprezar", "encomendar", "complicar", "livrar", "contestar", "embarcar", "jurar", "telefonar", "torcer", "aprofundar", "perturbar", "piorar", "precipitar", "testar", "refugiar", "remeter", "desligar", "gerir", "proclamar", "secar", "candidatar", "chocar", "provir", "brigar", "comparecer", "reinar", "dissolver", "hesitar", "irritar", "apressar", "copiar", "induzir", "sublinhar", "fundir", "rebentar", "engolir", "emergir", "sumir", "mencionar", "proferir", "detectar", "picar", "instituir", "filmar", "dispersar", "apaixonar", "enfiar", "afundar", "espantar", "rezar", "exportar", "decorar", "soar", "atrapalhar", "navegar", "doar", "coordenar", "fiar", "incentivar", "curar", "escalar", "fingir", "oscilar", "enxergar", "pressionar", "consagrar", "brilhar", "fotografar", "morder", "restringir", "reger", "culpar", "cansar", "alugar", "cheirar", "vingar", "recomeçar", "disfarçar", "apetecer", "desculpar", "acarretar", "rasgar", "rondar", "reformar", "revoltar", "ascender", "centrar", "mobilizar", "despejar", "disciplinar", "esforçar", "pousar", "ponderar", "exceder", "mentir", "confrontar", "alastrar", "restaurar", "decretar", "ditar", "banhar", "acalmar", "desembarcar", "retratar", "auxiliar", "contratar", "reivindicar", "narrar", "reprimir", "assemelhar", "desenrolar", "sacudir", "propagar", "habituar", "pisar", "educar", "equilibrar", "pesquisar", "debruçar", "advertir", "almoçar", "pular", "inclinar", "atrasar", "sacrificar", "aliar", "alinhar", "tardar", "varrer", "conformar", "incidir", "evidenciar", "liberar", "regular", "suspeitar", "beijar", "sorrir", "culminar", "alertar", "baptizar", "batizar", "avistar", "imprimir", "elogiar", "alongar", "prevalecer", "adormecer", "pescar", "recear", "fortalecer", "furar", "repassar", "inverter", "fiscalizar", "invocar", "nadar", "soprar", "anteceder", "namorar", "doer", "trair", "distrair", "diferenciar", "resgatar", "vibrar", "ofender", "responsabilizar", "discordar", "encostar", "evocar", "ferver", "marchar", "agredir", "redigir", "restabelecer", "arrecadar", "contactar", "moer", "colar", "adivinhar", "amarrar", "odiar", "flutuar", "envelhecer", "reverter", "atar", "distanciar", "especificar", "remover", "cumprimentar", "aperfeiçoar", "assaltar", "desmentir", "intensificar", "compartilhar", "inscrever", "vigiar", "difundir", "espreitar", "enquadrar", "sufocar", "equivaler", "englobar", "arrepender", "empreender", "sobrepor", "accionar", "acionar", "recair", "tremer", "torturar", "afogar", "estragar", "consentir", "agrupar", "saudar", "abdicar", "diferir", "anotar", "desdobrar", "progredir", "furtar", "liquidar", "chefiar", "aspirar", "homenagear", "ensaiar", "socorrer", "encaixar", "preceder", "sacar", "suprir", "indagar", "seduzir", "atrever", "estranhar", "suscitar", "conciliar", "simular", "estacionar", "predominar", "acomodar", "actualizar", "emigrar", "cavar", "honrar", "renascer", "privilegiar", "fracassar", "atenuar", "bloquear", "refazer", "reafirmar", "acostumar", "velar", "derramar", "condicionar", "fluir", "esvaziar", "providenciar", "deduzir", "castigar", "curvar", "detestar", "presumir", "influir", "findar", "solucionar", "escorrer", "lavrar", "envergonhar", "cozinhar", "devorar", "apreender", "povoar", "advogar", "suicidar", "roer", "encantar", "paralisar", "encolher", "contornar", "cancelar", "iludir", "armazenar", "edificar", "despir", "deslizar", "ministrar"];
// console.log(allVerbsByFrequency.length);

// All regular verbs ordered by frequency from Davies and Preto-Bay (2008)
var regularVerbs = ["-ar", "-er", "-ir", "dever", "passar", "levar", "deixar", "falar", "encontrar", "partir", "chamar", "pensar", "existir", "tornar", "", "entrar", "viver", "acabar", "continuar", "voltar", "tomar", "trabalhar", "apresentar", "criar", "considerar", "receber", "tratar", "achar", "usar", "contar", "mostrar", "procurar", "tentar", "entender", "esperar", "definir", "permitir", "acreditar", "precisar", "mudar", "olhar", "resolver", "estudar", "formar", "lembrar", "representar", "perceber", "ajudar", "ocorrer", "realizar", "tirar", "correr", "aumentar", "andar", "acompanhar", "escolher", "responder", "gostar", "vender", "sofrer", "decidir", "compreender", "fechar", "transformar", "comprar", "levantar", "mandar", "afirmar", "terminar", "interessar", "discutir", "evitar", "casar", "participar", "cumprir", "morar", "garantir", "assumir", "preparar", "aprender", "comer", "ocupar", "bater", "aproveitar", "depender", "parar", "assistir", "cortar", "apoiar", "funcionar", "prestar", "dividir", "determinar", "revelar", "desejar", "imaginar", "observar", "resultar", "admitir", "faltar", "iniciar", "apontar", "abandonar", "notar", "retirar", "viajar", "especializar", "adquirir", "cantar", "melhorar", "pesar", "preocupar", "afastar", "respeitar", "cuidar", "causar", "aproximar", "importar", "concordar", "lutar", "costumar", "anunciar", "virar", "durar", "perguntar", "utilizar", "citar", "ensinar", "enfrentar", "convidar", "separar", "atravessar", "limitar", "centrar", "visitar", "bastar", "acrescentar", "baixar", "comparar", "recusar", "demonstrar", "regressar", "dominar", "acusar", "transmitir", "corresponder", "guardar", "instalar", "gerar", "montar", "alterar", "analisar", "avaliar", "custar", "enviar", "declarar", "conversar", "organizar", "alimentar", "voar", "recuperar", "apanhar", "prometer", "informar", "comentar", "inventar", "sustentar", "quebrar", "encarar", "provar", "conquistar", "confirmar", "pintar", "cometer", "suceder", "decorrer", "ajustar", "votar", "integrar", "esconder", "amar", "assinar", "gravar", "mover", "promover", "controlar", "adoptar", "adotar", "restar", "calcular", "demorar", "sentar", "interpretar", "recolher", "ceder", "ultrapassar", "concentrar", "actuar", "atuar", "unir", "desenhar", "errar", "explorar", "deitar", "retomar", "assegurar", "misturar", "espalhar", "operar", "puxar", "recorrer", "necessitar", "conceder", "caminhar", "executar", "percorrer", "escapar", "combater", "beber", "insistir", "cobrar", "invadir", "afectar", "afetar", "experimentar", "governar", "resistir", "inspirar", "acumular", "reclamar", "colher", "estimar", "acordar", "suportar", "meter", "recordar", "frequentar", "temer", "facilitar", "repousar", "variar", "atirar", "derrubar", "transportar", "sobreviver", "arranjar", "encaminhar", "proceder", "condenar", "visar", "adaptar", "comandar", "interromper", "roubar", "adiantar", "denunciar", "encerrar", "ignorar", "queimar", "conservar", "disputar", "elevar", "exibir", "contemplar", "orientar", "comprometer", "pairar", "projectar", "confiar", "colaborar", "aprovar", "constar", "apreciar", "abordar", "desistir", "retornar", "lavar", "render", "caracterizar", "ordenar", "armar", "estimular", "optar", "apurar", "influenciar", "combinar", "emitir", "mexer", "arrastar", "superar", "travar", "eliminar", "reparar", "concorrer", "agarrar", "proporcionar", "fundar", "registrar", "desviar", "dobrar", "pronunciar", "animar", "converter", "registar", "emprestar", "antecipar", "desempenhar", "recomendar", "jantar", "saltar", "demitir", "conceber", "acelerar", "ampliar", "reservar", "residir", "preencher", "rejeitar", "devolver", "acentuar", "apertar", "sonhar", "chorar", "localizar", "botar", "falhar", "consistir", "avisar", "adorar", "contrariar", "resumir", "recuar", "solicitar", "escutar", "agradar", "associar", "liderar", "autorizar", "enganar", "aguardar", "beneficiar", "destinar", "lidar", "consultar", "celebrar", "cruzar", "designar", "confessar", "descartar", "captar", "presidir", "relatar", "agravar", "esgotar", "derivar", "dispensar", "examinar", "depositar", "disparar", "treinar", "plantar", "girar", "violar", "habitar", "acertar", "rodar", "preservar", "admirar", "calar", "movimentar", "improvisar", "aguentar", "efectuar", "efetuar", "abalar", "guiar", "sobrar", "financiar", "partilhar", "enterrar", "empurrar", "mergulhar", "constatar", "aconselhar", "descansar", "renovar", "incomodar", "relacionar", "gritar", "debater", "incorporar", "somar", "queixar", "firmar", "inaugurar", "elaborar", "apostar", "chover", "salientar", "formular", "herdar", "acolher", "processar", "gozar", "protestar", "argumentar", "penetrar", "concretizar", "administrar", "conviver", "finalizar", "valorizar", "planejar", "circular", "motivar", "comprovar", "isolar", "originar", "lamentar", "articular", "fumar", "expressar", "assustar", "aperceber", "ressaltar", "punir", "abater", "questionar", "comportar", "poupar", "compensar", "defrontar", "assinalar", "iluminar", "arrumar", "possibilitar", "aliviar", "impressionar", "seleccionar", "selecionar", "renunciar", "alternar", "arder", "expandir", "respirar", "persistir", "coincidir", "empenhar", "ilustrar", "agitar", "desafiar", "adiar", "cessar", "rolar", "apelar", "duvidar", "enrolar", "figurar", "consolidar", "perdoar", "ingressar", "dificultar", "implantar", "imitar", "anular", "dotar", "capturar", "tapar", "comemorar", "deparar", "denominar", "editar", "ousar", "desconfiar", "derrotar", "calhar", "desprezar", "encomendar", "contestar", "jurar", "telefonar", "aprofundar", "perturbar", "piorar", "precipitar", "testar", "refugiar", "remeter", "proclamar", "candidatar", "reinar", "hesitar", "irritar", "apressar", "copiar", "sublinhar", "fundir", "rebentar", "mencionar", "detectar", "filmar", "apaixonar", "enfiar", "afundar", "espantar", "rezar", "exportar", "decorar", "atrapalhar", "doar", "coordenar", "fiar", "incentivar", "curar", "escalar", "oscilar", "pressionar", "consagrar", "brilhar", "fotografar", "morder", "culpar", "cansar", "cheirar", "desculpar", "acarretar", "rondar", "reformar", "revoltar", "ascender", "centrar", "mobilizar", "despejar", "disciplinar", "pousar", "ponderar", "exceder", "confrontar", "alastrar", "restaurar", "decretar", "ditar", "banhar", "acalmar", "retratar", "auxiliar", "contratar", "narrar", "reprimir", "assemelhar", "desenrolar", "habituar", "pisar", "equilibrar", "pesquisar", "pular", "inclinar", "atrasar", "aliar", "alinhar", "tardar", "varrer", "conformar", "incidir", "evidenciar", "liberar", "regular", "beijar", "culminar", "alertar", "baptizar", "batizar", "avistar", "elogiar", "furar", "repassar", "inverter", "fiscalizar", "nadar", "soprar", "anteceder", "namorar", "diferenciar", "resgatar", "vibrar", "ofender", "responsabilizar", "discordar", "encostar", "ferver", "marchar", "arrecadar", "contactar", "colar", "adivinhar", "amarrar", "flutuar", "reverter", "atar", "distanciar", "remover", "cumprimentar", "aperfeiçoar", "assaltar", "compartilhar", "vigiar", "difundir", "espreitar", "enquadrar", "englobar", "arrepender", "empreender", "accionar", "acionar", "tremer", "torturar", "agrupar", "anotar", "desdobrar", "furtar", "liquidar", "chefiar", "aspirar", "ensaiar", "socorrer", "encaixar", "preceder", "suprir", "atrever", "estranhar", "suscitar", "conciliar", "simular", "estacionar", "predominar", "acomodar", "actualizar", "emigrar", "cavar", "honrar", "privilegiar", "fracassar", "atenuar", "reafirmar", "acostumar", "velar", "derramar", "condicionar", "esvaziar", "providenciar", "deduzir", "curvar", "detestar", "presumir", "solucionar", "escorrer", "lavrar", "envergonhar", "cozinhar", "devorar", "apreender", "povoar", "suicidar", "encantar", "paralisar", "encolher", "contornar", "cancelar", "iludir", "armazenar", "deslizar", "ministrar"]

// 558 regular -ar verbs from Davies and Preto-Bay (2008) in order of frequency
var arDictionary = ["-ar", "passar", "levar", "deixar", "falar", "encontrar", "chamar", "pensar", "tornar", "entrar", "acabar", "continuar", "voltar", "tomar", "trabalhar", "apresentar", "criar", "considerar", "tratar", "achar", "usar", "contar", "mostrar", "procurar", "tentar", "esperar", "acreditar", "precisar", "mudar", "olhar", "estudar", "formar", "lembrar", "representar", "ajudar", "realizar", "tirar", "aumentar", "andar", "acompanhar", "gostar", "fechar", "transformar", "comprar", "levantar", "mandar", "afirmar", "terminar", "interessar", "evitar", "casar", "participar", "morar", "preparar", "ocupar", "aproveitar", "parar", "cortar", "apoiar", "funcionar", "prestar", "determinar", "revelar", "desejar", "imaginar", "observar", "resultar", "faltar", "iniciar", "apontar", "abandonar", "notar", "retirar", "viajar", "especializar", "cantar", "melhorar", "pesar", "preocupar", "afastar", "respeitar", "cuidar", "causar", "aproximar", "importar", "concordar", "lutar", "costumar", "anunciar", "virar", "durar", "perguntar", "utilizar", "citar", "ensinar", "enfrentar", "convidar", "separar", "atravessar", "limitar", "centrar", "visitar", "bastar", "acrescentar", "baixar", "comparar", "recusar", "demonstrar", "regressar", "dominar", "acusar", "guardar", "instalar", "gerar", "montar", "alterar", "analisar", "avaliar", "custar", "enviar", "declarar", "conversar", "organizar", "alimentar", "voar", "recuperar", "apanhar", "informar", "comentar", "inventar", "sustentar", "quebrar", "encarar", "provar", "conquistar", "confirmar", "pintar", "ajustar", "votar", "integrar", "amar", "assinar", "gravar", "controlar", "adoptar", "adotar", "restar", "calcular", "demorar", "sentar", "interpretar", "ultrapassar", "concentrar", "actuar", "atuar", "desenhar", "errar", "explorar", "deitar", "retomar", "assegurar", "misturar", "espalhar", "operar", "puxar", "necessitar", "caminhar", "executar", "escapar", "cobrar", "afectar", "afetar", "experimentar", "governar", "inspirar", "acumular", "reclamar", "estimar", "acordar", "suportar", "recordar", "frequentar", "facilitar", "repousar", "variar", "atirar", "derrubar", "transportar", "arranjar", "encaminhar", "condenar", "visar", "adaptar", "comandar", "roubar", "adiantar", "denunciar", "encerrar", "ignorar", "queimar", "conservar", "disputar", "elevar", "contemplar", "orientar", "pairar", "projectar", "confiar", "colaborar", "aprovar", "constar", "apreciar", "abordar", "retornar", "lavar", "caracterizar", "ordenar", "armar", "estimular", "optar", "apurar", "influenciar", "combinar", "arrastar", "superar", "travar", "eliminar", "reparar", "agarrar", "proporcionar", "fundar", "registrar", "desviar", "dobrar", "pronunciar", "animar", "registar", "emprestar", "antecipar", "desempenhar", "recomendar", "jantar", "saltar", "acelerar", "ampliar", "reservar", "rejeitar", "acentuar", "apertar", "sonhar", "chorar", "localizar", "botar", "falhar", "avisar", "adorar", "contrariar", "recuar", "solicitar", "escutar", "agradar", "associar", "liderar", "autorizar", "enganar", "aguardar", "beneficiar", "destinar", "lidar", "consultar", "celebrar", "cruzar", "designar", "confessar", "descartar", "captar", "relatar", "agravar", "esgotar", "derivar", "dispensar", "examinar", "depositar", "disparar", "treinar", "plantar", "girar", "violar", "habitar", "acertar", "rodar", "preservar", "admirar", "calar", "movimentar", "improvisar", "aguentar", "efectuar", "efetuar", "abalar", "guiar", "sobrar", "financiar", "partilhar", "enterrar", "empurrar", "mergulhar", "constatar", "aconselhar", "descansar", "renovar", "incomodar", "relacionar", "gritar", "incorporar", "somar", "queixar", "firmar", "inaugurar", "elaborar", "apostar", "salientar", "formular", "herdar", "processar", "gozar", "protestar", "argumentar", "penetrar", "concretizar", "administrar", "finalizar", "valorizar", "planejar", "circular", "motivar", "comprovar", "isolar", "originar", "lamentar", "articular", "fumar", "expressar", "assustar", "ressaltar", "questionar", "comportar", "poupar", "compensar", "defrontar", "assinalar", "iluminar", "arrumar", "possibilitar", "aliviar", "impressionar", "seleccionar", "selecionar", "renunciar", "alternar", "respirar", "empenhar", "ilustrar", "agitar", "desafiar", "adiar", "cessar", "rolar", "apelar", "duvidar", "enrolar", "figurar", "consolidar", "perdoar", "ingressar", "dificultar", "implantar", "imitar", "anular", "dotar", "capturar", "tapar", "comemorar", "deparar", "denominar", "editar", "ousar", "desconfiar", "derrotar", "calhar", "desprezar", "encomendar", "contestar", "jurar", "telefonar", "aprofundar", "perturbar", "piorar", "precipitar", "testar", "refugiar", "proclamar", "candidatar", "reinar", "hesitar", "irritar", "apressar", "copiar", "sublinhar", "rebentar", "mencionar", "detectar", "filmar", "apaixonar", "enfiar", "afundar", "espantar", "rezar", "exportar", "decorar", "atrapalhar", "doar", "coordenar", "fiar", "incentivar", "curar", "escalar", "oscilar", "pressionar", "consagrar", "brilhar", "fotografar", "culpar", "cansar", "cheirar", "desculpar", "acarretar", "rondar", "reformar", "revoltar", "centrar", "mobilizar", "despejar", "disciplinar", "pousar", "ponderar", "confrontar", "alastrar", "restaurar", "decretar", "ditar", "banhar", "acalmar", "retratar", "auxiliar", "contratar", "narrar", "assemelhar", "desenrolar", "habituar", "pisar", "equilibrar", "pesquisar", "pular", "inclinar", "atrasar", "aliar", "alinhar", "tardar", "conformar", "evidenciar", "liberar", "regular", "beijar", "culminar", "alertar", "baptizar", "batizar", "avistar", "elogiar", "furar", "repassar", "fiscalizar", "nadar", "soprar", "namorar", "diferenciar", "resgatar", "vibrar", "responsabilizar", "discordar", "encostar", "marchar", "arrecadar", "contactar", "colar", "adivinhar", "amarrar", "flutuar", "atar", "distanciar", "cumprimentar", "aperfeiçoar", "assaltar", "compartilhar", "vigiar", "espreitar", "enquadrar", "englobar", "accionar", "acionar", "torturar", "agrupar", "anotar", "desdobrar", "furtar", "liquidar", "chefiar", "aspirar", "ensaiar", "encaixar", "estranhar", "suscitar", "conciliar", "simular", "estacionar", "predominar", "acomodar", "actualizar", "emigrar", "cavar", "honrar", "privilegiar", "fracassar", "atenuar", "reafirmar", "acostumar", "velar", "derramar", "condicionar", "esvaziar", "providenciar", "curvar", "detestar", "solucionar", "lavrar", "envergonhar", "cozinhar", "devorar", "povoar", "suicidar", "encantar", "paralisar", "contornar", "cancelar", "armazenar", "deslizar", "ministrar"];
// console.log(arDictionary.length);

// 73 regular -er verbs from Davies and Preto-Bay (2008) in order of frequency
var erDictionary = ["-er", "dever", "viver", "receber", "entender", "resolver", "perceber", "ocorrer", "correr", "escolher", "responder", "vender", "sofrer", "compreender", "comer", "bater", "depender", "corresponder", "prometer", "cometer", "suceder", "decorrer", "esconder", "mover", "promover", "recolher", "ceder", "recorrer", "conceder", "percorrer", "combater", "beber", "colher", "meter", "temer", "sobreviver", "proceder", "interromper", "comprometer", "render", "mexer", "concorrer", "converter", "conceber", "preencher", "devolver", "debater", "chover", "acolher", "conviver", "aperceber", "abater", "arder", "remeter", "morder", "ascender", "exceder", "varrer", "inverter", "anteceder", "ofender", "ferver", "reverter", "remover", "arrepender", "empreender", "tremer", "socorrer", "preceder", "atrever", "escorrer", "apreender", "encolher"];

// 39 regular -ir verbs from Davies and Preto-Bay (2008) in order of frequency
var irDictionary = ["-ir", "partir", "existir", "definir", "permitir", "decidir", "discutir", "cumprir", "garantir", "assumir", "assistir", "dividir", "admitir", "adquirir", "transmitir", "unir", "insistir", "invadir", "resistir", "exibir", "desistir", "emitir", "demitir", "residir", "consistir", "resumir", "presidir", "punir", "expandir", "persistir", "coincidir", "fundir", "reprimir", "incidir", "difundir", "suprir", "deduzir", "presumir", "iludir"];
//END regular verb dictionaries

// BEGIN regular verb endings
// Endings for -ar verbs:
var arNonFinite = ["ar", "ando", "ado"], // index.html <p> ids: 0, 1, 2
    arPresent = ["o", "a", "amos", "am"], // index.html <p> ids: 10, 11, 12, 13
    arImperfect = ["ava", "ava", "ávamos", "avam"], // index.html <p> ids: 20, 21, 22, 23
    arPreterite = ["ei", "ou", "amos", "aram"], // index.html <p> ids: 30, 31, 32, 33
    arPresentSubj = ["e", "e", "emos", "em"], // index.html <p> ids: 40, 41, 42, 43
    arImperfectSubj = ["asse", "asse", "ássemos", "assem"], // index.html <p> ids: 50, 51, 52, 53
    arFutureSubj = ["ar", "ar", "armos", "arem"], // index.html <p> ids: 60, 61, 62, 63
    arConditional = ["aria", "aria", "aríamos", "ariam"], // index.html <p> ids: 70, 71, 72, 73
    arFuture = ["arei", "ará", "aremos", "arão"], // index.html <p> ids: 80, 81, 82, 83
    arSimplePluperfect = ["ara", "ara", "aramos", "aram"]; // index.html <p> ids: 90, 91, 92, 93

var arEndings = [arNonFinite, arPresent, arImperfect, arPreterite, arPresentSubj, arImperfectSubj, arFutureSubj, arConditional, arFuture, arSimplePluperfect];

// Endings for -er verbs:
var erNonFinite = ["er", "endo", "ido"],  // index.html <p> ids: 0, 1, 2; others follow -ar endings above
    erPresent = ["o", "e", "emos", "em"],
    erImperfect = ["ia", "ia", "íamos", "íam"],
    erPreterite = ["i", "eu", "emos", "eram "],
    erPresentSubj = ["a", "a", "amos", "am"],
    erImperfectSubj = ["esse", "esse", "êssemos", "essem"],
    erFutureSubj = ["er", "er", "ermos", "erem"],
    erConditional = ["eria", "eria", "eríamos", "eriam"],
    erFuture = ["erei", "erá", "eremos", "erão"],
    erSimplePluperfect = ["era", "era", "eramos", "eram"];

var erEndings = [erNonFinite, erPresent, erImperfect, erPreterite, erPresentSubj, erImperfectSubj, erFutureSubj, erConditional, erFuture, erSimplePluperfect];

// Endings for -ir verbs:
var irNonFinite = ["ir", "indo", "ido"],
    irPresent = ["o", "e", "imos", "em"],
    irImperfect = ["ia", "ia", "íamos", "íam"],
    irPreterite = ["i", "iu", "imos", "iram"],
    irPresentSubj = ["a", "a", "amos", "am"],
    irImperfectSubj = ["isse", "isse", "íssemos", "issem"],
    irFutureSubj = ["ir", "ir", "irmos", "irem"],
    irConditional = ["iria", "iria", "iríamos", "iriam"],
    irFuture = ["irei", "irá", "iremos", "irão"],
    irSimplePluperfect = ["ira", "ira", "iramos", "iram"];

var irEndings = [irNonFinite, irPresent, irImperfect, irPreterite, irPresentSubj, irImperfectSubj, irFutureSubj, irConditional, irFuture, irSimplePluperfect];
// END regualar verb endings


// START irregualar verb dictionaries
// The future and conditional tenses are formed by adding endings to the future stem, which is identical to the infinitive for all verbs except dizer ‘to say’, fazer ‘to do’ and trazer ‘to bring’, which have the future stems dir-, far- and trar- respectively.
// Whitlam, John (2010-10-04). Modern Brazilian Portuguese Grammar: A Practical Guide (Modern Grammars) (Kindle Locations 5857-5860). Taylor and Francis. Kindle Edition.
// complete conjugations for important irregular verbs

var serNonFinite = ["ser", "sendo", "sido"],
    serPresent = ["sou", "é", "somos", "são"],
    serImperfect = ["era", "era", "éramos", "eram"],
    serPreterite = ["fui", "foi", "fomos", "foram"],
    serPresentSubj = ["seja", "seja", "sejamos", "sejam"],
    serImperfectSubj = ["fosse", "fosse", "fôssemos", "fossem"],
    serFutureSubj = ["for", "for", "formos", "forem"],
    serConditional = ["seria", "seria", "seríamos", "seriam"],
    serFuture = ["serei", "será", "seremos", "serão"],
    serPluperfect = ["fora", "fora", "fôramos", "foram"];

var ser = [serNonFinite, serPresent, serImperfect, serPreterite, serPresentSubj, serImperfectSubj, serFutureSubj, serConditional, serFuture, serPluperfect];

var terNonFinite = ["ter", "tendo", "tido"],
    terPresent = ["tenho", "tem", "temos", "têm"],
    terImperfect = ["tinha", "tinha", "tínhamos", "tinham"],
    terPreterite = ["tive", "teve", "tivemos", "tiveram"],
    terPresentSubj = ["tenha", "tenha", "tenhamos", "tenham"],
    terImperfectSubj = ["tivesse", "tivesse", "tivéssemos", "tivessem"],
    terFutureSubj = ["tiver", "tiver", "tivermos", "tiverem"],
    terConditional = ["teria", "teria", "teríamos", "teriam"],
    terFuture = ["terei", "terá", "teremos", "terão"],
    terPluperfect = ["tivera", "tivera", "tivéramos", "tiveram"];

var ter = [terNonFinite, terPresent, terImperfect, terPreterite, terPresentSubj, terImperfectSubj, terFutureSubj, terConditional, terFuture, terPluperfect];

var irNonFinite = ["ir", "indo", "ido"],
    irPresent = ["vou", "vai", "vamos", "vão"],
    irImperfect = ["iria", "iria", "iríamos", "iriam"],
    irPreterite = ["fui", "foi", "fomos", "foram"],
    irPresentSubj = ["vá", "vá", "vamos", "vão"],
    irImperfectSubj = ["fosse", "fosse", "fôssemos", "fossem"],
    irFutureSubj = ["for", "for", "formos", "forem"],
    irConditional = ["iria", "iria", "iríamos", "iriam"],
    irFuture = ["irei", "irá", "iremos", "irão"],
    irPluperfect = ["fora", "fora", "fôramos", "foram"];

var ir = [irNonFinite, irPresent, irImperfect, irPreterite, irPresentSubj, irImperfectSubj, irFutureSubj, irConditional, irFuture, irPluperfect];

var irregularDictionary = [ser, ir, ter]; // FIX IR VERB, -IR TYPE CONFUSION
// END irregular verb dictionaries

// BEGIN js functions
// BEGIN autocomplete functions from w3schools.com
function autocomplete(inp, arr) {
  /* inp = document.getElementById("input") */
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      // console.log(e);
      // console.log(b);
      // console.log(i);
      // console.log(val);

      match = 0;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);

      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          match = match + 1;
          if (match < 7) { /* limits list items */
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");

            // console.log(b);

            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          } /* END of if-statement */
        } /* END of if-statement */
      } /* END of for-loop */
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");

      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("input"), regularVerbs);

/* END autocomplete stuff */




// BEGIN NAV functions
// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
// END NAV functions




// Submit on return key from w3schools.com
// Get the input field
// var input = document.getElementById("input");
// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Cancel the default action, if needed
//   event.preventDefault();
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Trigger the button element with a click
//     document.getElementById("large-button").click();
//   }
// });














// BEGIN conjugator functions
var userEntry;


$('button').click(function(){
   userEntry = $('input').val();
   arMatchVerbEnding(userEntry);
   erMatchVerbEnding(userEntry);
   irMatchVerbEnding(userEntry);
   alertUserDataNotFound();
});


// $('button').click(function(){
//    userEntry = $('input').val();
//    arMatchVerbEnding(userEntry);
//    erMatchVerbEnding(userEntry);
//    irMatchVerbEnding(userEntry);
//    alertUserDataNotFound();
// });

function alertUserDataNotFound(){
  if (arMatchFound === false && erMatchFound === false && irMatchFound === false){
    alert("No matching verb ending found");
    return;
  } else if (arDictionaryEntryFound === false && erDictionaryEntryFound === false && irDictionaryEntryFound === false){
    alert("No dictionary entry found");
    }
}

// MATCH VERB ENGING functions
var arMatchFound = false;
var erMatchFound = false;
var irMatchFound = false;

function arMatchVerbEnding(userEntry){ // checks ar verb endings only
  var arUserEntryEndingLongestMatch = "";
  for (i = 0; i < arEndings.length; i++) {  // Iterates through the tenses. Use forEach() instead?
    for (j = 0; j < arEndings[i].length; j++){  // Iterates through the endings for the given tense
      if (userEntry.endsWith(arEndings[i][j])){ // Replace with forEach() callback function?
        arMatchFound = true;
        if (arEndings[i][j].length > arUserEntryEndingLongestMatch.length){
          arUserEntryEndingLongestMatch = arEndings[i][j];
        }
      }
    }
  }
  if (arMatchFound === true) {
    arUserEntry = userEntry.slice(0, (userEntry.length - arUserEntryEndingLongestMatch.length)) + "ar";
    arCheckDictionary(arUserEntry);
    return;
  }
};

function erMatchVerbEnding(userEntry){ // checks ar verb endings only
  var erUserEntryEndingLongestMatch = "";
  for (i = 0; i < erEndings.length; i++) {  // Iterates through the tenses
    for (j = 0; j < erEndings[i].length; j++){  // Iterates through the endings for the given tense
      if (userEntry.endsWith(erEndings[i][j])){
        erMatchFound = true;
        if (erEndings[i][j].length > erUserEntryEndingLongestMatch.length){
          erUserEntryEndingLongestMatch = erEndings[i][j];
        }
      }
    }
  }
  if (erMatchFound === true) {
    erUserEntry = userEntry.slice(0, (userEntry.length - erUserEntryEndingLongestMatch.length)) + "er";
    erCheckDictionary(erUserEntry);
    return;
  }
};

function irMatchVerbEnding(userEntry){ // checks ar verb endings only
  var irUserEntryEndingLongestMatch = "";
  for (i = 0; i < irEndings.length; i++) {  // Iterates through the tenses
    for (j = 0; j < irEndings[i].length; j++){  // Iterates through the endings for the given tense
      if (userEntry.endsWith(irEndings[i][j])){
        irMatchFound = true;
        if (irEndings[i][j].length > irUserEntryEndingLongestMatch.length){
          irUserEntryEndingLongestMatch = irEndings[i][j];
        }
      }
    }
  }
  if (irMatchFound === true) {
    irUserEntry = userEntry.slice(0, (userEntry.length - irUserEntryEndingLongestMatch.length)) + "ir";
    irCheckDictionary(irUserEntry);
    return;
  }
};

// CHECK DICTIONARY functions
var arDictionaryEntryFound = false;
var erDictionaryEntryFound = false;
var irDictionaryEntryFound = false;


function arCheckDictionary(arUserEntry){ // look for match in regular dictionaries of infinitives
  for (i = 0; i < arDictionary.length; i++){
    if (arDictionary[i] === arUserEntry){
      arDictionaryEntryFound = true;
      arInfinitive = arUserEntry;
      arConjugate(arInfinitive);
      return;
    }
  }
}

function erCheckDictionary(erUserEntry){
  for (i = 0; i < erDictionary.length; i++){
    if (erDictionary[i] === erUserEntry){
      erDictionaryEntryFound = true;
      erInfinitive = erUserEntry;
      erConjugate(erInfinitive);
      return;
    }
  }
}

function irCheckDictionary(irUserEntry){
  for (i = 0; i < irDictionary.length; i++){
    if (irDictionary[i] === irUserEntry){
      irDictionaryEntryFound = true;
      irInfinitive = irUserEntry;
      irConjugate(irInfinitive);
      return;
    }
  }
}

// CONJUGATE functions

function arConjugate(arInfinitive) {  // regular verb function
  var arStem = arInfinitive.slice(0, -2);  // Assigns to 'stem' the part of arInfinitive before the ending '-ar'
		for (i = 0; i < arEndings.length; i++) {  // Iterates through the tenses
      for (j = 0; j < arEndings[i].length; j++){  // Iterates through the endings for the given tense
        var arConjugation = (arStem + arEndings[i][j]);
        var htmlIdIterator = (i*10)+j;
        $("." + htmlIdIterator).html(arConjugation);
      }
    }
}

function erConjugate(erInfinitive) {
  var erStem = erInfinitive.slice(0, -2);
		for (i = 0; i < erEndings.length; i++) {
      for (j = 0; j < erEndings[i].length; j++){
        var erConjugation = (erStem + erEndings[i][j]);
        var htmlIdIterator = (i*10)+j;
        $("." + htmlIdIterator).html(erConjugation);
      }
    }
}

function irConjugate(irInfinitive) {
  var irStem = irInfinitive.slice(0, -2);
		for (i = 0; i < irEndings.length; i++) {
      for (j = 0; j < irEndings[i].length; j++){
        var irConjugation = (irStem + irEndings[i][j]);
        var htmlIdIterator = (i*10)+j;
        $("." + htmlIdIterator).html(irConjugation);
      }
    }
}



}); // END of $(document).ready(function() {})

// END of .js doc
