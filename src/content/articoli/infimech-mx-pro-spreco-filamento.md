---
title: "InfiMech MX Pro: il numero vero sullo spreco di filamento"
description: "Quanto filamento butta davvero un toolchanger a ogni cambio colore, il dato misurato sulla MX Pro e la data di apertura del Kickstarter."
categoria: stampa-3d
tipo: guida
pubDate: 2026-08-29
cover: ../../assets/infimech-mx-pro-spreco-filamento.jpg
coverAlt: "InfiMech MX Pro: il numero vero sullo spreco di filamento"
videoId: t_KHvmW2Awc
videoDurata: PT29M
tags:
  - "infimech"
  - "stampa 3d"
draft: false
---

Il dato che mancava da mesi sulla InfiMech MX e' finalmente arrivato: **quanto filamento spreca a ogni
cambio colore.** L'ho chiesto direttamente a InfiMech e la risposta e' piu' interessante del previsto.

## La risposta sullo spreco

Secondo InfiMech, lo spreco avviene **solo al primo innesco di ogni testa**: circa **65 mm di
filamento, pari a ~0,19 g**. Nei cambi successivi, dicono, nessuno spurgo aggiuntivo.

Facciamo i conti. Su una stampa a otto colori:

> 8 teste &times; 0,19 g = **~1,5 g per l'intera stampa**, indipendentemente da quanti cambi colore
> vengono eseguiti.

Se il dato e' confermato, e' un cambio di scala. Su un sistema a spurgo, una stampa multicolore
complessa puo' generare decine di grammi di scarto &mdash; a volte piu' del peso del pezzo. Qui lo
scarto e' una costante che dipende dal numero di **teste**, non dal numero di **cambi**.

Il riscaldamento a induzione e' probabilmente cio' che rende possibile questo comportamento: una testa
che raggiunge temperatura molto rapidamente ha bisogno di meno materiale di transizione.

## Le altre specifiche emerse

| | MX | MX Pro |
|---|---|---|
| Camera riscaldata | no | 65 &deg;C |
| Piatto | 110 &deg;C | 110 &deg;C |
| Travel | 600 mm/s | 800 mm/s |
| Peso | 13 kg | 26 kg |
| Camera di ripresa | &mdash; | 1080p 30 fps di serie |
| Modulo laser | &mdash; | opzionale |

**Materiali.** La MX Pro gestisce PLA, PETG, ABS, ASA, TPU, PET, PA, PC e i caricati con fibra. La MX
si ferma a PLA, PETG, TPU, PVA, PLA-CF e PETG-CF: **non e' raccomandata** per ABS, ASA, PA, PC e PET.
E' la differenza che la camera riscaldata fa, ed e' il vero criterio di scelta fra le due.

**Altri dati tecnici:**

- Flusso volumetrico massimo **32 mm&sup3;/s** (ABS a 280 &deg;C)
- Livellamento con sensori di pressione **integrati nel piatto**, non sonde sulle teste
- Ugelli 0,4 di serie in acciaio temprato HRC50+, con **diametri misti supportati** fra le teste
- Cambio colore confermato in **10-15 secondi** anche sulla Pro
- Slicer: fork InfiMech di OrcaSlicer
- Magazzini in Europa e USA
- Kickstarter previsto per **fine settembre 2026**
- Prezzo delle teste aggiuntive: **ancora non comunicato**

## Due letture importanti

**Il travel non e' la velocita' di stampa.** 800 mm/s e' la velocita' degli spostamenti a vuoto, non
quella a cui deposita materiale. E' un numero che in comunicazione viene usato spesso in modo
ambiguo: il limite reale e' il flusso volumetrico, cioe' quei 32 mm&sup3;/s.

**Il livellamento nel piatto e' una scelta sensata.** Con otto teste, mettere una sonda su ciascuna
significherebbe otto sensori da calibrare e far restare allineati. Spostare la misura nel piatto
elimina il problema alla radice.

## La cosa che mi ha colpito di piu'

InfiMech ha pubblicato la **lista ufficiale dei bug irrisolti**. E' una trasparenza rara nel settore,
e vale piu' di molte dichiarazioni di marketing: un'azienda che elenca i propri problemi aperti sta
dicendo che li conosce e li sta tracciando.

<p class="avviso-affiliato">
<strong>Avvertenza crowdfunding:</strong> sostenere una campagna significa finanziare l'esistenza di un
prodotto, non comprarlo. I pledge vengono addebitati alla chiusura indipendentemente dallo stato di
avanzamento, e recuperare i fondi da progetti falliti e' raro. Valuta solo importi che ti sta bene
vedere arrivare in ritardo, o non arrivare.
</p>
