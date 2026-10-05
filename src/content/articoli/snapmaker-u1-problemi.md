---
title: "Snapmaker U1: errori frequenti e come risolverli"
description: "Axis movement anomaly, filamento bloccato e stampe imperfette date per colpa dell'umidita': i problemi reali della U1 e le soluzioni che hanno funzionato."
categoria: stampa-3d
tipo: risoluzione-problemi
pubDate: 2026-10-05
cover: ../../assets/snapmaker-u1-problemi.jpg
coverAlt: "Diagnosi di un errore sulla Snapmaker U1"
tags:
  - "snapmaker"
  - "snapmaker u1"
  - "orca slicer"
  - "errori"
shorts:
  - id: LLpZ4siwPt4
    titolo: "Errore axis movement anomaly"
    nota: "Non e' meccanico: e' la torre di spurgo impostata di default in Snapmaker Orca."
    orizzontale: true
  - id: jaz1__NBthg
    titolo: "Filamento bloccato"
    nota: "Come liberarlo senza smontare mezza macchina."
  - id: HuXm_gljrBU
    titolo: "Filamento umido da combattere"
  - id: kxSQuXzd4Tk
    titolo: "Stampa problematica, ma non per colpa dell'umidita'"
draft: false
---

Sulla U1 i problemi che ho incontrato hanno una caratteristica in comune: **sembrano guasti
meccanici e quasi mai lo sono**. Il piu' istruttivo e' il primo.

## Axis movement anomaly: non e' la meccanica

Durante una stampa compare `axis movement anomaly`. Il nome suggerisce un asse che si inceppa, una
cinghia lenta, un carrello che urta qualcosa — e la reazione istintiva e' smontare.

**La causa e' software.** E' un bug di **Snapmaker Orca** legato alla **torre di spurgo impostata di
default**.

La soluzione e' una modifica alla configurazione della torre di spurgo nello slicer. Nessun
intervento hardware, nessuna calibrazione, nessun ricambio: solo un'impostazione.

E' il tipo di problema che fa perdere giornate intere a chi lo affronta dal lato sbagliato, perche'
ogni verifica meccanica torna negativa e sembra di non trovare niente.

**Perche' succede:** la torre di spurgo e' una struttura che la macchina costruisce a lato del pezzo
per scaricare il materiale a ogni cambio utensile. Se le sue coordinate finiscono fuori dall'area
utile o in conflitto con la sequenza dei movimenti, il firmware rileva uno spostamento che non
corrisponde a quanto previsto e si ferma — segnalando un'anomalia d'asse, che e' quello che
effettivamente *misura*, pur non essendo la causa.

Morale: su una macchina a cambio utensile, **prima di aprire la stampante controlla lo slicer**.

## Filamento bloccato

Capita, e sulla U1 la sequenza per liberarlo e' mostrata per intero nel video. Non richiede ricambi.

## Umidita': quando lo e' e quando non lo e'

Due video in due giorni, e sono il paio piu' utile della serie, perche' raccontano i due lati della
stessa questione.

**Il filamento umido e' un problema reale.** Il PLA assorbe acqua dall'aria; in stampa l'acqua
evapora nell'ugello e produce microbolle. Il risultato sono superfici opache, piccoli crepitii
durante l'estrusione e pezzi piu' fragili.

**Ma non e' la causa di tutto.** Il secondo video mostra una stampa problematica che con l'umidita'
non c'entra nulla. L'umidita' e' diventata la spiegazione di default per qualsiasi difetto, e questo
porta a essiccare bobine perfettamente asciutte invece di cercare la causa vera — che puo' essere la
temperatura, la velocita', un profilo sbagliato o il raffreddamento.

Il metodo sensato: **prima di dare la colpa all'umidita', chiediti se il difetto e' coerente con
l'umidita'**. Bolle, crepitii e superfici opache si'. Un angolo che si stacca o una quota sbagliata no.

## In sintesi

| Sintomo | Dove guardare per primo |
|---|---|
| `axis movement anomaly` | Lo **slicer**, non la meccanica: torre di spurgo |
| Filamento bloccato | Percorso del filamento, senza smontare |
| Superfici opache, crepitii | Umidita' del filamento |
| Difetti di quota o adesione | Tutto tranne l'umidita' |
