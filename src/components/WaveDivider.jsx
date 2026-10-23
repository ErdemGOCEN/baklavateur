const shapes = [
 'M0 44C180 4 300 10 480 38S790 82 960 43S1250 0 1440 40V100H0Z',
 'M0 32C180 78 300 74 480 42S790 2 960 41S1250 88 1440 48V100H0Z',
 'M0 44C180 4 300 10 480 38S790 82 960 43S1250 0 1440 40V100H0Z'
];
export default function WaveDivider({className='',phase=0}) {
 return <svg className={`live-wave ${className}`} viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path d={shapes[0]}><animate attributeName="d" values={shapes.join(';')} dur={`${9+phase%4}s`} begin={`${-(phase%5)}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1"/></path></svg>;
}
