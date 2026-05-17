// Database province e comuni italiani (completo per Lombardia + principali altre regioni)
// Formato: { sigla: { nome, regione, comuni: [{nome, cap}] } }

const PROVINCE = {
  "BG": { nome: "Bergamo", regione: "Lombardia" },
  "BS": { nome: "Brescia", regione: "Lombardia" },
  "CO": { nome: "Como", regione: "Lombardia" },
  "CR": { nome: "Cremona", regione: "Lombardia" },
  "LC": { nome: "Lecco", regione: "Lombardia" },
  "LO": { nome: "Lodi", regione: "Lombardia" },
  "MB": { nome: "Monza e della Brianza", regione: "Lombardia" },
  "MI": { nome: "Milano", regione: "Lombardia" },
  "MN": { nome: "Mantova", regione: "Lombardia" },
  "PV": { nome: "Pavia", regione: "Lombardia" },
  "SO": { nome: "Sondrio", regione: "Lombardia" },
  "VA": { nome: "Varese", regione: "Lombardia" },
  "TO": { nome: "Torino", regione: "Piemonte" },
  "VE": { nome: "Venezia", regione: "Veneto" },
  "VR": { nome: "Verona", regione: "Veneto" },
  "PD": { nome: "Padova", regione: "Veneto" },
  "TV": { nome: "Treviso", regione: "Veneto" },
  "BO": { nome: "Bologna", regione: "Emilia-Romagna" },
  "MO": { nome: "Modena", regione: "Emilia-Romagna" },
  "PR": { nome: "Parma", regione: "Emilia-Romagna" },
  "RE": { nome: "Reggio Emilia", regione: "Emilia-Romagna" },
  "FI": { nome: "Firenze", regione: "Toscana" },
  "RM": { nome: "Roma", regione: "Lazio" },
  "NA": { nome: "Napoli", regione: "Campania" },
  "BA": { nome: "Bari", regione: "Puglia" },
  "PA": { nome: "Palermo", regione: "Sicilia" },
  "CA": { nome: "Cagliari", regione: "Sardegna" },
  "GE": { nome: "Genova", regione: "Liguria" },
  "TN": { nome: "Trento", regione: "Trentino-Alto Adige" },
  "BZ": { nome: "Bolzano", regione: "Trentino-Alto Adige" },
  "TS": { nome: "Trieste", regione: "Friuli-Venezia Giulia" },
  "UD": { nome: "Udine", regione: "Friuli-Venezia Giulia" },
  "AN": { nome: "Ancona", regione: "Marche" },
  "PG": { nome: "Perugia", regione: "Umbria" },
  "AQ": { nome: "L'Aquila", regione: "Abruzzo" },
  "CB": { nome: "Campobasso", regione: "Molise" },
  "PZ": { nome: "Potenza", regione: "Basilicata" },
  "CZ": { nome: "Catanzaro", regione: "Calabria" },
  "CT": { nome: "Catania", regione: "Sicilia" },
  "SS": { nome: "Sassari", regione: "Sardegna" },
  "AO": { nome: "Aosta", regione: "Valle d'Aosta" },
  "AL": { nome: "Alessandria", regione: "Piemonte" },
  "AT": { nome: "Asti", regione: "Piemonte" },
  "BI": { nome: "Biella", regione: "Piemonte" },
  "CN": { nome: "Cuneo", regione: "Piemonte" },
  "NO": { nome: "Novara", regione: "Piemonte" },
  "VB": { nome: "Verbano-Cusio-Ossola", regione: "Piemonte" },
  "VC": { nome: "Vercelli", regione: "Piemonte" },
  "SV": { nome: "Savona", regione: "Liguria" },
  "IM": { nome: "Imperia", regione: "Liguria" },
  "SP": { nome: "La Spezia", regione: "Liguria" },
  "PC": { nome: "Piacenza", regione: "Emilia-Romagna" },
  "FE": { nome: "Ferrara", regione: "Emilia-Romagna" },
  "RA": { nome: "Ravenna", regione: "Emilia-Romagna" },
  "FC": { nome: "Forlì-Cesena", regione: "Emilia-Romagna" },
  "RN": { nome: "Rimini", regione: "Emilia-Romagna" },
  "AR": { nome: "Arezzo", regione: "Toscana" },
  "GR": { nome: "Grosseto", regione: "Toscana" },
  "LI": { nome: "Livorno", regione: "Toscana" },
  "LU": { nome: "Lucca", regione: "Toscana" },
  "MS": { nome: "Massa-Carrara", regione: "Toscana" },
  "PI": { nome: "Pisa", regione: "Toscana" },
  "PT": { nome: "Pistoia", regione: "Toscana" },
  "PO": { nome: "Prato", regione: "Toscana" },
  "SI": { nome: "Siena", regione: "Toscana" },
  "TR": { nome: "Terni", regione: "Umbria" },
  "VT": { nome: "Viterbo", regione: "Lazio" },
  "RI": { nome: "Rieti", regione: "Lazio" },
  "LT": { nome: "Latina", regione: "Lazio" },
  "FR": { nome: "Frosinone", regione: "Lazio" },
  "PE": { nome: "Pescara", regione: "Abruzzo" },
  "CH": { nome: "Chieti", regione: "Abruzzo" },
  "TE": { nome: "Teramo", regione: "Abruzzo" },
  "IS": { nome: "Isernia", regione: "Molise" },
  "CE": { nome: "Caserta", regione: "Campania" },
  "BN": { nome: "Benevento", regione: "Campania" },
  "AV": { nome: "Avellino", regione: "Campania" },
  "SA": { nome: "Salerno", regione: "Campania" },
  "FG": { nome: "Foggia", regione: "Puglia" },
  "TA": { nome: "Taranto", regione: "Puglia" },
  "BR": { nome: "Brindisi", regione: "Puglia" },
  "LE": { nome: "Lecce", regione: "Puglia" },
  "MT": { nome: "Matera", regione: "Basilicata" },
  "CS": { nome: "Cosenza", regione: "Calabria" },
  "RC": { nome: "Reggio Calabria", regione: "Calabria" },
  "KR": { nome: "Crotone", regione: "Calabria" },
  "VV": { nome: "Vibo Valentia", regione: "Calabria" },
  "ME": { nome: "Messina", regione: "Sicilia" },
  "AG": { nome: "Agrigento", regione: "Sicilia" },
  "CL": { nome: "Caltanissetta", regione: "Sicilia" },
  "EN": { nome: "Enna", regione: "Sicilia" },
  "RG": { nome: "Ragusa", regione: "Sicilia" },
  "SR": { nome: "Siracusa", regione: "Sicilia" },
  "TP": { nome: "Trapani", regione: "Sicilia" },
  "OR": { nome: "Oristano", regione: "Sardegna" },
  "NU": { nome: "Nuoro", regione: "Sardegna" },
  "GO": { nome: "Gorizia", regione: "Friuli-Venezia Giulia" },
  "PN": { nome: "Pordenone", regione: "Friuli-Venezia Giulia" },
  "BL": { nome: "Belluno", regione: "Veneto" },
  "RO": { nome: "Rovigo", regione: "Veneto" },
  "VI": { nome: "Vicenza", regione: "Veneto" },
  "VB2": { nome: "Verbania", regione: "Piemonte" }
};

