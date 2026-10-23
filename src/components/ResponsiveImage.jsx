import dimensions from '../data/imageDimensions.json';
export default function ResponsiveImage({src,alt,sizes,loading='lazy',...props}){
 const image=dimensions[src];
 return <img {...props} src={src} width={image?.width} height={image?.height} alt={alt} loading={loading} decoding="async"/>;
}
