---
title: "De FPGA a ASIC"
description: "Consideraciones para personas que pasan de FPGA a ASIC"
---

# Reinicio

La mayoría de las FPGAs permiten declaraciones iniciales, y los flip-flops a menudo se inicializan en cero. Este no es el caso para las ASICs, donde los flip-flops tendrán un valor aleatorio inicial al encenderse. Las declaraciones iniciales no están permitidas, así que debes usar un reinicio explícito.

{{< youtube 78MBLqm0OAQ >}}

# Combinacional vs Secuencial

En una FPGA, los registros están "libres" en el sentido de que cada LUT tiene un flip-flop asignado. Por esto las personas están acostumbradas a usar segmentación y registros grandes. Mas en un ASIC, estas combinaciones de celdas son las más "caras" en términos de área, por lo que es mejor hacer uso de lógica combinacional y solo usar flip-flops cuando sea necesario. Esto podría significar hacer más niveles profundos de lógica combinacional con menos flip-flops de por medio.

# Pruebas

Además de las pruebas funcionales con un simulador y un banco de pruebas (*testbench*), deberías considerar las [pruebas a nivel de compuerta](/hdl/testing/#gate-level-testing). Esto brinda mayor seguridad de que tu diseño sí funcionará una vez fabricado.