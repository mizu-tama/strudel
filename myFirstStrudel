setCpm(115/4)

const drums = sound("bd sd bd sd").bank("RolandTR909")
const hats = sound("hh*16").bank("RolandTR909").gain("0.2 0.5")

const bass = n("0 4 2 4")
  .scale("C:major")
  .sound("<sawtooth square> triangle")
  .n("<32 16 8 4>")
  .scope()


$: drums
$: hats
$: bass
