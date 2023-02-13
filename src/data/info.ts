import image1 from '../assets/pics/HornosBelmonte.jpeg'
import image2 from '../assets/pics/HornosQbico.jpg'
import image3 from '../assets/pics/frontalHorno.jpeg'
import image4 from '../assets/pics/flautasHorno.jpeg'

export interface photos {
  id: number;
  title: string;
  description: string;
  url: string
}

export const galeryHome: photos[] = [{
  id: 1,
  title:'hornos belmonte',
  description: 'Hornos de dos carros modo tunel, con puertas frontales y posteriores.',
  url: image1
},
{
  id: 2,
  title:'hornos Qbico',
  description: 'Hornos de dos carros modo tunel, con puertas frontales y posteriores. Con implemnetacionde ahumador liquid, duchado, lavado entre otros.',
  url: image2
},
{
  id: 3,
  title:'horno doble',
  description: 'Hornos de dos carros modo tunel, con puertas fontales y posteriores.',
  url: image3
},
{
  id: 4,
  title:'hornos pesonal imaq',
  description: 'Hornos de dos carros modo tunel, con puertas fontales y posteriores.',
  url: image4
},
];