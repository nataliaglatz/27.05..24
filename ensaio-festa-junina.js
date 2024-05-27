/** 
 * criar os objetos do ensaio
*/

/** 
 * 
 * Apolônio 3
 * Gregório 1
 * Rodrigo 2
 * Natalia 7
 * Aleciane 12
 * Erik 1
 * Rayssa 4
 * 
 * */

class Pessoa {
    constructor (musicalidade, corpo, idade, peso, cor, coordenacao_motora, altura, ritmo, nome, ano_nascimento, mes_nascimento, dia_nascimento, nome_pai, nome_mae, rg, cpf, endereco, numero_endereco, bairro, cidade, estado, cep, whatsapp, facebook, instagram, twiter_x, linkedin, email, tiktok, youtube, snapchat, orkut, tinder, uber, app_99, profissao, nacionalidade, estado_civil, possui_deficiencia, cnh, passaporte, religiao, partido_politico, idioma, figurino, ) {
        this.musicalidade = musicalidade;
        this.corpo = corpo
        this.idade = idade;
        this.peso = peso;
        this.cor = cor;
        this.coordenacao_motora = coordenacao_motora;
        this.altura = altura;
        this.ritmo = ritmo;
        this.nome = nome;
        this.ano_nascimento = ano_nascimento;
        this.mes_nascimento = mes_nascimento;
        this.dia_nascimento = dia_nascimento;
        this.nome_pai = nome_pai;
        this.nome_mae = nome_mae;
        this.rg = rg;
        this.cpf = cpf;
        this.endereco =  endereco;
        this.numero_endereco = numero_endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.whatsapp = whatsapp;
        this.facebook = facebook;
        this.instagram = instagram;
        this.twiter_x = twiter_x;
        this.linkedin = linkedin;
        this.email = email;
        this.tiktok = tiktok;
        this.youtube = youtube;
        this.snapchat = snapchat;
        this.orkut = orkut;
        this.tinder = tinder;
        this.uber = uber;
        this.app_99 = app_99;
        this.profissao = profissao;
        this.nacionalidade = nacionalidade;
        this.estado_civil = estado_civil;
        this.possui_deficiencia = possui_deficiencia;
        this.cnh = cnh;
        this.passaporte = passaporte;
        this.religiao = religiao;
        this.partido_politico = partido_politico;
        this.idioma = idioma;
        this.figurino = figurino;
        
    }
}

    var pessoa = [];
    pessoa[0] = new Pessoa("João", 17, 59,"1,72", "preto", "eclética", "magro");
    pessoa[1] = new Pessoa("Davi", 16, 53,"1,63", "pardo", "rap", "magro");
    pessoa[2] = new Pessoa("Ale", 16, 60,"1,62", "parda", "gospel internacional", "midsize");
    pessoa[3] = new Pessoa("Rayssa", 17, 60,"1,52", "parda", "eclética", "atlético");
    pessoa[4] = new Pessoa("Mariana", 17, 70,"1,68", "parda", "eclética", "midsize");
    pessoa[5] = new Pessoa("Natália", 17, 57,"1,65", "branca", "eclética", "atlético");
    pessoa[6] = new Pessoa("Camylle", 17, 63,"1,65", "preta", "eclética", "atlético");
    pessoa[7] = new Pessoa("Julia", 18, 65,"1,65", "branca", "eclética", "atlético");
    pessoa[8] = new Pessoa("Sofia", 17, 57,"1,64", "branca", "gospel", "magro");
    pessoa[9] = new Pessoa("Maria Eduarda", 17, 60,"1,53", "branco", "eclética", "magro");
    pessoa[10] = new Pessoa("Leonardo", 18, 63,"1,72", "branco", "eclética", "magro");
    pessoa[11] = new Pessoa("Ícaro", 17, 65,"1,75", "preto", "eclética", "atlético");
    pessoa[12] = new Pessoa("Thiago", 17, 65,"1,55", "branco", "eclética", "pluszise");
    pessoa[13] = new Pessoa("Matheus", 17, 80,"1,93", "pardo", "eclética", "atlético");
    pessoa[14] = new Pessoa("Enzo T", 17, 55,"1,70", "branco", "eclética", "magro");

class Musica {
    constructor (ritmo, velocidade, compasso, artista, nome, ano, tempo, idioma, tipo, genero, autor, compositor, musica, letra, instrumentos, volume, vocalista, baterista, guitarrista, baixista, sonoplasta) {
        this.ritmo = ritmo;
        this.velocidade = velocidade;
        this.compasso = compasso;
        this.artista = artista;
        this.nome = nome;
        this.ano = ano;
        this.tempo = tempo;
        this.idioma = idioma;
        this.tipo = tipo;
        this.genero = genero;
        this.autor = autor;
        this.compositor = compositor;
        this.musica = musica;
        this.letra = letra;
        this.instrumentos = instrumentos;
        this.volume = volume;
        this.vocalista = vocalista;
        this.baterista = baterista;
        this.guitarrista = guitarrista;
        this.baixista = baixista;
        this.sonoplasta = sonoplasta;

    }
}

    var musica =[];
    musica[0] = new Musica("Pipocou","Ana Castela", "animado", "sertanejopop", "rápido", "português" )
    musica[1] = new Musica("Ram Tchum","Ana Castela", "animado", "sertanejopop", "rápido", "português" )
    musica[2] = new Musica("Clima de Rodeio","DJ Chris no Beat", "animado", "sertanejopop", "rápido", "português")

       

