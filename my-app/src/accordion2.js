import React, { useState } from "react";
import Accordion from './accordion'
const Accordion2 = () => {
  const [active,setActive] = useState(false);
  const kojin = (
    <ul>
      <li>＞口座をひらく</li>
      <li>＞住宅ローン</li>
      <li>＞投資信託</li>
      <li>＞外貨預金</li>
      <li>＞バンクイック</li>
      <li>＞キャンペーン一覧</li>
  </ul>
  )
  const houjin = (
    <ul>
      <li>＞口座をひらく</li>
      <li>＞でんさい</li>
      <li>＞CSRの取り組み</li>
      <li>＞地球環境問題への対応</li>
      <li>＞CSRの取り組み</li>
      <li>＞Global Website</li>
  </ul>
  )
  const kabu = (
    <ul>
      <li>＞決算広告</li>
      <li>＞社債情報</li>
    </ul>
  )

  const saiyou = (
    <ul>
      <li>＞新卒採用</li>
      <li>＞中途採用</li>
      <li>＞海外現地採用</li>
  </ul>
  )
  return(
    <>
      <Accordion title="個人お客様" Accordion_item={kojin} active={active} setActive={setActive}/>
      <Accordion title="法人お客様" Accordion_item={houjin} active={active} setActive={setActive}/>
      <Accordion title="株主・投資家の皆様" Accordion_item={kabu} active={active} setActive={setActive}/>
      <Accordion title="採用情報" Accordion_item={saiyou} active={active} setActive={setActive}/>
       </>
  )
}
export default Accordion2