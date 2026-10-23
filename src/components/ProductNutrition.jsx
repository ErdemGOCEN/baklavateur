const labels={
fr:{title:'Valeurs nutritionnelles · pour 100 g',fiber:'Fibres',energy:'Énergie',fat:'Matières grasses',saturated:'dont acides gras saturés',carbohydrate:'Glucides',sugar:'dont sucres',protein:'Protéines',salt:'Sel',source:'Fiche produit Délice Land'},
en:{title:'Nutrition · per 100 g',fiber:'Fibre',energy:'Energy',fat:'Fat',saturated:'of which saturates',carbohydrate:'Carbohydrate',sugar:'of which sugars',protein:'Protein',salt:'Salt',source:'Délice Land product information'},
de:{title:'Nährwerte · pro 100 g',fiber:'Ballaststoffe',energy:'Energie',fat:'Fett',saturated:'davon gesättigte Fettsäuren',carbohydrate:'Kohlenhydrate',sugar:'davon Zucker',protein:'Eiweiß',salt:'Salz',source:'Produktinformationen von Délice Land'},
tr:{title:'Besin değerleri · 100 g için',fiber:'Lif',energy:'Enerji',fat:'Yağ',saturated:'Doymuş yağ',carbohydrate:'Karbonhidrat',sugar:'Şeker',protein:'Protein',salt:'Tuz',source:'Délice Land ürün bilgileri'}
};
export default function ProductNutrition({product,language}){
 if(!product.sourceUrl)return null;
 const l=labels[language]||labels.fr;
 return <div className="product-nutrition">{Object.keys(product.nutrition||{}).length>0 && <table className="nutrition-table"><caption>{l.title}</caption><tbody>{['energy','fat','saturated','carbohydrate','sugar','fiber','protein','salt'].filter(k=>product.nutrition[k]).map(k=><tr key={k}><td>{l[k]}</td><td>{product.nutrition[k]}</td></tr>)}</tbody></table>}<a className="product-source-link" href={product.sourceUrl} target="_blank" rel="noreferrer">{l.source.replace('Délice Land', product.sourceBrand || 'Délice Land')} ↗</a></div>;
}