// Comuni campione per le province più usate (BS è la principale)
const COMUNI = {
  "BS": [
    {nome:"Brescia",cap:"25100"},{nome:"Gardone Val Trompia",cap:"25063"},{nome:"Lumezzane",cap:"25065"},
    {nome:"Concesio",cap:"25062"},{nome:"Sarezzo",cap:"25068"},{nome:"Nave",cap:"25075"},
    {nome:"Collebeato",cap:"25060"},{nome:"Bovezzo",cap:"25073"},{nome:"Rezzato",cap:"25086"},
    {nome:"Mazzano",cap:"25080"},{nome:"Bedizzole",cap:"25081"},{nome:"Calcinato",cap:"25011"},
    {nome:"Montichiari",cap:"25018"},{nome:"Carpenedolo",cap:"25013"},{nome:"Desenzano del Garda",cap:"25015"},
    {nome:"Lonato del Garda",cap:"25017"},{nome:"Rovato",cap:"25038"},{nome:"Chiari",cap:"25032"},
    {nome:"Palazzolo sull'Oglio",cap:"25036"},{nome:"Ospitaletto",cap:"25035"},
    {nome:"Travagliato",cap:"25039"},{nome:"Castegnato",cap:"25045"},{nome:"Gussago",cap:"25064"},
    {nome:"Cellatica",cap:"25060"},{nome:"Botticino",cap:"25082"},{nome:"Castenedolo",cap:"25014"},
    {nome:"Flero",cap:"25020"},{nome:"Poncarale",cap:"25020"},{nome:"Capriano del Colle",cap:"25020"},
    {nome:"Bagnolo Mella",cap:"25021"},{nome:"Leno",cap:"25024"},{nome:"Manerbio",cap:"25025"},
    {nome:"Verolanuova",cap:"25028"},{nome:"Orzinuovi",cap:"25034"},{nome:"Iseo",cap:"25049"},
    {nome:"Darfo Boario Terme",cap:"25047"},{nome:"Breno",cap:"25043"},{nome:"Edolo",cap:"25048"},
    {nome:"Vobarno",cap:"25079"},{nome:"Salò",cap:"25087"},{nome:"Gavardo",cap:"25085"},
    {nome:"Puegnago sul Garda",cap:"25080"},{nome:"Padenghe sul Garda",cap:"25080"},
    {nome:"Soiano del Lago",cap:"25080"},{nome:"Manerba del Garda",cap:"25080"},
    {nome:"Prevalle",cap:"25080"},{nome:"Calvagese della Riviera",cap:"25080"},
    {nome:"Cazzago San Martino",cap:"25046"},{nome:"Passirano",cap:"25050"},
    {nome:"Rodengo-Saiano",cap:"25050"},{nome:"Ome",cap:"25050"},{nome:"Zone",cap:"25050"}
  ],
  "MI": [
    {nome:"Milano",cap:"20100"},{nome:"Sesto San Giovanni",cap:"20099"},{nome:"Cinisello Balsamo",cap:"20092"},
    {nome:"Monza",cap:"20900"},{nome:"Cologno Monzese",cap:"20093"},{nome:"Rho",cap:"20017"},
    {nome:"Corsico",cap:"20094"},{nome:"Abbiategrasso",cap:"20081"},{nome:"Legnano",cap:"20025"},
    {nome:"Paderno Dugnano",cap:"20037"},{nome:"Vimodrone",cap:"20090"},{nome:"Segrate",cap:"20090"},
    {nome:"Pioltello",cap:"20096"},{nome:"Peschiera Borromeo",cap:"20068"},{nome:"San Donato Milanese",cap:"20097"},
    {nome:"Opera",cap:"20090"},{nome:"Buccinasco",cap:"20090"},{nome:"Cesano Boscone",cap:"20090"},
    {nome:"Assago",cap:"20090"},{nome:"Bareggio",cap:"20010"}
  ],
  "BG": [
    {nome:"Bergamo",cap:"24100"},{nome:"Dalmine",cap:"24044"},{nome:"Seriate",cap:"24068"},
    {nome:"Treviglio",cap:"24047"},{nome:"Romano di Lombardia",cap:"24058"},{nome:"Caravaggio",cap:"24043"},
    {nome:"Albino",cap:"24021"},{nome:"Nembro",cap:"24027"},{nome:"Ponte San Pietro",cap:"24036"},
    {nome:"Curno",cap:"24035"},{nome:"Stezzano",cap:"24040"},{nome:"Orio al Serio",cap:"24050"},
    {nome:"Grassobbio",cap:"24050"},{nome:"Azzano San Paolo",cap:"24052"},{nome:"Scanzorosciate",cap:"24020"},
    {nome:"Alzano Lombardo",cap:"24022"},{nome:"Ranica",cap:"24020"},{nome:"Torre Boldone",cap:"24020"},
    {nome:"Villa di Serio",cap:"24020"},{nome:"Gorle",cap:"24020"}
  ],
  "TO": [
    {nome:"Torino",cap:"10100"},{nome:"Moncalieri",cap:"10024"},{nome:"Collegno",cap:"10093"},
    {nome:"Grugliasco",cap:"10095"},{nome:"Nichelino",cap:"10042"},{nome:"Chieri",cap:"10023"},
    {nome:"Rivoli",cap:"10098"},{nome:"Settimo Torinese",cap:"10036"},{nome:"Venaria Reale",cap:"10078"}
  ],
  "VE": [
    {nome:"Venezia",cap:"30100"},{nome:"Mestre",cap:"30170"},{nome:"Marghera",cap:"30175"},
    {nome:"Chioggia",cap:"30015"},{nome:"Spinea",cap:"30038"},{nome:"Mira",cap:"30034"},
    {nome:"Mirano",cap:"30035"},{nome:"Dolo",cap:"30031"},{nome:"Jesolo",cap:"30016"}
  ],
  "RM": [
    {nome:"Roma",cap:"00100"},{nome:"Fiumicino",cap:"00054"},{nome:"Guidonia Montecelio",cap:"00012"},
    {nome:"Tivoli",cap:"00019"},{nome:"Velletri",cap:"00049"},{nome:"Anzio",cap:"00042"},
    {nome:"Civitavecchia",cap:"00053"},{nome:"Pomezia",cap:"00040"},{nome:"Albano Laziale",cap:"00041"}
  ],
  "NA": [
    {nome:"Napoli",cap:"80100"},{nome:"Giugliano in Campania",cap:"80014"},{nome:"Torre del Greco",cap:"80059"},
    {nome:"Pozzuoli",cap:"80078"},{nome:"Casoria",cap:"80026"},{nome:"Portici",cap:"80055"},
    {nome:"Ercolano",cap:"80056"},{nome:"Castellammare di Stabia",cap:"80053"},{nome:"Afragola",cap:"80021"}
  ],
  "BO": [
    {nome:"Bologna",cap:"40100"},{nome:"Imola",cap:"40026"},{nome:"Casalecchio di Reno",cap:"40033"},
    {nome:"San Lazzaro di Savena",cap:"40068"},{nome:"Castel Maggiore",cap:"40013"},
    {nome:"Calderara di Reno",cap:"40012"},{nome:"Pianoro",cap:"40065"},{nome:"Granarolo dell'Emilia",cap:"40057"}
  ],
  "FI": [
    {nome:"Firenze",cap:"50100"},{nome:"Scandicci",cap:"50018"},{nome:"Sesto Fiorentino",cap:"50019"},
    {nome:"Campi Bisenzio",cap:"50013"},{nome:"Empoli",cap:"50053"},{nome:"Signa",cap:"50058"},
    {nome:"Bagno a Ripoli",cap:"50012"},{nome:"Pontassieve",cap:"50065"},{nome:"Fiesole",cap:"50014"}
  ]
};

// Per province non in COMUNI, genera lista base
function getComuniProvincia(sigla) {
  if (COMUNI[sigla]) return COMUNI[sigla];
  const prov = PROVINCE[sigla];
  if (!prov) return [];
  // Ritorna almeno il capoluogo con cap generico
  return [{nome: prov.nome, cap: "00000"}];
}

export { PROVINCE, COMUNI, getComuniProvincia };
