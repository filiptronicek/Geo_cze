const dataset = [
    [
      // A.
      "Hradec Králové",
      "Jaroměř",
      "Dvůr Králové nad Labem",
      "Trutnov",
      "Praha",
      "Plzeň",
      "České Budějovice",
      "Liberec",
      "Brno",
      "Nový Bydžov",
      "Barchov",
      "Světí",
      "Pardubice",
      "Roztoky",
      "Karlštejn",
      "Jeseník",
      "Úvaly",
      "Náchod",
      "Broumov",
      "Hronov",
      "Adršpach",
      "Nechanice",
      "Mokrovousy",
      "Bříza",
      "Všestary",
      "Předměřice nad Labem",
      "Lochenice",
      "Velký Vřešťov",
      "Starý Rokytník",
      "Nový Rokytník",
      "Hrádek nad Nisou",
      "Jablonec nad Nisou",
      "Špindlerův Mlýn",
      "Pec pod Sněžkou",
      "Velká Úpa",
      "Cheb",
      "Syrovátka",
      "Urbanice",
      "Praskačka",
      "Káranice",
      "Bílý Potok",
      "Harrachov",
      "Beroun",
      "Srbsko",
      "Skokovy",
      "Miletín",
      "Hořice",
      "Litomyšl",
      "Svitavy",
      "Česká Třebová",
      "Vamberk",
      "Ústí nad Orlicí",
      "Kostelec nad Orlicí",
      "Rychnov nad Kněžnou",
      "Lukavice",
      "Velké Hamry",
      "Jilemnice",
      "Čáslav",
      "Nová Paka",
      "Jičín",
      "Mladá Boleslav",
      "Teplice nad Bečvou",
      "Lázně Bohdaneč",
      "Přelouč",
      "Staré Hradiště",
      "Doudleby nad Orlicí",
      "Jetřichov",
      "Doksy",
      "Hrubá Skála",
      "Sobotka",
      "Bakov nad Jizerou",
      "Havlíčkův Brod",
      "Olomouc",
      "Vysoké Mýto",
      "Tišnov",
      "Chrudim",
      "Opočno",
      "Dobruška",
      "Smiřice",
      "Týniště nad Orlicí",
      "Černilov",
      "Třebechovice pod Orebem",
      "Podůlšany",
      "Pohřebačka",
      "Vysoká nad Labem",
      "Česká Skalice",
      "Vysokov",
      "Jizerka",
      "Radvánovice",
      "Častolovice",
    ],
    [
      // F.
      "Česká Lípa",
      "Nový Bydžov",
      "Brno",
      "Líbeznice",
      "Kounice",
      "Kutná Hora",
      "Ústí nad Labem",
      "Děčín",
      "Prčice",
      "Špindlerův Mlýn",
      "Jaroměř",
      "Plzeň",
      "Liberec",
      "Karlovy Vary",
      "Praha",
      "Hradec Králové",
      "Pardubice",
      "Třeboň",
      "Ostrava",
      "Hejnice",
      "Mladá Boleslav",
      "Milovice",
      "Lipno",
      "Rožmberk nad Vltavou",
      "Jáchymov",
      "Boží Dar",
      "Ratibořice",
      "Náchod",
      "Svitavy",
      "Český Krumlov",
      "Samšina",
      "Pec pod Sněžkou",
      "Bezdružice",
      "Vševily",
      "Příbram",
      "Dvůr Králové nad Labem",
      "Karlštejn",
      "Roudnice nad Labem",
      "Říčany",
      "Bedřichov",
      "Slapy",
      "Kuks",
      "Peklo",
      "Jilemnice",
      "Neratovice",
      "Český Dub",
      "Mělník",
      "Lázně Libverda",
      "Nová Paka",
      "Jablonec nad Nisou",
    ],
    [
      // M.
      "Lysá Hora",
      "Frenstat pod Radhoštěm",
      "Rožnov pod Radhoštěm",
      "Horní Bečva",
      "Pustevny",
      "Bílá",
      "Bumbálka",
      "Brno",
      "Ostrava",
      "Kopřivnice",
      "Stramberk",
      "Hukvaldy",
      "Zenklava",
      "Verovice",
      "Frýdlant nad Ostravicí",
      "Zlín",
      "Znojmo",
      "Mikulov",
      "Lednice",
      "Valtice",
      "Miroslav",
      "Opočno",
      "Svoboda nad Upou",
      "Malé Svatonovice",
      "Trutnov",
      "Janské Lázně",
      "Jiřetín pod Jedlovou",
      "Kytlice",
      "Žaltman",
      "Nový Bor",
      "Mělník",
      "Úterý",
      "Lázně Kynžvart",
      "Františkovy lázně",
      "Konstantinovy lázně",
      "Velká Hleďsebe",
      "Mariánské Lázně",
      "Loket",
      "Karlovy Vary",
      "Aš",
      "Cheb",
      "Sluknov",
      "Frýdlant",
      "Liberec",
      "Jablonec",
      "Lázně Libverda",
      "Hejnice",
      "Hrádek nad nisou",
      "Chrastava",
      "Nižbor",
      "Zloukovice",
      "Loučen",
      "Mukařov",
      "Babice",
      "Babičky",
      "Louňovice",
      "Jevany",
      "Černý Vůl",
      "Ústí nad Labem",
      "Děčín",
      "Hřensko",
      "Horoměřice",
      "Tuchoměřice",
      "Káraný",
      "Lysá nad Labem",
      "Luštěnice",
      "Benátky nad Jizerou",
      "Český Dub",
      "Janov nad Nisou",
      "Bedřichov",
      "Brandýs nad Labem",
      "Mladá Boleslav",
      "Stará Boleslav",
      "Slaný",
      "Voznice",
      "Dobříš",
      "Nový ves pod Pleší",
      "Karlštejn",
      "Libčice na Vltavou",
      "Říčany",
      "Světice",
      "Stránčice",
      "Koloděje",
      "Beroun",
      "Zdice",
      "Klatovy",
      "Domažlice",
      "Plzeň",
      "Plasy",
      "Zdíkov",
      "Bláhov",
      "Vacov",
      "Jizerka",
      "Kořenov",
      "Ještěd",
      "Rakovník",
      "Lužná u Rakovníka",
      "Krušovice",
      "Velké Popovice",
      "Poděbrady",
      "Jičín",
      "Nový Jičín",
      "Sedmihorky",
      "Sobotka",
      "Kladno",
      "Malíkovice",
      "Hvězda",
      "Ceské Budějovice",
      "Třebon",
      "Chlum u Třeboně",
      "Votice",
      "Bučovice u Votic",
      "Pacov",
      "Lukavec",
      "Načeradec",
      "Vlašim",
      "Benešov",
      "Ceský Sternberk",
      "Lipnice nad Sázavou",
      "Dobrá nad Sázavou",
      "Havlíčkův Brod",
      "Chotěboř",
      "Pardubice",
      "Kunětická Hora",
      "Světlá nad Sázavou",
      "Zdár nad Sázavou",
      "Nové město na Moravě",
      "Nové Město nad Metují",
      "Kaly",
      "Hýskov",
      "Velké Meziříčí",
      "Tišnov",
      "Kuřim",
      "Slavonice",
      "Písek",
      "Telč",
      "Bavorov",
      "Vodnany",
      "Helfenburk",
      "Sušice",
      "Dalešice",
      "Uvaly",
      "Uhrineves",
      "Celadná",
      "Jaroměř",
      "Hradec Králové",
      "Jeseník",
      "Hranice na Moravě",
      "Mošnov",
      "Příbor",
      "Frýdek Místek",
      "Morávka",
      "Mochov",
      "Peklo",
      "Ratibořice",
      "Landštejn",
      "Strakonice",
      "Mirošovice u Prahy",
      "Senohraby",
      "Hostivice",
      "Chrudim",
      "Mšené Lázně",
      "Mělník",
      "Líbeznice",
      "Bořanovice",
      "Neratovice",
      "Nová ves u Kralup",
      "Kralupy",
      "Osečná",
      "Tuřany",
      "Divice",
      "Postoloprty",
      "Ciněves",
      "Dymokury",
      "Loštice",
      "Mohelnice",
      "Rudná",
      "Masojedy",
      "Mlékojedy",
      "Hrusice",
      "Týn nad Vltavou",
      "Týnec nad Sázavou",
      "Pec pod Sněžkou",
      "Jilemnice",
      "Prostějov",
      "Vrchlabí",
      "Spindlerův Mlýn",
      "Suchomasty",
      "Revničov",
      "Kozojedy",
      "Horní Vidim",
      "Kostelec nad Černými lesy",
      "Vimperk",
      "Zadní Třebán",
      "Slapy",
      "Buš",
      "Plzeň",
      "Jindřichův Hradec",
      "Hronov",
      "Jáchymov",
      "Heroltice",
    ],
    [
      //parents
      "Aš",
      "Cheb",
      "Mariánské lázně",
      "Karlovy Vary",
      "Domažlice",
      "Plzeň",
      "České Budějovice",
      "Veselí nad Lužnicí",
      "Rozvadov",
      "Jáchymov",
      "Sokolov",
      "Ostrov nad Ohří",
      "Ústí nad Labem",
      "Děčín",
      "Litoměřice",
      "Lidice",
      "Benešov",
      "Liberec",
      "Roudnice nad Labem",
      "Český dub",
      "Třeboň",
      "Sušice",
      "Železná Ruda",
      "Říčany",
      "Karlštejn",
      "Hluboká nad Vltavou",
      "Mladá Boleslav",
      "Jičín",
      "Hradec Králové",
      "Jaroměř",
      "Okoř",
      "Ratibořice",
      "Nový Bydžov",
      "Dvůr Králové nad Labem",
      "Trutnov",
      "Pec pod Sněžkou",
      "Polička",
      "Rozkoš",
      "Velký Vřešťov",
      "Bedřichov",
      "Benecko",
      "Chrudim",
      "Týniště nad Orlicí",
      "Týnec nad Vltavou",
      "Starý Rokytník",
      "Konopiště",
      "Kolín",
      "Kutná Hora",
      "Český Krumlov",
      "Poděbrady",
      "Český Brod",
      "Kounice",
      "Líbeznice",
      "Slapy",
      "Mukařov",
      "Brno",
      "Ostrava",
      "Olomouc",
      "Jihlava",
      "Bystřice",
      "Sněžka",
      "Praděd",
      "Říp",
      "Bezděz",
      "Mikulov",
      "Lednice",
      "Znojmo",
      "Trutnov",
      "Zvičina",
      "Rožnov pod Radhoštěm",
      "Jeseník",
      "Prášily",
      "Orlík",
      "Příbram",
      "Kladno",
      "Beroun",
      "Mělník",
      "Rokytnice nad Jizerou",
      "Studenec",
      "Lázně Bohdaneč",
      "Chlumec nad Cidlinou",
      "Kuks",
      "Dobuška",
      "Jizerka",
      "Prčice",
      "Adršpach",
      "Kroměříž",
      "Náchod",
      "Nové Město nad Metují",
    ],
  ];