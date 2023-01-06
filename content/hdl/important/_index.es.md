---
title: "Importante!"
description: "Notas importantes, por favor lee primero"
weight: 1
---

# Asegúrate de que tu modulo superior tenga un nombre único.

Te recomiendo que antecedas tu nombre de usuario de Github:

    # malo
    module top ( )

    # bueno
    module mattvenn_top ( )

# Sigue exactamente la definición del módulo

Solo soportamos 8 entradas y 8 salidas y deben de ser nombradas como ``io_in` y `io_out`:

    # malo
    module mattvenn_counter (
        input [100:0] my_bus,
        );

    # bueno
    module mattvenn_counter (
        input [7:0] io_in,
        output [7:0] io_out
        );

# No modifiques el config.tcl

Tiny Tapeout es un compromiso - intentamos que sea fácil llegar al ASIC, pero tenemos que hacer limitaciones, como la velocidad de entradas/salidas, la cantidad de entradas/salidas, el tamaño, etc. Si quieres ir a lo personalizado, revisa el curso [De cero a ASIC](https://zerotoasiccourse.com).

# Asegúrate de que tu diseño no sea optimizado

Puede ser muy extraño pasar de la programación al diseño de hardware. Las herramientas de [síntesis](https://www.zerotoasiccourse.com/terminology/synthesis/) intentan optimizar tu diseño en términos de área y velocidad.

* Si haces un registro de 32 bits pero solo usas los primeros dos bits, Yosys borrará los últimos 30 bits.
* Si haces un CPU de 8 bits pero solo emite 1 bit, Yosys todas sus rutas de datos y lógica para mantener solo ese bit.

¿Cómo puedes saber si tu diseño esta siendo optimizado? Piensa en cuánta lógica y flops necesita tu diseño para mantener una estimación aproximada del recuenta de células. Es normal que Yosys reduzca este número un poco, pero si es la mitad de lo que esperas o menos, vale la pena comprobarlo.

Si tienes un buen banco de pruebas, puedes ejecutarlo en el [GL verilog](/hdl/fpga_vs_asic/#testing) y eso te ayudará a asegurarte de que tu diseño sigue funcionando después de la síntesis.

# Revisa las advertensias de la síntesis

Revisa en el registro de Github action para la compilación de GDS. Revisa la sección de Yosys de la compilación y busca las advertencias. Algunas cómunes incluyen:

* Multiples conflictos en controladores
* Cables desconectados
