---
title: "Anycubic Kobra X: warping e angoli che si staccano"
description: "Gli angoli del pezzo si alzano dal piatto? Perche' succede d'inverno, cosa c'entrano le correnti d'aria e la soluzione piu' rapida per salvare la stampa."
categoria: stampa-3d
tipo: risoluzione-problemi
pubDate: 2026-10-05
cover: ../../assets/anycubic-kobra-x-problemi.jpg
coverAlt: "Pezzo stampato con gli angoli sollevati dal piatto per il warping"
tags:
  - "anycubic"
  - "kobra x"
  - "warping"
  - "adesione"
shorts:
  - id: EMvhNMrl46Q
    titolo: "Warping: perche' succede e come risolverlo"
    nota: "Il caso tipico della stampa invernale in ambiente non riscaldato."
  - id: DrQwGWXtFf4
    titolo: "Aggiornamento firmware 1.2.0.2"
draft: false
---

Il **warping** e' il difetto in cui gli angoli del pezzo si sollevano dal piatto durante la stampa.
Nei casi lievi deforma la base; in quelli gravi il pezzo si stacca del tutto e la stampa e' persa.

Sulla Kobra X l'ho incontrato in una situazione molto precisa, ed e' la stessa in cui lo incontra
quasi tutti: **d'inverno, in un ambiente non riscaldato, sotto i 20 &deg;C**.

## Perche' succede

Il materiale esce dall'ugello caldo e si ritira raffreddandosi. Se il raffreddamento e' **troppo
rapido o non uniforme**, gli strati bassi si contraggono mentre quelli sopra sono ancora caldi: la
tensione che si genera tira gli angoli verso l'alto, fino a vincere l'adesione al piatto.

Le condizioni che lo innescano, in ordine di frequenza:

- **Ambiente freddo**, sotto i 20 &deg;C
- **Correnti d'aria**, che raffreddano una zona del pezzo piu' delle altre — spesso peggiori del
  freddo stesso, perche' creano uno sbilanciamento
- **Piano di stampa non abbastanza caldo**
- **Scarsa adesione al piatto**, per superficie sporca o non preparata

Gli angoli si sollevano per primi perche' sono il punto in cui il ritiro si somma da due direzioni.

## La soluzione piu' rapida

**Aggiungi un brim.** E' un bordo di materiale che lo slicer costruisce attorno alla base del pezzo,
aumentandone la superficie di contatto con il piatto. Tutti gli slicer hanno l'opzione.

E' la soluzione piu' veloce ed e' spesso sufficiente a salvare la stampa, perche' aggredisce
direttamente il punto debole: non impedisce la contrazione, ma le oppone molta piu' area adesa.

## Cosa fare se non basta

Se il brim da solo non risolve, i tre interventi successivi, in ordine di efficacia:

1. **Elimina le correnti d'aria.** Chiudi la finestra, sposta la stampante lontano dalla porta. Anche
   una scatola di cartone appoggiata sopra fa differenza.
2. **Alza la temperatura del piatto** di qualche grado rispetto al profilo standard.
3. **Pulisci il piatto** con alcol isopropilico. Il grasso delle dita e' una causa di distacco molto
   piu' comune di quanto si creda, e non si vede.

Se stampi regolarmente materiali che ritirano molto, la soluzione strutturale e' una camera chiusa:
e' il motivo per cui le macchine pensate per ABS e ASA sono chiuse e riscaldate.

## Firmware

A parte, ma utile: la Kobra X riceve aggiornamenti firmware. Tenerla aggiornata e' il modo piu'
economico di risolvere problemi che altri hanno gia' segnalato.
