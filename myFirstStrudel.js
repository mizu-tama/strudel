//練習課題 1: 基本的なビートの構築とテンポ調整
//練習課題 2: 変数を使った整理とベースラインの追加
setCpm(115/4)

const drums = sound("bd sd bd sd").bank("RolandTR909")
const hats = sound("hh*16").bank("RolandTR909").gain("0.2 0.5")

const bass = n("0 4 2 -")
  .scale("C:major")
  .sound("<sawtooth square> triangle")
  .n("<32 16 8 4>")
  .scope()

_$: drums
_$: hats
_$: bass

//練習課題 3: バリエーションの導入とシーケンスの応用
const mainBeat = s("bd sd bd sd*2").bank("RolandTR909")
const fill = s("bd*8 sd").bank("RolandTR909")

const variedDrums = every(4, () => fill, mainBeat)

const complexHats = s("hh <[hh hh]*3 hh>").bank("RolandTR909").gain("0.2")

$: variedDrums
$: complexHats
$: bass
