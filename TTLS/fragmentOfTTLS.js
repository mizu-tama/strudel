// 'fragment of TTLS' by @mizu__tama

$:note(`
     [c c g g a a g -]/4
     [f f e e d d c -]/4
     [g g f f e e d -]/4
  `).sound("piano").sometimes(x=>x.rev())
  .gain(.3)
  ._punchcard()
$:n("0").sound("gm_lead_3_calliope").struct("1")

