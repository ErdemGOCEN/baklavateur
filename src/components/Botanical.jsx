const arrangements = {
 1: [{x:0,y:0,w:250,h:170,angle:-12}],
 2: [{x:0,y:0,w:185,h:145,angle:-24},{x:65,y:125,w:185,h:145,angle:26}],
 3: [{x:15,y:0,w:170,h:130,angle:-18},{x:90,y:112,w:160,h:125,angle:32},{x:0,y:225,w:170,h:130,angle:-30}],
};
// Each group contains exactly 1, 2 or 3 individually drawn pistachios.
export default function Botanical({className='',count=2}) {
 const nuts=arrangements[count]||arrangements[2];
 const height=count===1?180:count===2?290:360;
 return <svg className={`botanical pistachio-illustration pistachio-count-${count} ${className}`} viewBox={`0 0 250 ${height}`} fill="none" aria-hidden="true" data-pistachio-count={count}>
  {nuts.map(({x,y,w,h,angle},i)=><image key={i} href="/images/illustrations/pistachio-single.png" x={x} y={y} width={w} height={h} transform={`rotate(${angle} ${x+w/2} ${y+h/2})`}/>)}
 </svg>;
}
