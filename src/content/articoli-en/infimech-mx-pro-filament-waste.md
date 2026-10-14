---
title: "InfiMech MX Pro: the real number on filament waste"
description: "How much filament a toolchanger actually throws away at each colour change, the figure measured on the MX Pro, and when the Kickstarter opens."
categoria: stampa-3d
tipo: guida
pubDate: 2026-08-29
cover: ../../assets/infimech-mx-pro-spreco-filamento.jpg
coverAlt: "InfiMech MX Pro: the real number on filament waste"
videoId: t_KHvmW2Awc
videoDurata: PT29M
originale: infimech-mx-pro-spreco-filamento
tags:
  - "infimech"
  - "3d printing"
---

The figure that had been missing for months on the InfiMech MX has finally landed: **how much filament it wastes at each colour change.** I asked InfiMech directly, and the answer is more interesting than expected.

## The answer on waste

According to InfiMech, waste happens **only when each head is primed for the first time**: roughly **65 mm of filament, about 0.19 g**. On subsequent changes, they say, there's no additional purge.

Let's do the arithmetic. On an eight-colour print:

> 8 heads &times; 0.19 g = **~1.5 g for the entire print**, no matter how many colour changes it performs.

If that holds up, it's a change of scale. On a purge-based system, a complex multicolour print can generate tens of grams of waste &mdash; sometimes more than the part itself weighs. Here the waste is a constant that depends on the number of **heads**, not the number of **changes**.

Induction heating is probably what makes this possible: a head that reaches temperature very quickly needs less transition material.

## The other specifications that emerged

| | MX | MX Pro |
|---|---|---|
| Heated chamber | no | 65 &deg;C |
| Bed | 110 &deg;C | 110 &deg;C |
| Travel | 600 mm/s | 800 mm/s |
| Weight | 13 kg | 26 kg |
| Camera | &mdash; | 1080p 30 fps as standard |
| Laser module | &mdash; | optional |

**Materials.** The MX Pro handles PLA, PETG, ABS, ASA, TPU, PET, PA, PC and fibre-filled compounds. The MX stops at PLA, PETG, TPU, PVA, PLA-CF and PETG-CF: it is **not recommended** for ABS, ASA, PA, PC or PET. That's the difference the heated chamber makes, and it's the real criterion for choosing between the two.

**Other technical details:**

- Maximum volumetric flow **32 mm&sup3;/s** (ABS at 280 &deg;C)
- Levelling via pressure sensors **built into the bed**, not probes on the heads
- 0.4 mm hardened steel nozzles as standard, HRC50+, with **mixed diameters supported** across heads
- Colour change confirmed at **10-15 seconds**, on the Pro too
- Slicer: an InfiMech fork of OrcaSlicer
- Warehouses in Europe and the US
- Kickstarter expected **late September 2026**
- Price of additional heads: **not announced yet**

## Two things worth reading carefully

**Travel speed is not print speed.** 800 mm/s is how fast it moves when not depositing material, not how fast it prints. It's a number that marketing uses ambiguously all the time: the real ceiling is volumetric flow, which is those 32 mm&sup3;/s.

**Levelling in the bed is a sensible call.** With eight heads, putting a probe on each one would mean eight sensors to calibrate and keep aligned. Moving the measurement into the bed removes the problem at the root.

## What struck me most

InfiMech published the **official list of unresolved bugs**. That's rare transparency in this industry, and it's worth more than a lot of marketing claims: a company that lists its own open problems is saying it knows about them and is tracking them.

<p class="avviso-affiliato">
<strong>A word on crowdfunding:</strong> backing a campaign means funding a product into existence,
not buying it. Pledges are charged when the campaign closes regardless of progress, and recovering
money from failed projects is rare. Only commit amounts you're comfortable seeing arrive late, or
not arrive at all.
</p>
