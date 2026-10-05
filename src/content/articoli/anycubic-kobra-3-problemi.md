---
title: "Anycubic Kobra 3: gli errori piu' frequenti e come risolverli"
description: "Errore 10122, errore 11511, testa intasata e blocchi dell'ACE Pro: i guasti incontrati davvero sulla Kobra 3 Combo, con la soluzione che ha funzionato."
categoria: stampa-3d
tipo: risoluzione-problemi
pubDate: 2026-10-05
cover: ../../assets/anycubic-kobra-3-problemi.jpg
coverAlt: "Intervento sull'estrusore della Anycubic Kobra 3 Combo"
tags:
  - "anycubic"
  - "kobra 3"
  - "ace pro"
  - "errori"
shorts:
  - id: O-OtSzCL7dc
    titolo: "Testa intasata: pulizia e ripristino"
    nota: "Procedura completa di pulizia della testa originale dopo un errore di intasamento."
    orizzontale: true
  - id: A37ETWB08Ig
    titolo: "Spaghetti error: un'ape nella stampante"
    nota: "Il rilevamento ha fermato la stampa in tempo e salvato 80 g di filamento."
  - id: 9CYSvfDWqgw
    titolo: "Hot end piegato"
    nota: "La conseguenza del giorno prima: hot end da sostituire e assistenza da contattare."
  - id: WdK3C4p-nP0
    titolo: "Fuori uso: problema di estrusione"
    nota: "Assistenza contattata, nuova testa di stampa in arrivo."
  - id: RzGIWD_PMPk
    titolo: "Estrusione: risolto"
    nota: "Prove di estrusione a vuoto e tagli puliti del filamento: la macchina riparte."
  - id: 3SpAWFV-_XQ
    titolo: "Blocco ACE Pro: nessuna estrusione"
    nota: "Due problemi insieme, individuati e risolti passo per passo."
    orizzontale: true
  - id: 9P7dk6uwVRo
    titolo: "Errore 10122: estrusore"
    nota: "Extruder heating abnormally: collegamenti, termoresistenza e cablaggio."
    orizzontale: true
  - id: sZ2dFaS7qqw
    titolo: "Errore 11511: estrusione anomala"
    nota: "Quasi sempre il filamento tagliato male dopo un cambio bobina."
    orizzontale: true
  - id: ZTMfL2xs0lU
    titolo: "Problema di stampa: e' colpa della stampante?"
  - id: N4FAOcr5a6A
    titolo: "L'errore di stampa, e come risolverlo"
draft: false
---

La Kobra 3 Combo e' stata la macchina su cui ho accumulato piu' ore e piu' guasti. Questa pagina
raccoglie quelli che ho incontrato davvero, con la soluzione che ha funzionato: non un elenco
teorico, ma quello che e' successo sul mio banco.

Quasi tutti ruotano attorno a due punti: **l'estrusore** e **l'ACE Pro**.

## Errore 10122 - Extruder heating abnormally

Accendi la macchina e trovi il codice `10122`. La stampante dice che l'estrusore non scalda in modo
normale.

Nella mia esperienza il problema non e' quasi mai la resistenza bruciata, ma la **catena di
collegamento**. Tre cose da controllare, in quest'ordine:

1. **I collegamenti** dell'estrusore, cercando connettori allentati o parzialmente sfilati
2. **La termoresistenza**, cioe' il sensore che misura la temperatura
3. **Il cablaggio**, che sulla testa di stampa si muove a ogni stampa e nel tempo si affatica

E' un guasto che spaventa ma si risolve in pochi minuti, perche' nella grande maggioranza dei casi
e' un contatto, non un componente morto.

**Perche' succede:** i fili che arrivano alla testa fanno migliaia di cicli di flessione. Se la
temperatura letta diventa incoerente, il firmware preferisce bloccare tutto piuttosto che rischiare
una fusione incontrollata. Il blocco e' una protezione, non un difetto.

## Errore 11511 - Extrusion abnormal

Il messaggio completo e' `CODE: 11511 Extrusion abnormal. Check the status of the filament and try
again.` La stampa non parte proprio.

Se e' comparso **subito dopo un cambio bobina**, nella quasi totalita' dei casi la causa e' una
sola: **il filamento non e' stato tagliato correttamente** per essere inserito nell'ACE Pro.

L'ACE Pro vuole una punta netta e leggermente affilata. Un taglio storto, schiacciato dalla tronchese
o con una bava laterale si impunta nel percorso e il sistema legge un'estrusione anomala.

**La soluzione:** estrai il filamento, taglia di nuovo con un taglio **netto e in diagonale**, e
reinserisci. E' banale, ed e' il motivo per cui questo errore e' tanto frequente quanto innocuo.

## Testa intasata (clogging)

Quando l'ugello si intasa la macchina smette di depositare materiale pur continuando a muoversi: ti
ritrovi con uno strato mancante o una stampa "a vuoto".

La pulizia della testa originale e' una procedura meccanica che si puo' fare in casa senza ricambi.
Il video dedicato la mostra per intero.

**Come prevenirlo:** gli intasamenti arrivano quasi sempre da filamento umido o da residui di un
materiale precedente stampato a temperatura diversa. Se alterni PLA e PETG sulla stessa testa,
conviene fare una purga abbondante al cambio.

## Blocco ACE Pro: non estrude piu' niente

Il caso piu' serio che ho avuto: l'ACE Pro aveva smesso del tutto di estrudere. Ed era **due problemi
sovrapposti**, non uno: e' la ragione per cui la diagnosi all'inizio sembrava non tornare.

E' la cosa piu' utile da sapere quando si ripara: se risolvi una causa e il sintomo resta, non
significa che la diagnosi fosse sbagliata. Puo' esserci un secondo guasto sotto.

## Hot end piegato e spaghetti error

Due episodi collegati, a un giorno di distanza.

Un'ape e' entrata in laboratorio e si e' infilata nella stampa in corso. Il **rilevamento spaghetti**
ha fatto il suo lavoro: ha visto l'anomalia, ha fermato la macchina e ha salvato **80 g di
filamento**. Il giorno dopo pero' e' emerso il danno: **hot end piegato**, da sostituire.

Due cose da portarsi a casa:

- Il rilevamento automatico vale i pochi euro che costa: una stampa persa senza accorgersene puo'
  consumare l'intera bobina.
- L'assistenza Anycubic, nella mia esperienza, ha risposto e inviato i ricambi. Vale la pena aprire
  un ticket invece di comprare subito il pezzo.

## In sintesi

| Sintomo | Causa piu' probabile |
|---|---|
| Errore 10122 | Collegamento o termoresistenza dell'estrusore |
| Errore 11511 dopo cambio bobina | Filamento tagliato male per l'ACE Pro |
| Stampa "a vuoto", strato mancante | Ugello intasato |
| Nessuna estrusione dall'ACE Pro | Possibili due guasti insieme |
| Stampa deformata, danno meccanico | Corpo estraneo: controllare l'hot end |
