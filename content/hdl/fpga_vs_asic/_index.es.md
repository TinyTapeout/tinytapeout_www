---
title: "De FPGA a ASIC"
description: "Consideraciones para personas que pasan de FPGA a ASIC"
---

# Reinicio

La mayoría de las FPGAs permiten declaraciones iniciales y los flops a menudo se inicializan en cero. Este no es el caso para las ASICs, donde los flops tendrán un valor aleatorio inicial al encenderse. Las declaraciones iniciales no están permitidas, así que debes usar un reinicio explícito.

{{< youtube 78MBLqm0OAQ >}}

# Combinacional vs Secuencial

En una FPGA los registros están 'libres' en el sentido de que cada LUT tiene un flop. Por lo tanto, las personas están acostumbradas a hacer mucho pipeline y registro. Pero en un ASIC, estás son las células más caras en términos de área, por lo que es mejor hacer más con combinacional y sólo usar flops sea necesario. Esto podría significar hacer más niveles profundos de lógica combinacional con menos flops de por medio.

# Pruebas

Además de las pruebas funcionales con un simulador y un banco de pruebas, deberías considerar las pruebas a nivel de compuerta. Esto permite simular tu diseño real de tu GDS (post síntesis).

Puedes encontrar un ejemplo del [flujo de trabajo de Github action para la simulación a nivel de compuerta aquí](https://github.com/TinyTapeout/tt02-verilog-demo/blob/gate-level/.github/workflows/gltest.yaml). Este se encarga de instalar los modelos para las células estándar.

También necesitamos ajustar el [Makefile](https://github.com/TinyTapeout/tt02-verilog-demo/blob/gate-level/src/Makefile) y, al conectar el módulo para hacer pruebas, asegúrate de [proporcionarle energía](https://github.com/TinyTapeout/tt02-verilog-demo/blob/ed43935f8d6236edb59f1a7940e2bf6f9db99603/src/tb.v#L30).