class Ritmo {
    constructor (movimento, tempo, velocidade, som, compasso, coreografia, nome, quantidade_de_pessoas, musica, bpm, sincronia, harmonia, vestimentas, genero_musical, maquiagens, equipamentos, local_de_ensaio, melodia, composicao, compositor, instrumentos) {
        this.movimento = movimento;
        this.tempo = tempo;
        this.velocidade = velocidade;
        this.som = som;
        this.compasso = compasso;
        this.coreografia = coreografia;
        this.nome = nome;
        this.quantidade_de_pessoas = quantidade_de_pessoas;
        this.musica = musica;
        this.bpm = bpm;
        this.sincronia = sincronia;
        this.harmonia = harmonia;
        this.vestimentas = vestimentas;
        this.genero_musical = genero_musical;
        this.maquiagens = maquiagens;
        this.equipamentos = equipamentos;
        this.local_de_ensaio = local_de_ensaio;
        this.melodia = melodia;
        this.composicao = composicao;
        this.compositor = compositor;
        this.instrumentos = instrumentos;
        // Ação ...

    }
}

    var ritmo =[];
    ritmo[0] = new Ritmo("Pipocou","lento", "médio", "média","country")
    ritmo[1] = new Ritmo("Ram Tchum","animado", "médio", "rápida","funk")
    ritmo[2] = new Ritmo("Clima de Rodeio","lento", "médio", "média","country")

class LocalDoEnsaio {
    constructor (espaco, largura, altura, profundidade, energia, som, musica, microfone, palco, cadeira, capacidade_de_pessoas, equipamentos_de_luz, internet, cabo_de_energia, apresentacoes, stands, disponibilidade, seguranca, horario_de_funcionamento, acessibilidade, publico, artistas, janela, porta, camarim, comida, sala_de_descanso, escadas, ) {
        this.espaco = espaco;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.energia = energia;
        this.som = som;
        this.musica = musica;
        this.microfone = microfone;
        this.palco = palco;
        this.cadeira = cadeira;
        this.capacidade_de_pessoas = capacidade_de_pessoas;
        this.equipamentos_de_luz = equipamentos_de_luz;
        this.internet = internet;
        this.cabo_de_energia = cabo_de_energia;
        this.apresentacoes = apresentacoes;
        this.stands = stands;
        this.disponibilidade = disponibilidade;
        this.seguranca = seguranca;
        this.horario_de_funcionamento = horario_de_funcionamento;
        this.acessibilidade = acessibilidade;
        this.publico = publico;
        this.artistas = artistas;
        this.janela = janela;
        this.porta = porta;
        this.camarim = camarim;
        this.comida = comida;
        this.sala_de_descanso = sala_de_descanso;
        this.escadas = escadas;

    }
}

    var LocalDoEnsaio =[];
    localDoEnsaio[0] = new LocalDoEnsaio("salão social","lardo", "alto", "funda","tem energia", "1350 pessoas")


class Banheiro {
    constructor (genero, produtos, torneira, pia, vaso, piso, agua, energia, espelho, toalha_de_papel, suporte_de_sabonete, sabonete, suporte_de_bolsa, lixeira, descarga, mictorio, encanamento, odorizante, lampada, porta, interruptor, sensor_de_luz, janela, macaneta, batente) {
        this.genero = genero;
        this.produtos = produtos;
        this.torneira = torneira;
        this.pia = pia;
        this.vaso = vaso;
        this.piso = piso;
        this.agua = agua;
        this.energia = energia;
        this.espelho = espelho;
        this.toalha_de_papel = toalha_de_papel;
        this.suporte_de_sabonete = suporte_de_sabonete;
        this.sabonete = sabonete;
        this.suporte_de_bolsa = suporte_de_bolsa;
        this.lixeira = lixeira;
        this.descarga = descarga;
        this.mictorio = mictorio;
        this.encanamento = encanamento;
        this.odorizante = odorizante;
        this.lampada = lampada;
        this.porta = porta;
        this.interruptor = interruptor;
        this.sensor_de_luz = sensor_de_luz;
        this.janela = janela;
        this.macaneta = macaneta;
        this.batente = batente;

    }
}

    var Banheiro=[];
    banheiro[0] = new Banheiro("Feminino","papel higiênico, papel toalha, sabonete e lixeira", "6", "5","não tem mictótio", "2")
    banheiro[1] = new Banheiro("Masculino","papel higiênico, papel toalha, sabonete e lixeira", "4", "5","3", "1")



/**
 *      this.musicalidade = musicalidade;
        this.corpo = corpo;
        this.idade = idade;
        this.peso = peso;
        this.cor = cor;
        this.coordenacao_motora = coordenacao_motora;
        this.altura = altura;
        this.ritmo = ritmo;
        this.nome = nome;
        this.ano_nascimento = ano_nascimento;
        this.mes_nascimento = mes_nascimento;
        this.dia_nascimento = dia_nascimento;
        this.nome_pai = nome_pai;
        this.nome_mae = nome_mae;
        this.rg = rg;
        this.endereco = endereco;
        this.numero_endereco = numero_endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;

 */
