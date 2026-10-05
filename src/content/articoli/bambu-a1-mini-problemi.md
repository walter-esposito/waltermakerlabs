---
title: "Bambu Lab A1 mini: umidita' ed errori comuni"
description: "La A1 mini non ha una chiusura per i filamenti e d'inverno si vede. L'upgrade che risolve il problema e l'errore di correnti parassite che blocca la stampa."
categoria: stampa-3d
tipo: risoluzione-problemi
pubDate: 2026-10-05
cover: ../../assets/bambu-a1-mini-problemi.jpg
coverAlt: "Bambu Lab A1 mini durante la diagnosi di un errore"
tags:
  - "bambu lab"
  - "a1 mini"
  - "umidita"
  - "errori"
shorts:
  - id: 9aVqlaXh2x8
    titolo: "Upgrade contro l'umidita'"
    nota: "La A1 mini non ha una chiusura per i filamenti: ecco come porvi rimedio."
  - id: eLzZdGnrPQM
    titolo: "Errore correnti parassite"
draft: false
---

La A1 mini e' una macchina che funziona bene appena tolta dalla scatola, e i problemi che da' sono
pochi. Due pero' ricorrono, e uno nasce da una scelta di progetto.

## Il filamento resta all'aperto

La A1 mini **non ha una chiusura per i filamenti**. La bobina sta esposta all'aria della stanza per
tutta la durata della stampa — che su un pezzo grande significa ore, a volte una giornata intera.

Non e' un difetto di fabbricazione: e' il compromesso che permette a questa macchina di costare quel
che costa e di occupare poco spazio. Ma ha una conseguenza concreta: **il filamento assorbe
umidita'** mentre stampi.

Il PLA e' igroscopico, assorbe acqua dall'aria. In stampa quell'acqua evapora dentro l'ugello e forma
microbolle: superfici opache invece che lucide, piccoli crepitii durante l'estrusione, pezzi
meccanicamente piu' fragili. In una stanza umida il degrado si misura nell'arco della stessa stampa.

**La soluzione** e' un sistema di contenimento per la bobina, che la tenga isolata mentre stampi. Sulla
A1 mini lo considero un upgrade pressoche' indispensabile, non un accessorio — ed e' anche
l'intervento con il miglior rapporto fra costo e miglioramento visibile.

Da affiancare: **gel di silice rigenerabile** nel contenitore. Si rigenera in forno e si riusa, quindi
e' una spesa una tantum.

## Errore di correnti parassite

L'altro problema che ho incontrato e' un errore legato alle **correnti parassite**.

Le correnti parassite sono correnti indotte che si generano in un materiale conduttore immerso in un
campo magnetico variabile. Sulle stampanti vengono sfruttate dai sensori di livellamento a induzione:
la testa si avvicina al piatto, il campo cambia, il sensore misura la variazione e ne ricava la
distanza.

Quando la lettura esce dai valori attesi la macchina si ferma. Non e' un guasto: e' il sistema di
livellamento che si rifiuta di procedere con una misura in cui non ha fiducia, il che e' esattamente
cio' che vuoi da un sensore.

## In sintesi

| Sintomo | Causa | Intervento |
|---|---|---|
| Superfici opache, crepitii | Filamento umido, bobina esposta | Contenimento della bobina + gel di silice |
| Errore correnti parassite | Lettura anomala del sensore di livellamento | Controllare piatto e superficie di misura |
